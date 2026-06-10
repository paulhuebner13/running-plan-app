import React, { useEffect, useMemo, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { trainingPlan } from './trainingPlan.js';

// You can either keep these values in Vercel environment variables
// or replace them directly with your Supabase values.
const supabaseUrl = 'https://frfduxfbeugdagcaljur.supabase.co';
const supabaseAnonKey = 'sb_publishable_bL6iOCMHMPeBSG4tcUVcVw_vZMxFOUY';

const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

const STORAGE_KEY = 'running-plan-progress-v1';
const SYNC_KEY = 'paul-running';

function formatDate(value) {
  return new Intl.DateTimeFormat('de-AT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(new Date(`${value}T12:00:00`));
}


function getRunMinutes(run) {
  return (run.steps || []).reduce((sum, step) => sum + Number(step.minutes || 0), 0);
}

function formatMinutes(value) {
  if (!Number.isFinite(Number(value))) return value;
  return Math.round(Number(value));
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

function formatNumber(value) {
  if (!Number.isFinite(Number(value))) return value;
  return Number(value).toFixed(2);
}

function formatHr(value) {
  return String(value ?? '').replace(/\s*bpm/gi, '').trim();
}

function formatPace(value) {
  return String(value ?? '').replace(/\s*\/?km/gi, '').trim();
}

function parseRepeatedStep(step) {
  const label = String(step.label || '');
  const match = label.match(/(\d+)\s*[×x]\s*(\d+)\s*min/i);
  if (!match) return null;

  const reps = Number(match[1]);
  const minutesPerRep = Number(match[2]);
  const kmPerRep = Number(step.km || 0) / reps;

  return {
    reps,
    minutesPerRep,
    kmPerRep: Number.isFinite(kmPerRep) ? kmPerRep : step.km
  };
}

function makeWorkoutBlocks(run) {
  return (run.steps || []).map((step) => {
    const repeated = parseRepeatedStep(step);

    return {
      label: step.label,
      minutes: repeated ? repeated.minutesPerRep : step.minutes,
      hr: step.hr ?? run.optimalHr,
      hrRange: step.hrRange ?? run.hrRange,
      pace: step.pace ?? run.pace,
      km: repeated ? repeated.kmPerRep : (step.km ?? run.distanceKm)
    };
  });
}

export default function App() {
  const [weekIndex, setWeekIndex] = useState(getInitialWeekIndex);
  const [selectedRunId, setSelectedRunId] = useState(null);
  const [progress, setProgress] = useState({});

  const week = trainingPlan[weekIndex];
  const selectedRun = useMemo(() => {
    if (!selectedRunId) return null;
    return week.runs.find((run) => run.id === selectedRunId) || null;
  }, [week, selectedRunId]);

  const mandatoryRuns = week.runs.filter((run) => !run.optional);
  const totalMandatoryKm = mandatoryRuns.reduce((sum, run) => sum + Number(run.distanceKm || 0), 0);
  const completedMandatoryKm = mandatoryRuns
    .filter((run) => progress[run.id])
    .reduce((sum, run) => sum + Number(run.distanceKm || 0), 0);
  const progressPercent = totalMandatoryKm > 0
    ? Math.min(100, Math.round((completedMandatoryKm / totalMandatoryKm) * 100))
    : 0;

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
    if (!supabase) return;

    let ignore = false;
    async function loadProgress() {
      const { data, error } = await supabase
        .from('run_progress')
        .select('run_id, done')
        .eq('user_key', SYNC_KEY);

      if (ignore || error) return;

      const remote = {};
      for (const row of data || []) {
        remote[row.run_id] = row.done;
      }
      setProgress((current) => ({ ...current, ...remote }));
    }

    loadProgress();
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('modal-open', Boolean(selectedRun));
    return () => document.body.classList.remove('modal-open');
  }, [selectedRun]);

  async function updateRun(runId, done) {
    setProgress((current) => ({ ...current, [runId]: done }));

    if (!supabase) return;

    await supabase
      .from('run_progress')
      .upsert({
        user_key: SYNC_KEY,
        run_id: runId,
        done,
        updated_at: new Date().toISOString()
      });
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
        <div className="week-nav compact">
          <button aria-label="Vorherige Kalenderwoche" onClick={previousWeek} disabled={weekIndex === 0}>‹</button>
          <div>
            <h1>KW {week.kw}</h1>
            <p>{formatDate(week.startDate)} bis {formatDate(week.endDate)}</p>
          </div>
          <button aria-label="Nächste Kalenderwoche" onClick={nextWeek} disabled={weekIndex === trainingPlan.length - 1}>›</button>
        </div>

        <section className="km-progress-card">
          <div className="km-progress-label">
            <span>Zielumfang</span>
            <strong>{formatNumber(completedMandatoryKm)} / {formatNumber(totalMandatoryKm)} km</strong>
          </div>
          <div className="km-progress-track" aria-label="Kilometer-Fortschritt">
            <div className="km-progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>
        </section>
      </header>

      <section className="run-list" aria-label="Läufe dieser Kalenderwoche">
        {week.runs.map((run) => {
          const status = statusFor(run);
          return (
            <button
              key={run.id}
              className={`run-card ${status}`}
              onClick={() => setSelectedRunId(run.id)}
            >
              <div className="run-number">{run.optional ? '+' : run.order}</div>
              <div className="run-summary">
                <strong>{run.title}</strong>
                <span>{formatMinutes(getRunMinutes(run))} min · {formatNumber(run.distanceKm)} km · {formatPace(run.pace)} · HF {formatHr(run.optimalHr)}</span>
              </div>
              <div className="run-status">{status === 'done' ? '✓' : status === 'missed' ? '!' : 'offen'}</div>
            </button>
          );
        })}
      </section>

      {selectedRun && (
        <section className="modal-backdrop" onClick={() => setSelectedRunId(null)}>
          <article className="run-modal" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span>{selectedRun.optional ? 'Extra' : `Lauf ${selectedRun.order}`}</span>
                <h2>{selectedRun.title}</h2>
              </div>
              <button className="close-button" onClick={() => setSelectedRunId(null)} aria-label="Schließen">×</button>
            </div>

            <div className="workout-blocks">
              {makeWorkoutBlocks(selectedRun).map((block, index) => (
                <article className="workout-block" key={`${selectedRun.id}-${index}`}>
                  <div className="block-title">{block.label}</div>
                  <div className="block-grid">
                    <div className="metric-tile minutes-tile">
                      <span>Minuten</span>
                      <strong>{block.minutes}</strong>
                    </div>
                    <div className="metric-tile hr-tile">
                      <span>HF</span>
                      <strong>{formatHr(block.hr)}</strong>
                      <em>{formatHr(block.hrRange)}</em>
                    </div>
                    <div className="metric-tile pace-tile">
                      <span>Pace</span>
                      <strong>{formatPace(block.pace)}</strong>
                    </div>
                    <div className="metric-tile km-tile">
                      <span>km</span>
                      <strong>{formatNumber(block.km)}</strong>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button
              className={`modal-check-button ${progress[selectedRun.id] ? 'checked' : ''}`}
              onClick={() => updateRun(selectedRun.id, !progress[selectedRun.id])}
            >
              {progress[selectedRun.id] ? 'Erledigt' : 'Abhaken'}
            </button>
          </article>
        </section>
      )}
    </main>
  );
}
