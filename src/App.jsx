import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { trainingPlan } from './trainingPlan.js';
import { getGymWorkoutsForWeek } from './gymPlan.js';

const supabaseUrl = 'https://frfduxfbeugdagcaljur.supabase.co';
const supabaseAnonKey = 'sb_publishable_bL6iOCMHMPeBSG4tcUVcVw_vZMxFOUY';

const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

const STORAGE_KEY = 'sport-app-progress-v1';
const SYNC_KEY = 'paul-sport-v1';

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

const EXERCISE_TYPE_META = {
  push: { className: 'gym-push', label: 'Push' },
  pull: { className: 'gym-pull', label: 'Pull' },
  legs: { className: 'gym-legs', label: 'Legs' }
};

function categoryClass(run) {
  return CATEGORY_META[run.category || run.title]?.className || 'cat-default';
}

function categoryLabel(run) {
  return CATEGORY_META[run.category || run.title]?.label || run.category || run.title;
}

function exerciseTypeClass(exercise) {
  return EXERCISE_TYPE_META[exercise.type]?.className || 'gym-default';
}

function exerciseTypeLabel(exercise) {
  return EXERCISE_TYPE_META[exercise.type]?.label || 'Exercise';
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

function plannedDateForDay(weekItem, plannedDay, fallbackOrder = 1) {
  const start = new Date(`${weekItem.startDate}T00:00:00`);
  const offset = DAY_OFFSETS[plannedDay] ?? Math.max(0, Number(fallbackOrder || 1) - 1);
  start.setDate(start.getDate() + offset);
  return start;
}

function plannedDateForRun(weekItem, run) {
  return plannedDateForDay(weekItem, run.plannedDay, run.order);
}

function plannedDateForGym(weekItem, workout) {
  return plannedDateForDay(weekItem, workout.plannedDay, 1);
}

function isDatePast(date) {
  const planned = new Date(date);
  planned.setHours(23, 59, 59, 999);
  return new Date() > planned;
}

function isRunDatePast(weekItem, run) {
  return isDatePast(plannedDateForRun(weekItem, run));
}

function isGymDatePast(weekItem, workout) {
  return isDatePast(plannedDateForGym(weekItem, workout));
}

function getStatusLabel(status) {
  if (status === 'done') return 'done';
  if (status === 'missed') return 'missed';
  return 'open';
}

function buildExercisePhases(exercise) {
  const phases = [];
  for (let setIndex = 1; setIndex <= exercise.sets; setIndex += 1) {
    phases.push({
      kind: 'prep',
      label: 'Preparation',
      colorClass: 'phase-prep',
      seconds: exercise.prepSeconds,
      setIndex
    });
    phases.push({
      kind: 'work',
      label: `Set ${setIndex}`,
      colorClass: 'phase-work',
      seconds: exercise.setSeconds,
      setIndex
    });
    if (setIndex < exercise.sets) {
      phases.push({
        kind: 'rest',
        label: 'Rest',
        colorClass: 'phase-rest',
        seconds: exercise.restSeconds,
        setIndex
      });
    }
  }
  return phases;
}


function getExerciseTotalSeconds(exercise) {
  return buildExercisePhases(exercise).reduce((sum, phase) => sum + Number(phase.seconds || 0), 0);
}

function formatDurationFromSeconds(seconds) {
  const minutes = Math.ceil(Number(seconds || 0) / 60);
  return `${minutes} min`;
}

function getWorkoutDurationMinutes(workout) {
  const exerciseSeconds = (workout.exercises || []).reduce((sum, exercise) => sum + getExerciseTotalSeconds(exercise), 0);
  const transitionSeconds = Math.max(0, (workout.exercises || []).length - 1) * 120;
  return Math.ceil((exerciseSeconds + transitionSeconds) / 60);
}

function secondsToClock(seconds) {
  const rounded = Math.max(0, Math.round(seconds));
  const mins = Math.floor(rounded / 60);
  const secs = rounded % 60;
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

function phaseAtElapsed(phases, elapsed) {
  let cursor = 0;
  for (let index = 0; index < phases.length; index += 1) {
    const phase = phases[index];
    const next = cursor + phase.seconds;
    if (elapsed < next || index === phases.length - 1) {
      return {
        phase,
        index,
        elapsedInPhase: Math.max(0, elapsed - cursor),
        remainingInPhase: Math.max(0, next - elapsed)
      };
    }
    cursor = next;
  }
  return { phase: phases[phases.length - 1], index: phases.length - 1, elapsedInPhase: 0, remainingInPhase: 0 };
}


function getAudioContext(audioRef) {
  if (typeof window === 'undefined') return null;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!audioRef.current) {
    audioRef.current = new AudioContextClass();
  }
  if (audioRef.current.state === 'suspended') {
    audioRef.current.resume?.();
  }
  return audioRef.current;
}

function playTone(context, frequency, duration = 0.12, delay = 0, volume = 0.26, type = 'sine') {
  if (!context) return;
  const start = context.currentTime + delay;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.04);
}

