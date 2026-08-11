import React, { useEffect, useMemo, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { trainingPlan } from './trainingPlan.js';

const supabaseUrl = 'https://frfduxfbeugdagcaljur.supabase.co';
const supabaseAnonKey = 'sb_publishable_bL6iOCMHMPeBSG4tcUVcVw_vZMxFOUY';

const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

const STORAGE_KEY = 'running-plan-progress-v3';
const SYNC_KEY = 'paul-running-v3';

const DAY_OFFSETS = {
  Monday: 0,
  Tuesday: 1,
  Wednesday: 2,
  Thursday: 3,
  Friday: 4,
  Saturday: 5,
  Sunday: 6
};

const DAY_SHORT = {
  Monday: 'Mon',
  Tuesday: 'Tue',
  Wednesday: 'Wed',
  Thursday: 'Thu',
  Friday: 'Fri',
  Saturday: 'Sat',
  Sunday: 'Sun'
};

const CATEGORY_META = {
  'Recovery Run': { className: 'cat-recovery', label: 'Recovery' },
  'Easy Run': { className: 'cat-easy', label: 'Easy' },
  'Easy Run + Strides': { className: 'cat-easy-strides', label: 'Easy + Strides' },
  'Steady Run': { className: 'cat-steady', label: 'Steady' },
  'Progressive Run': { className: 'cat-progressive', label: 'Progressive' },
  'Threshold Run': { className: 'cat-threshold', label: 'Threshold' },
  'Interval Run': { className: 'cat-interval', label: 'Interval' },
  'HM Pace Run': { className: 'cat-hm-pace', label: 'HM Pace' },
  'Long Run': { className: 'cat-long', label: 'Long' },
  'Fast Finish Long Run': { className: 'cat-fast-finish', label: 'Fast Finish' },
  'Long Run with HM Pace Blocks': { className: 'cat-long-hm', label: 'Long + HM' },
  Race: { className: 'cat-race', label: 'Race' }
};

function categoryClass(run) {
  return CATEGORY_META[run.category || run.title]?.className || 'cat-default';
}

function categoryLabel(run) {
  return CATEGORY_META[run.category || run.title]?.label || run.category || run.title;
}

function formatDate(value) {
  return new Intl.DateTimeFormat('en-GB', {
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

function formatNumber(value) {
  if (!Number.isFinite(Number(value))) return value;
  return Number(value).toFixed(2);
}

function formatHr(value) {
  if (value === null || value === undefined || value === '') return '—';
  return String(value).replace(/\s*bpm/gi, '').trim();
}

function formatPace(value) {
  if (!value) return '—';
  return String(value).replace(/\s*\/?km/gi, '').trim();
}

function getStepMinutes(step) {
  return Number(step.minutes || 0) + Number(step.seconds || 0) / 60;
}

function getRunMinutes(run) {
  return Math.round((run.steps || []).reduce((sum, step) => sum + getStepMinutes(step), 0));
}

function formatStepDuration(step) {
  if (step.displayDuration) return step.displayDuration;
  if (step.seconds && !step.minutes) return `${step.seconds} s`;
  const total = getStepMinutes(step);
  if (total < 1 && total > 0) return `${Math.round(total * 60)} s`;
  return `${Math.round(total)} min`;
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
    displayDuration: `${minutesPerRep} min each`,
    kmPerRep: Number.isFinite(kmPerRep) ? kmPerRep : step.km
  };
}

function makeWorkoutBlocks(run) {
  return (run.steps || []).map((step) => {
    const repeated = parseRepeatedStep(step);

    return {
      label: step.label,
      duration: repeated ? repeated.displayDuration : formatStepDuration(step),
      hr: step.hr ?? null,
      hrRange: step.hrRange ?? null,
      pace: step.pace ?? null,
      km: repeated ? repeated.kmPerRep : (step.km ?? null),
      notes: step.notes ?? null
    };
  });
}

function plannedDateForRun(weekItem, run) {
  const start = new Date(`${weekItem.startDate}T00:00:00`);
  const offset = DAY_OFFSETS[run.plannedDay] ?? Math.max(0, Number(run.order || 1) - 1);
  start.setDate(start.getDate() + offset);
  return start;
}

function isRunDatePast(weekItem, run) {
  const planned = plannedDateForRun(weekItem, run);
  planned.setHours(23, 59, 59, 999);
  return new Date() > planned;
}

export default function App() {
  const [weekIndex, setWeekIndex] = useState(getInitialWeekIndex);
  const [selectedRunId, setSelectedRunId] = useState(null);
  const [progress, setProgress] = useState({});

  const week = trainingPlan[weekIndex];
  const currentWeekIndex = getInitialWeekIndex();
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

  function statusFor(run, weekItem = week) {
    if (progress[run.id]) return 'done';
    if (isRunDatePast(weekItem, run)) return 'missed';
    return 'upcoming';
  }

  function previousWeek() {
    setWeekIndex((index) => Math.max(0, index - 1));
    setSelectedRunId(null);
  }

  function nextWeek() {
    setWeekIndex((index) => Math.min(trainingPlan.length - 1, index + 1));
    setSelectedRunId(null);
  }

  function goToCurrentWeek() {
    setWeekIndex(currentWeekIndex);
    setSelectedRunId(null);
  }

  return (
    <main className="app-shell">
      <header className="hero-card">
        <div className="week-nav compact">
          <button aria-label="Previous week" onClick={previousWeek} disabled={weekIndex === 0}>‹</button>
          <div>
            <h1>Week {week.kw}</h1>
            <p>{formatDate(week.startDate)} to {formatDate(week.endDate)}</p>
          </div>
          <button className="today-button" aria-label="Go to current week" onClick={goToCurrentWeek} title="Current week">▦</button>
          <button aria-label="Next week" onClick={nextWeek} disabled={weekIndex === trainingPlan.length - 1}>›</button>
        </div>

        <section className="km-progress-card">
          <div className="km-progress-label">
            <span>Target volume</span>
            <strong>{formatNumber(completedMandatoryKm)} / {formatNumber(totalMandatoryKm)} km</strong>
          </div>
          <div className="km-progress-track" aria-label="Kilometre progress">
            <div className="km-progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>
        </section>
      </header>

      <section className="run-list" aria-label="Runs this week">
        {week.runs.map((run) => {
          const status = statusFor(run);
          const cat = categoryClass(run);
          return (
            <button
              key={run.id}
              className={`run-card ${status} ${cat}`}
              onClick={() => setSelectedRunId(run.id)}
            >
              <div className="run-number">{DAY_SHORT[run.plannedDay] || run.order}</div>
              <div className="run-summary">
                <div className="title-row">
                  <strong>{run.title}</strong>
                  <span className="category-badge">{categoryLabel(run)}</span>
                </div>
                <span>{getRunMinutes(run)} min · {formatNumber(run.distanceKm)} km · {formatPace(run.pace)} · HR {formatHr(run.optimalHr)}</span>
              </div>
              <div className="run-status">{status === 'done' ? '✓' : status === 'missed' ? '!' : 'open'}</div>
            </button>
          );
        })}
      </section>

      <section className="overview-section" aria-label="Training plan overview">
        <div className="section-heading">
          <h2>Weekly overview</h2>
          <span>done / missed / upcoming</span>
        </div>
        <div className="week-overview-list">
          {trainingPlan.map((weekItem, index) => (
            <button
              key={`${weekItem.year}-${weekItem.kw}`}
              className={`overview-week ${index === weekIndex ? 'selected' : ''}`}
              onClick={() => {
                setWeekIndex(index);
                setSelectedRunId(null);
              }}
            >
              <div className="overview-week-head">
                <strong>W{weekItem.kw}</strong>
                <span>{formatNumber(weekItem.targetKm)} km</span>
              </div>
              <div className="overview-pills">
                {weekItem.runs.map((run) => {
                  const status = statusFor(run, weekItem);
                  return (
                    <span key={run.id} className={`overview-pill ${categoryClass(run)} ${status}`}>
                      <b>{DAY_SHORT[run.plannedDay] || run.order}</b>
                      <em>{categoryLabel(run)}</em>
                      <i>{status === 'done' ? '✓' : status === 'missed' ? '!' : '•'}</i>
                    </span>
                  );
                })}
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedRun && (
        <section className="modal-backdrop" onClick={() => setSelectedRunId(null)}>
          <article className={`run-modal ${categoryClass(selectedRun)}`} onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span>{selectedRun.plannedDay} · Run {selectedRun.order}</span>
                <h2>{selectedRun.title}</h2>
                <p>{categoryLabel(selectedRun)} · {getRunMinutes(selectedRun)} min · {formatNumber(selectedRun.distanceKm)} km</p>
              </div>
              <button className="close-button" onClick={() => setSelectedRunId(null)} aria-label="Close">×</button>
            </div>

            <div className="workout-blocks">
              {makeWorkoutBlocks(selectedRun).map((block, index) => (
                <article className="workout-block" key={`${selectedRun.id}-${index}`}>
                  <div className="block-title">{block.label}</div>
                  <div className="block-grid">
                    <div className="metric-tile minutes-tile">
                      <span>Duration</span>
                      <strong>{block.duration}</strong>
                    </div>
                    <div className="metric-tile hr-tile">
                      <span>HR</span>
                      <strong>{formatHr(block.hr)}</strong>
                      <em>{formatHr(block.hrRange)}</em>
                    </div>
                    <div className="metric-tile pace-tile">
                      <span>Pace</span>
                      <strong>{formatPace(block.pace)}</strong>
                    </div>
                    <div className="metric-tile km-tile">
                      <span>km</span>
                      <strong>{block.km === null || block.km === undefined ? '—' : formatNumber(block.km)}</strong>
                    </div>
                  </div>
                  {block.notes && <p className="block-note">{block.notes}</p>}
                </article>
              ))}
            </div>

            <button
              className={`modal-check-button ${progress[selectedRun.id] ? 'checked' : ''}`}
              onClick={() => updateRun(selectedRun.id, !progress[selectedRun.id])}
            >
              {progress[selectedRun.id] ? 'Done' : 'Mark as done'}
            </button>
          </article>
        </section>
      )}
    </main>
  );
}
