import React, { useEffect, useMemo, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { trainingPlan } from './trainingPlan.js';

const supabaseUrl = 'https://frfduxfbeugdagcaljur.supabase.co';
const supabaseAnonKey = 'sb_publishable_bL6iOCMHMPeBSG4tcUVcVw_vZMxFOUY';

const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

const STORAGE_KEY = 'running-plan-progress-v4';
const SYNC_KEY = 'paul-running-v4';

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
  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(new Date(`${value}T12:00:00`));
}

function formatDateObject(date) {
  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date);
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
  const minuteMatch = label.match(/(\d+)\s*[×x]\s*(\d+)\s*min/i);
  const secondMatch = label.match(/(\d+)\s*[×x]\s*(\d+)\s*s/i);
  const match = minuteMatch || secondMatch;
  if (!match) return null;

  const reps = Number(match[1]);
  const amountPerRep = Number(match[2]);
  const kmPerRep = Number(step.km || 0) / reps;

  return {
    reps,
    displayDuration: minuteMatch ? `${amountPerRep} min each` : `${amountPerRep} s each`,
    kmPerRep: Number.isFinite(kmPerRep) ? kmPerRep : step.km
  };
}

function makeWorkoutBlocks(run) {
  const steps = run.steps || [];
  const blocks = [];

  for (let index = 0; index < steps.length; index += 1) {
    const step = steps[index];
    const nextStep = steps[index + 1];

    if (shouldGroupWithNext(step, nextStep)) {
      blocks.push({
        label: step.label,
        grouped: true,
        items: [makeSingleWorkoutBlock(step), makeSingleWorkoutBlock(nextStep)]
      });
      index += 1;
    } else {
      blocks.push(makeSingleWorkoutBlock(step));
    }
  }

  return blocks;
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

function getStatusLabel(status) {
  if (status === 'done') return 'done';
  if (status === 'missed') return 'missed';
  return 'open';
}

function shouldGroupWithNext(step, nextStep) {
  if (!nextStep) return false;
  const label = String(step.label || '');
  const nextLabel = String(nextStep.label || '');

  const isWorkBlock = /(Strides|Threshold|Interval|VO2max|5K Pace|HM Pace|Fast|Hard|Cruise|Repeat)/i.test(label);
  const isRecoveryBlock = /(Recovery|Easy Recovery|Full Recovery|Rest)/i.test(nextLabel);

  return isWorkBlock && isRecoveryBlock;
}

function makeSingleWorkoutBlock(step) {
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
}

export default function App() {
  const [weekIndex, setWeekIndex] = useState(getInitialWeekIndex);
  const [selectedRunId, setSelectedRunId] = useState(null);
  const [progress, setProgress] = useState({});
  const [view, setView] = useState('week');

  const week = trainingPlan[weekIndex];
  const selectedRun = useMemo(() => {
    if (!selectedRunId) return null;
    return week.runs.find((run) => run.id === selectedRunId) || null;
  }, [week, selectedRunId]);

  const mandatoryRuns = week.runs.filter((run) => !run.optional);
  const totalMandatoryKm = mandatoryRuns.reduce((sum, run) => sum + Number(run.distanceKm || 0), 0);
  const maxOverviewKm = useMemo(() => Math.max(...trainingPlan.map((weekItem) =>
    weekItem.runs.filter((run) => !run.optional).reduce((sum, run) => sum + Number(run.distanceKm || 0), 0)
  )), []);
  const completedMandatoryKm = mandatoryRuns
    .filter((run) => progress[run.id])
    .reduce((sum, run) => sum + Number(run.distanceKm || 0), 0);

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

  function openOverview() {
    setView('overview');
    setSelectedRunId(null);
  }

  function openWeek(index) {
    setWeekIndex(index);
    setSelectedRunId(null);
    setView('week');
  }

  return (
    <main className="app-shell">
      <header className="hero-card">
        {view === 'week' ? (
          <div className="week-nav compact">
            <button aria-label="Previous week" onClick={previousWeek} disabled={weekIndex === 0}>‹</button>
            <div>
              <h1>Week {week.kw}</h1>
              <p>{formatDate(week.startDate)} to {formatDate(week.endDate)}</p>
            </div>
            <button className="calendar-button" aria-label="Open weekly overview" onClick={openOverview} title="Weekly overview">▦</button>
            <button aria-label="Next week" onClick={nextWeek} disabled={weekIndex === trainingPlan.length - 1}>›</button>
          </div>
        ) : (
          <div className="overview-nav">
            <button aria-label="Back to selected week" onClick={() => setView('week')}>‹</button>
            <div>
              <h1>Weekly Overview</h1>
              <p>Tap a week to open details</p>
            </div>
          </div>
        )}

        {view === 'week' && (
          <section className="km-progress-card">
            <div className="km-progress-label">
              <span>Target volume</span>
              <strong>{formatNumber(completedMandatoryKm)} / {formatNumber(totalMandatoryKm)} km</strong>
            </div>
            <div className="km-progress-track segmented" aria-label="Completed weekly volume by run category">
              {mandatoryRuns.filter((run) => progress[run.id]).map((run) => {
                const width = totalMandatoryKm > 0 ? (Number(run.distanceKm || 0) / totalMandatoryKm) * 100 : 0;
                return (
                  <span
                    key={run.id}
                    className={`km-segment ${categoryClass(run)} done`}
                    style={{ width: `${width}%` }}
                    title={`${run.title}: ${formatNumber(run.distanceKm)} km completed`}
                  />
                );
              })}
            </div>
          </section>
        )}
      </header>

      {view === 'week' ? (
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
      ) : (
        <section className="overview-page" aria-label="Training plan weekly overview">
          <div className="overview-legend" aria-label="Status legend">
            <span><i className="legend-done" /> Done</span>
            <span><i className="legend-missed" /> Missed</span>
            <span><i className="legend-open" /> Open</span>
          </div>
          <div className="week-overview-list compact-squares">
            {trainingPlan.map((weekItem, index) => {
              const mandatoryWeekRuns = weekItem.runs.filter((run) => !run.optional);
              const doneCount = mandatoryWeekRuns.filter((run) => statusFor(run, weekItem) === 'done').length;
              const missedCount = mandatoryWeekRuns.filter((run) => statusFor(run, weekItem) === 'missed').length;
              const weekKm = mandatoryWeekRuns.reduce((sum, run) => sum + Number(run.distanceKm || 0), 0);
              const weekWidth = maxOverviewKm > 0 ? Math.max(6, (weekKm / maxOverviewKm) * 100) : 100;
              const allDone = mandatoryWeekRuns.length > 0 && doneCount === mandatoryWeekRuns.length;
              return (
                <button
                  key={`${weekItem.year}-${weekItem.kw}`}
                  className={`overview-week ${index === weekIndex ? 'selected' : ''} ${allDone ? 'all-done' : ''}`}
                  onClick={() => openWeek(index)}
                >
                  <div className="overview-week-head">
                    <strong>W{weekItem.kw}</strong>
                    <span>{formatDate(weekItem.startDate)}</span>
                    <em>{formatNumber(weekKm)} km</em>
                  </div>
                  <div className="overview-bars" aria-label={`Week ${weekItem.kw}: ${doneCount} done, ${missedCount} missed`}>
                    <div className="overview-volume-row" style={{ width: `${weekWidth}%` }}>
                      {mandatoryWeekRuns.map((run) => {
                        const status = statusFor(run, weekItem);
                        return (
                          <span
                            key={run.id}
                            className={`overview-run-segment ${status} ${categoryClass(run)}`}
                            style={{ flexGrow: Number(run.distanceKm || 0) }}
                            title={`${DAY_SHORT[run.plannedDay] || run.order} · ${run.title} · ${formatNumber(run.distanceKm)} km · ${getStatusLabel(status)}`}
                          >
                            <span className="overview-run-fill" />
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {selectedRun && (
        <section className="modal-backdrop" onClick={() => setSelectedRunId(null)}>
          <article className={`run-modal ${categoryClass(selectedRun)}`} onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span>{selectedRun.plannedDay} · Run {selectedRun.order} · {formatDateObject(plannedDateForRun(week, selectedRun))}</span>
                <h2>{selectedRun.title}</h2>
                <p>{categoryLabel(selectedRun)} · {getRunMinutes(selectedRun)} min · {formatNumber(selectedRun.distanceKm)} km</p>
              </div>
              <button className="close-button" onClick={() => setSelectedRunId(null)} aria-label="Close">×</button>
            </div>

            <div className="workout-blocks">
              {makeWorkoutBlocks(selectedRun).map((block, index) => (
                <article className={`workout-block ${block.grouped ? 'grouped-block' : ''}`} key={`${selectedRun.id}-${index}`}>
                  {block.grouped ? (
                    <div className="grouped-items">
                      {block.items.map((item, itemIndex) => (
                        <React.Fragment key={`${selectedRun.id}-${index}-${itemIndex}`}>
                          {itemIndex > 0 && <div className="block-divider" aria-hidden="true" />}
                          <div className="grouped-item">
                            <div className="block-title">{item.label}</div>
                            <div className="block-grid">
                              <div className="metric-tile minutes-tile highlight-tile">
                                <span>Duration</span>
                                <strong>{item.duration}</strong>
                              </div>
                              <div className="metric-tile hr-tile highlight-tile">
                                <span>HR</span>
                                <strong>{formatHr(item.hr)}</strong>
                                <em>{formatHr(item.hrRange)}</em>
                              </div>
                              <div className="metric-tile pace-tile">
                                <span>Pace</span>
                                <strong>{formatPace(item.pace)}</strong>
                              </div>
                              <div className="metric-tile km-tile">
                                <span>km</span>
                                <strong>{item.km === null || item.km === undefined ? '—' : formatNumber(item.km)}</strong>
                              </div>
                            </div>
                            {item.notes && <p className="block-note">{item.notes}</p>}
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  ) : (
                    <>
                      <div className="block-title">{block.label}</div>
                      <div className="block-grid">
                        <div className="metric-tile minutes-tile highlight-tile">
                          <span>Duration</span>
                          <strong>{block.duration}</strong>
                        </div>
                        <div className="metric-tile hr-tile highlight-tile">
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
                    </>
                  )}
                </article>
              ))}
            </div>

            <div className="modal-footer">
              <button
                className={`modal-check-button ${progress[selectedRun.id] ? 'checked' : ''}`}
                onClick={() => {
                  updateRun(selectedRun.id, !progress[selectedRun.id]);
                  setSelectedRunId(null);
                }}
              >
                {progress[selectedRun.id] ? 'Undo' : 'Mark as done'}
              </button>
            </div>
          </article>
        </section>
      )}
    </main>
  );
}