function playDoubleCue(context, tones) {
  tones.forEach((tone) => {
    playTone(context, tone.frequency, tone.duration, tone.delay, tone.volume, tone.type || 'sine');
  });
}

function playTimerCue(context, kind) {
  if (!context) return;
  if (kind === 'prep') {
    playDoubleCue(context, [
      { frequency: 920, duration: 0.11, delay: 0, volume: 0.25 },
      { frequency: 920, duration: 0.11, delay: 0.17, volume: 0.25 }
    ]);
    return;
  }
  if (kind === 'work') {
    playDoubleCue(context, [
      { frequency: 620, duration: 0.16, delay: 0, volume: 0.32, type: 'triangle' },
      { frequency: 1040, duration: 0.24, delay: 0.22, volume: 0.34, type: 'triangle' }
    ]);
    return;
  }
  if (kind === 'rest') {
    playDoubleCue(context, [
      { frequency: 360, duration: 0.24, delay: 0, volume: 0.31 },
      { frequency: 300, duration: 0.34, delay: 0.30, volume: 0.31 }
    ]);
    return;
  }
  if (kind === 'done') {
    playDoubleCue(context, [
      { frequency: 760, duration: 0.14, delay: 0, volume: 0.30 },
      { frequency: 1180, duration: 0.30, delay: 0.18, volume: 0.34 }
    ]);
  }
}

