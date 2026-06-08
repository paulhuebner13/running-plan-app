import { useEffect, useMemo, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { trainingPlan } from './trainingPlan.js';

const supabaseUrl = "https://frfduxfbeugdagcaljur.supabase.co";
const supabaseAnonKey = "sb_publishable_bL6iOCMHMPeBSG4tcUVcVw_vZMxFOUY";
const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

const STORAGE_KEY = 'running-plan-progress-v1';
const USER_KEY = 'running-plan-sync-key-v1';

function formatDate(value) {
  return new Intl.DateTimeFormat('de-AT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(new Date(`${value}T12:00:00`));
}

function getInitialWeekIndex() {
  const today = new Date();
  const index = trainingPlan.findIndex((week) => {
    const start = new Date(`${week.startDate}T00:00:00`);
    const end = new Date(`${week.endDate}T23:59:59`);
    return today >= start && today <= end;
  });
  return index >= 0 ? index : 0;
}

function makeRandomSyncKey() {
  const part = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `PAUL-${part}`;
}

export default function App() {
  const [weekIndex, setWeekIndex] = useState(getInitialWeekIndex);
  const [selectedRunId, setSelectedRunId] = useState(null);
  const [progress, setProgress] = useState({});
  const [syncKey, setSyncKey] = useState(() => localStorage.getItem(USER_KEY) || makeRandomSyncKey());
  const [syncState, setSyncState] = useState(supabase ? 'Supabase bereit' : 'Lokal, Supabase nicht konfiguriert');
  const [showSettings, setShowSettings] = useState(false);

  const week = trainingPlan[weekIndex];
  const selectedRun = useMemo(() => {
    return week.runs.find((run) => run.id === selectedRunId) || week.runs[0];
  }, [week, selectedRunId]);

  useEffect(() => {
    localStorage.setItem(USER_KEY, syncKey);
  }, [syncKey]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setProgress(JSON.parse(stored));
      } catch {
        setProgress({});
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    if (!supabase || !syncKey) return;

    let ignore = false;
    async function loadProgress() {
      setSyncState('Synchronisiere...');
      const { data, error } = await supabase
        .from('run_progress')
        .select('run_id, done')
        .eq('user_key', syncKey);

      if (ignore) return;

      if (error) {
        setSyncState('Supabase Fehler, lokal aktiv');
        return;
      }

      const remote = {};
      for (const row of data || []) {
        remote[row.run_id] = row.done;
      }
      setProgress((current) => ({ ...current, ...remote }));
      setSyncState('Synchronisiert');
    }

    loadProgress();
    return () => {
      ignore = true;
    };
  }, [syncKey]);

  async function updateRun(runId, done) {
    setProgress((current) => ({ ...current, [runId]: done }));

    if (!supabase || !syncKey) return;

    const { error } = await supabase
      .from('run_progress')
      .upsert({
        user_key: syncKey,
        run_id: runId,
        done,
        updated_at: new Date().toISOString()
      });

    setSyncState(error ? 'Supabase Fehler, lokal gespeichert' : 'Synchronisiert');
  }

  function isWeekPast(weekItem) {
    const end = new Date(`${weekItem.endDate}T23:59:59`);
    return new Date() > end;
  }

  function statusFor(run) {
    if (progress[run.id]) return 'done';
    if (isWeekPast(week) && !run.optional) return 'missed';
    return 'open';
  }

  function previousWeek() {
    setWeekIndex((index) => Math.max(0, index - 1));
    setSelectedRunId(null);
  }

  function nextWeek() {
    setWeekIndex((index) => Math.min(trainingPlan.length - 1, index + 1));
    setSelectedRunId(null);
  }

  return (
    <main className="app-shell">
      <header className="hero-card">
        <div className="topline">
          <span className="pill">20-Wochen-Laufplan</span>
          <button className="ghost-button" onClick={() => setShowSettings((value) => !value)}>
            Sync
          </button>
        </div>

        <div className="week-nav">
          <button aria-label="Vorherige Kalenderwoche" onClick={previousWeek} disabled={weekIndex === 0}>‹</button>
          <div>
            <h1>KW {week.kw}</h1>
            <p>{formatDate(week.startDate)} bis {formatDate(week.endDate)}</p>
          </div>
          <button aria-label="Nächste Kalenderwoche" onClick={nextWeek} disabled={weekIndex === trainingPlan.length - 1}>›</button>
        </div>

        <section className="week-meta">
          <div>
            <strong>{week.targetKm} km</strong>
            <span>Zielumfang</span>
          </div>
          <div>
            <strong>{week.theme}</strong>
            <span>Schwerpunkt</span>
          </div>
        </section>

        {showSettings && (
          <section className="settings-card">
            <label htmlFor="syncKey">Sync-Code</label>
            <input
              id="syncKey"
              value={syncKey}
              onChange={(event) => setSyncKey(event.target.value.trim())}
              placeholder="z. B. PAUL-123ABC"
            />
            <p>{syncState}</p>
          </section>
        )}
      </header>

      <section className="run-list" aria-label="Läufe dieser Kalenderwoche">
        {week.runs.map((run) => {
          const status = statusFor(run);
          return (
            <button
              key={run.id}
              className={`run-card ${status} ${selectedRun.id === run.id ? 'selected' : ''}`}
              onClick={() => setSelectedRunId(run.id)}
            >
              <div className="run-number">{run.optional ? '+' : run.order}</div>
              <div className="run-summary">
                <strong>{run.title}</strong>
                <span>{run.subtitle}</span>
              </div>
              <div className="run-status">{status === 'done' ? '✓' : status === 'missed' ? '!' : 'offen'}</div>
            </button>
          );
        })}
      </section>

      <section className={`detail-card ${selectedRun.type}`}>
        <div className="detail-heading">
          <div>
            <span className="pill subtle">{selectedRun.optional ? 'Optional' : `Lauf ${selectedRun.order}`}</span>
            <h2>{selectedRun.title}</h2>
            <p>{selectedRun.goal}</p>
          </div>
          <button
            className={`check-button ${progress[selectedRun.id] ? 'checked' : ''}`}
            onClick={() => updateRun(selectedRun.id, !progress[selectedRun.id])}
          >
            {progress[selectedRun.id] ? 'Erledigt' : 'Abhaken'}
          </button>
        </div>

        <div className="metrics-grid">
          <div>
            <span>Optimalpuls</span>
            <strong>{selectedRun.optimalHr} bpm</strong>
          </div>
          <div>
            <span>Okay-Bereich</span>
            <strong>{selectedRun.hrRange}</strong>
          </div>
          <div>
            <span>Zielpace</span>
            <strong>{selectedRun.pace}</strong>
          </div>
          <div>
            <span>Distanz</span>
            <strong>{selectedRun.distanceKm} km</strong>
          </div>
        </div>

        <div className="steps">
          {selectedRun.steps.map((step, index) => (
            <article className="step-card" key={`${selectedRun.id}-${index}`}>
              <div className="step-index">{index + 1}</div>
              <div>
                <h3>{step.label}</h3>
                <p>{step.detail}</p>
                <div className="step-tags">
                  <span>HF: {step.hr}</span>
                  <span>Pace: {step.pace}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer-note">
        Extra-Kilometer nur als optionaler Extra-Lauf: optimal 143 bpm, okay 138–148 bpm. Die Herzfrequenz sticht immer die Pace.
      </footer>
    </main>
  );
}