function ExerciseTimer({ exercise, isDone, onDone, onToggleDone }) {
  const phases = useMemo(() => buildExercisePhases(exercise), [exercise]);
  const totalSeconds = useMemo(() => phases.reduce((sum, phase) => sum + phase.seconds, 0), [phases]);
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [dragging, setDragging] = useState(false);
  const audioRef = useRef(null);
  const lastSoundedPhaseRef = useRef(null);

  useEffect(() => {
    setElapsed(0);
    setRunning(false);
    setDragging(false);
    lastSoundedPhaseRef.current = null;
  }, [exercise.id]);

  const progress = totalSeconds > 0 ? Math.min(1, elapsed / totalSeconds) : 0;
  const current = phaseAtElapsed(phases, elapsed);

  useEffect(() => {
    if (!running || !current.phase) return;
    const phaseKey = `${exercise.id}-${current.index}`;
    if (lastSoundedPhaseRef.current === phaseKey) return;
    lastSoundedPhaseRef.current = phaseKey;
    playTimerCue(getAudioContext(audioRef), current.phase.kind);
  }, [running, current.index, current.phase, exercise.id]);

  useEffect(() => {
    if (!running || dragging) return undefined;
    const interval = window.setInterval(() => {
      setElapsed((currentElapsed) => {
        const next = Math.min(totalSeconds, currentElapsed + 1);
        if (next >= totalSeconds) {
          window.clearInterval(interval);
          setRunning(false);
          playTimerCue(getAudioContext(audioRef), 'done');
          onDone();
        }
        return next;
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [running, dragging, totalSeconds, onDone]);
  const size = 210;
  const center = size / 2;
  const outerRadius = 88;
  const innerRadius = 67;
  const outerStroke = 12;
  const innerStroke = 13;
  const outerCircumference = 2 * Math.PI * outerRadius;
  const angle = progress * 2 * Math.PI - Math.PI / 2;
  const dotX = center + innerRadius * Math.cos(angle);
  const dotY = center + innerRadius * Math.sin(angle);

  function setFromPointer(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    let nextAngle = Math.atan2(y, x) + Math.PI / 2;
    if (nextAngle < 0) nextAngle += 2 * Math.PI;
    const nextProgress = nextAngle / (2 * Math.PI);
    setElapsed(Math.round(nextProgress * totalSeconds));
  }

  let phaseCursor = 0;

  return (
    <section className={`exercise-timer ${current.phase.colorClass}`}>
      <div className="timer-layout">
        <div className="timer-circle-wrap">
          <svg
            className="timer-circle"
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            onPointerDown={(event) => {
              setDragging(true);
              event.currentTarget.setPointerCapture?.(event.pointerId);
              setFromPointer(event);
            }}
            onPointerMove={(event) => {
              if (dragging) setFromPointer(event);
            }}
            onPointerUp={() => setDragging(false)}
            onPointerCancel={() => setDragging(false)}
          >
            <circle className="timer-track" cx={center} cy={center} r={outerRadius} strokeWidth={outerStroke} />
            {phases.map((phase, index) => {
              const phaseStartSeconds = phases.slice(0, index).reduce((sum, item) => sum + item.seconds, 0);
              const phaseEndSeconds = phaseStartSeconds + phase.seconds;
              const segmentLength = totalSeconds > 0 ? (phase.seconds / totalSeconds) * outerCircumference : 0;
              const completedSeconds = Math.max(0, Math.min(elapsed, phaseEndSeconds) - phaseStartSeconds);
              const completedLength = totalSeconds > 0 ? (completedSeconds / totalSeconds) * outerCircumference : 0;
              const dashOffset = -phaseCursor;
              phaseCursor += segmentLength;
              return (
                <React.Fragment key={`${phase.kind}-${phase.setIndex}-${index}`}>
                  <circle
                    className={`timer-phase-segment timer-phase-base ${phase.colorClass}`}
                    cx={center}
                    cy={center}
                    r={outerRadius}
                    strokeWidth={outerStroke}
                    strokeDasharray={`${Math.max(0, segmentLength - 2)} ${outerCircumference}`}
                    strokeDashoffset={dashOffset}
                  />
                  {completedLength > 0 && (
                    <circle
                      className={`timer-phase-segment timer-phase-complete ${phase.colorClass}`}
                      cx={center}
                      cy={center}
                      r={outerRadius}
                      strokeWidth={outerStroke}
                      strokeDasharray={`${Math.max(0, completedLength - 2)} ${outerCircumference}`}
                      strokeDashoffset={dashOffset}
                    />
                  )}
                </React.Fragment>
              );
            })}
            <circle className="timer-inner-fill" cx={center} cy={center} r={innerRadius - 8} />
            <circle className="timer-dot" cx={dotX} cy={dotY} r="8" />
          </svg>
          <button
            className="timer-center"
            type="button"
            onClick={() => {
              getAudioContext(audioRef);
              setRunning((value) => !value);
            }}
            aria-label={running ? 'Pause timer' : 'Play timer'}
          >
            <span>{current.phase.label}</span>
            <strong>{secondsToClock(current.remainingInPhase)}</strong>
            <em>{current.phase.kind === 'work' ? `${exercise.reps} reps` : `Set ${current.phase.setIndex}/${exercise.sets}`}</em>
            <small>{running ? 'Pause' : 'Play'}</small>
          </button>
        </div>
        <div className="timer-side-controls">
          <button type="button" onClick={() => { setRunning(false); setElapsed(0); lastSoundedPhaseRef.current = null; }}>Reset</button>
          <button type="button" className={isDone ? 'checked' : ''} onClick={onToggleDone}>{isDone ? 'Undo' : 'Done'}</button>
        </div>
      </div>
    </section>
  );
}

function ExerciseDetailModal({ exercise, isDone, onClose, onDone, onToggleDone }) {
  return (
    <section className="modal-backdrop exercise-backdrop" onClick={onClose}>
      <article className={`exercise-modal ${exerciseTypeClass(exercise)}`} onClick={(event) => event.stopPropagation()}>
        <div className="modal-header exercise-header">
          <div>
            <span>{exerciseTypeLabel(exercise)} · {exercise.sets} × {exercise.reps}</span>
            <h2>{exercise.name}</h2>
            <p>{exercise.sets} sets · {exercise.setSeconds}s work · {exercise.restSeconds}s rest · 10s prep before every set · ca. {formatDurationFromSeconds(getExerciseTotalSeconds(exercise))}</p>
          </div>
          <button className="close-button" onClick={onClose} aria-label="Close">×</button>
        </div>
        <div className="exercise-detail-body">
          <section className="exercise-info-card">
            <h3>How to do it</h3>
            <p>{exercise.explanation}</p>
            <h3>Alternatives</h3>
            <div className="alternative-list">
              {exercise.alternatives.map((alternative) => <span key={alternative}>{alternative}</span>)}
            </div>
          </section>
          <ExerciseTimer exercise={exercise} isDone={isDone} onDone={onDone} onToggleDone={onToggleDone} />
        </div>
      </article>
    </section>
  );
}

export default function App() {
  const [weekIndex, setWeekIndex] = useState(getInitialWeekIndex);
  const [selectedRunId, setSelectedRunId] = useState(null);
  const [selectedGymWorkoutId, setSelectedGymWorkoutId] = useState(null);
  const [selectedExerciseId, setSelectedExerciseId] = useState(null);
  const [progress, setProgress] = useState({});
  const [view, setView] = useState('week');
  const [mode, setMode] = useState('running');

  const week = trainingPlan[weekIndex];
  const gymWorkouts = useMemo(() => getGymWorkoutsForWeek(week), [week]);
  const selectedRun = useMemo(() => {
    if (!selectedRunId) return null;
    return week.runs.find((run) => run.id === selectedRunId) || null;
  }, [week, selectedRunId]);
  const selectedGymWorkout = useMemo(() => {
    if (!selectedGymWorkoutId) return null;
    return gymWorkouts.find((workout) => workout.id === selectedGymWorkoutId) || null;
  }, [gymWorkouts, selectedGymWorkoutId]);
  const selectedExercise = useMemo(() => {
    if (!selectedExerciseId || !selectedGymWorkout) return null;
    return selectedGymWorkout.exercises.find((exercise) => exercise.id === selectedExerciseId) || null;
  }, [selectedExerciseId, selectedGymWorkout]);

  const mandatoryRuns = week.runs.filter((run) => !run.optional);
  const totalMandatoryKm = mandatoryRuns.reduce((sum, run) => sum + Number(run.distanceKm || 0), 0);
  const maxOverviewKm = useMemo(() => Math.max(...trainingPlan.map((weekItem) =>
    weekItem.runs.filter((run) => !run.optional).reduce((sum, run) => sum + Number(run.distanceKm || 0), 0)
  )), []);
  const completedMandatoryKm = mandatoryRuns
    .filter((run) => progress[run.id])
    .reduce((sum, run) => sum + Number(run.distanceKm || 0), 0);
  const completedGymCount = gymWorkouts.filter((workout) => progress[workout.id]).length;

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
    document.body.classList.toggle('modal-open', Boolean(selectedRun || selectedGymWorkout || selectedExercise));
    return () => document.body.classList.remove('modal-open');
  }, [selectedRun, selectedGymWorkout, selectedExercise]);

  async function updateProgress(itemId, done) {
    setProgress((current) => ({ ...current, [itemId]: done }));

    if (!supabase) return;

    await supabase
      .from('run_progress')
      .upsert({
        user_key: SYNC_KEY,
        run_id: itemId,
        done,
        updated_at: new Date().toISOString()
      });
  }

  function updateRun(runId, done) {
    updateProgress(runId, done);
  }

  function updateExercise(workout, exerciseId, done) {
    const nextProgress = { ...progress, [exerciseId]: done };
    const allDone = workout.exercises.every((exercise) => nextProgress[exercise.id]);
    nextProgress[workout.id] = allDone;
    setProgress(nextProgress);

    if (supabase) {
      supabase.from('run_progress').upsert({
        user_key: SYNC_KEY,
        run_id: exerciseId,
        done,
        updated_at: new Date().toISOString()
      });
      supabase.from('run_progress').upsert({
        user_key: SYNC_KEY,
        run_id: workout.id,
        done: allDone,
        updated_at: new Date().toISOString()
      });
    }
  }

  function statusFor(run, weekItem = week) {
    if (progress[run.id]) return 'done';
    if (isRunDatePast(weekItem, run)) return 'missed';
    return 'upcoming';
  }

  function gymStatusFor(workout, weekItem = week) {
    if (progress[workout.id]) return 'done';
    if (isGymDatePast(weekItem, workout)) return 'missed';
    return 'upcoming';
  }

  function previousWeek() {
    setWeekIndex((index) => Math.max(0, index - 1));
    setSelectedRunId(null);
    setSelectedGymWorkoutId(null);
    setSelectedExerciseId(null);
  }

  function nextWeek() {
    setWeekIndex((index) => Math.min(trainingPlan.length - 1, index + 1));
    setSelectedRunId(null);
    setSelectedGymWorkoutId(null);
    setSelectedExerciseId(null);
  }

  function openOverview() {
    setView('overview');
    setSelectedRunId(null);
    setSelectedGymWorkoutId(null);
    setSelectedExerciseId(null);
  }

  function openWeek(index) {
    setWeekIndex(index);
    setSelectedRunId(null);
    setSelectedGymWorkoutId(null);
    setSelectedExerciseId(null);
    setView('week');
  }

  function switchMode(nextMode) {
    setMode(nextMode);
    setView('week');
    setSelectedRunId(null);
    setSelectedGymWorkoutId(null);
    setSelectedExerciseId(null);
  }

  function renderRunningWeek() {
    return (
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
    );
  }

  function renderRunningOverview() {
    return (
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
    );
  }

  function renderGymWeek() {
    return (
      <section className="gym-list" aria-label="Gym this week">
        {gymWorkouts.map((workout) => {
          const status = gymStatusFor(workout);
          const doneExercises = workout.exercises.filter((exercise) => progress[exercise.id]).length;
          return (
            <button
              key={workout.id}
              className={`gym-workout-card ${status}`}
              onClick={() => setSelectedGymWorkoutId(workout.id)}
            >
              <div className="run-number gym-day">{DAY_SHORT[workout.plannedDay]}</div>
              <div className="run-summary">
                <div className="title-row">
                  <strong>{workout.title}</strong>
                  <span className="category-badge gym-badge">ca. {getWorkoutDurationMinutes(workout)} min</span>
                </div>
                <span>{workout.subtitle} · {doneExercises}/{workout.exercises.length} exercises · incl. 2 min transitions</span>
              </div>
              <div className="run-status">{status === 'done' ? '✓' : status === 'missed' ? '!' : 'open'}</div>
            </button>
          );
        })}
      </section>
    );
  }

  function renderGymOverview() {
    return (
      <section className="overview-page gym-overview-page" aria-label="Gym weekly overview">
        <div className="overview-legend" aria-label="Status legend">
          <span><i className="legend-done" /> Done</span>
          <span><i className="legend-missed" /> Missed</span>
          <span><i className="legend-open" /> Open</span>
        </div>
        <div className="week-overview-list">
          {trainingPlan.map((weekItem, index) => {
            const workouts = getGymWorkoutsForWeek(weekItem);
            const doneCount = workouts.filter((workout) => gymStatusFor(workout, weekItem) === 'done').length;
            const allDone = workouts.length > 0 && doneCount === workouts.length;
            return (
              <button
                key={`gym-${weekItem.year}-${weekItem.kw}`}
                className={`overview-week gym-overview-week ${index === weekIndex ? 'selected' : ''} ${allDone ? 'all-done' : ''}`}
                onClick={() => openWeek(index)}
              >
                <div className="overview-week-head">
                  <strong>W{weekItem.kw}</strong>
                  <span>{formatDate(weekItem.startDate)}</span>
                  <em>{doneCount}/2</em>
                </div>
                <div className="gym-overview-row">
                  {workouts.map((workout) => {
                    const status = gymStatusFor(workout, weekItem);
                    return (
                      <span key={workout.id} className={`gym-overview-segment ${status}`}>
                        {workout.title.replace('Gym ', '')}
                      </span>
                    );
                  })}
                </div>
              </button>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <main className="app-shell sport-app-shell">
      <header className="hero-card">
        {view === 'week' ? (
          <div className="week-nav compact">
            <button aria-label="Previous week" onClick={previousWeek} disabled={weekIndex === 0}>‹</button>
            <div>
              <h1>{mode === 'running' ? 'Running' : 'Gym'} · Week {week.kw}</h1>
              <p>{formatDate(week.startDate)} to {formatDate(week.endDate)}</p>
            </div>
            <button className="calendar-button" aria-label="Open weekly overview" onClick={openOverview} title="Weekly overview">▦</button>
            <button aria-label="Next week" onClick={nextWeek} disabled={weekIndex === trainingPlan.length - 1}>›</button>
          </div>
        ) : (
          <div className="overview-nav">
            <button aria-label="Back to selected week" onClick={() => setView('week')}>‹</button>
            <div>
              <h1>{mode === 'running' ? 'Running Overview' : 'Gym Overview'}</h1>
              <p>Tap a week to open details</p>
            </div>
          </div>
        )}

        {view === 'week' && mode === 'running' && (
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

        {view === 'week' && mode === 'gym' && (
          <section className="km-progress-card gym-progress-card">
            <div className="km-progress-label">
              <span>Gym workouts</span>
              <strong>{completedGymCount} / {gymWorkouts.length} done</strong>
            </div>
            <div className="gym-week-status-row">
              {gymWorkouts.map((workout) => (
                <span key={workout.id} className={`gym-status-pill ${gymStatusFor(workout)}`}>{workout.title}</span>
              ))}
            </div>
          </section>
        )}
      </header>

      {mode === 'running'
        ? (view === 'week' ? renderRunningWeek() : renderRunningOverview())
        : (view === 'week' ? renderGymWeek() : renderGymOverview())}

      <nav className="mode-switch" aria-label="Sport mode switch">
        <button className={mode === 'running' ? 'active' : ''} onClick={() => switchMode('running')}>Running</button>
        <button className={mode === 'gym' ? 'active' : ''} onClick={() => switchMode('gym')}>Gym</button>
      </nav>

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

      {selectedGymWorkout && !selectedExercise && (
        <section className="modal-backdrop" onClick={() => setSelectedGymWorkoutId(null)}>
          <article className="run-modal gym-modal" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header gym-modal-header">
              <div>
                <span>{selectedGymWorkout.plannedDay} · {formatDateObject(plannedDateForGym(week, selectedGymWorkout))}</span>
                <h2>{selectedGymWorkout.title}</h2>
                <p>{selectedGymWorkout.subtitle} · ca. {getWorkoutDurationMinutes(selectedGymWorkout)} min · incl. 2 min between exercises</p>
              </div>
              <button className="close-button" onClick={() => setSelectedGymWorkoutId(null)} aria-label="Close">×</button>
            </div>

            <div className="gym-exercise-list">
              {selectedGymWorkout.exercises.map((exercise) => (
                <button
                  key={exercise.id}
                  className={`exercise-card ${exerciseTypeClass(exercise)} ${progress[exercise.id] ? 'done' : ''}`}
                  onClick={() => setSelectedExerciseId(exercise.id)}
                >
                  <div className="exercise-order">{exercise.order}</div>
                  <div className="exercise-card-main">
                    <strong>{exercise.name}</strong>
                    <span>{exercise.sets} × {exercise.reps} · ca. {formatDurationFromSeconds(getExerciseTotalSeconds(exercise))} · {exercise.setSeconds}s work · {exercise.restSeconds}s rest</span>
                  </div>
                  <div className="exercise-type-pill">{exerciseTypeLabel(exercise)}</div>
                  <div className="exercise-done">{progress[exercise.id] ? '✓' : 'open'}</div>
                </button>
              ))}
            </div>

            <div className="modal-footer">
              <button
                className={`modal-check-button gym-finish-button ${progress[selectedGymWorkout.id] ? 'checked' : ''}`}
                onClick={() => {
                  const nextDone = !progress[selectedGymWorkout.id];
                  updateProgress(selectedGymWorkout.id, nextDone);
                  selectedGymWorkout.exercises.forEach((exercise) => updateProgress(exercise.id, nextDone));
                  setSelectedGymWorkoutId(null);
                }}
              >
                {progress[selectedGymWorkout.id] ? 'Undo workout' : 'Mark workout as done'}
              </button>
            </div>
          </article>
        </section>
      )}

      {selectedGymWorkout && selectedExercise && (
        <ExerciseDetailModal
          exercise={selectedExercise}
          isDone={Boolean(progress[selectedExercise.id])}
          onClose={() => setSelectedExerciseId(null)}
          onDone={() => {
            updateExercise(selectedGymWorkout, selectedExercise.id, true);
          }}
          onToggleDone={() => {
            updateExercise(selectedGymWorkout, selectedExercise.id, !progress[selectedExercise.id]);
          }}
        />
      )}
    </main>
  );
}
