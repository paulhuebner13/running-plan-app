const PREP_SECONDS = 15;

export const gymTemplates = [
  {
    key: 'gym-a',
    plannedDay: 'Wednesday',
    title: 'Upper + Shin',
    subtitle: 'Upper Body + Shin/Calves',
    durationMin: 70,
    exercises: [
      {
        key: 'db-bench-press',
        name: 'Dumbbell Bench Press',
        type: 'push',
        sets: 4,
        reps: '6–10',
        prepSeconds: PREP_SECONDS,
        setSeconds: 45,
        restSeconds: 90,
        explanation: 'Schulterblätter stabil nach hinten/unten, kontrolliert absenken, sauber hochdrücken. Gewicht erst steigern, wenn alle Sätze technisch stabil sind.',
        alternatives: ['Chest Press Maschine', 'Langhantel-Bankdrücken', 'Push-ups']
      },
      {
        key: 'lat-pulldown',
        name: 'Lat Pulldown',
        type: 'pull',
        sets: 3,
        reps: '8–12',
        prepSeconds: PREP_SECONDS,
        setSeconds: 45,
        restSeconds: 75,
        explanation: 'Brust leicht raus, Ellbogen nach unten ziehen, nicht mit Schwung. Schulterblätter aktiv nach unten führen.',
        alternatives: ['Assisted Pull-down Maschine', 'Cable Pullover', 'Einarmiger Kabelzug-Pulldown']
      },
      {
        key: 'seated-row',
        name: 'Seated Row',
        type: 'pull',
        sets: 3,
        reps: '8–12',
        prepSeconds: PREP_SECONDS,
        setSeconds: 45,
        restSeconds: 75,
        explanation: 'Aufrecht sitzen, Griff Richtung Bauch ziehen, Schulterblätter zusammenführen. Nicht nach hinten reißen.',
        alternatives: ['Chest-supported Row Maschine', 'Kabelrudern einarmig', 'Kurzhantelrudern mit Bruststütze']
      },
      {
        key: 'shoulder-press',
        name: 'Shoulder Press Maschine',
        type: 'push',
        sets: 3,
        reps: '8–12',
        prepSeconds: PREP_SECONDS,
        setSeconds: 45,
        restSeconds: 75,
        explanation: 'Rücken stabil anlehnen, kontrolliert drücken, Schultern nicht hochziehen. Nicht komplett ins Hohlkreuz gehen.',
        alternatives: ['Kurzhantel-Schulterdrücken sitzend', 'Machine Incline Press leicht', 'Seitheben Maschine leichter']
      },
      {
        key: 'triceps-pushdown',
        name: 'Cable Triceps Pushdown',
        type: 'push',
        sets: 3,
        reps: '10–15',
        prepSeconds: PREP_SECONDS,
        setSeconds: 40,
        restSeconds: 60,
        explanation: 'Ellbogen nah am Körper halten, nur Unterarme bewegen, unten kurz durchstrecken und kontrolliert zurück.',
        alternatives: ['Triceps Extension Maschine', 'Overhead Cable Extension', 'Dips Maschine leicht']
      },
      {
        key: 'biceps-curl',
        name: 'Biceps Curl Maschine',
        type: 'pull',
        sets: 3,
        reps: '10–15',
        prepSeconds: PREP_SECONDS,
        setSeconds: 40,
        restSeconds: 60,
        explanation: 'Oberarme stabil lassen, kontrolliert curlen, nicht mit Schwung aus Rücken oder Schulter arbeiten.',
        alternatives: ['Cable Curl', 'Kurzhantel Curls', 'Preacher Curl Maschine']
      },
      {
        key: 'calf-raises',
        name: 'Calf Raises',
        type: 'legs',
        sets: 4,
        reps: '10–15',
        prepSeconds: PREP_SECONDS,
        setSeconds: 45,
        restSeconds: 60,
        explanation: 'Volle Bewegung: unten kurz Dehnung, oben bewusst halten. Langsam und kontrolliert, nicht federn.',
        alternatives: ['Standing Calf Raise Maschine', 'Seated Calf Raise', 'Smith Machine Calf Raises']
      },
      {
        key: 'tibialis-raises',
        name: 'Tibialis Raises',
        type: 'legs',
        sets: 3,
        reps: '15–25 pro Seite',
        prepSeconds: PREP_SECONDS,
        setSeconds: 40,
        restSeconds: 45,
        explanation: 'Hauptoption: Cable Tibialis Raise mit Fußschlaufe. Fuß gegen den Widerstand nach oben Richtung Schienbein ziehen, oben kurz halten, langsam zurücklassen.',
        alternatives: ['Cable Tibialis Raise mit Fußschlaufe', 'Wall Tibialis Raises', 'Theraband Tibialis Raises', 'Heel Walks']
      }
    ]
  },
  {
    key: 'gym-b',
    plannedDay: 'Friday',
    title: 'Strength + Upper',
    subtitle: 'Running Strength + Upper Body',
    durationMin: 75,
    exercises: [
      {
        key: 'leg-press',
        name: 'Leg Press',
        type: 'legs',
        sets: 4,
        reps: '8–12',
        prepSeconds: PREP_SECONDS,
        setSeconds: 45,
        restSeconds: 90,
        explanation: 'Kontrolliert runter, Knie sauber führen, nicht maximal schwer. Ziel ist Stärke ohne die Laufwoche zu zerstören.',
        alternatives: ['Hack Squat Maschine leicht', 'Goblet Squat leicht', 'Split Squat kontrolliert']
      },
      {
        key: 'hamstring-curl',
        name: 'Hamstring Curl Maschine',
        type: 'legs',
        sets: 3,
        reps: '10–15',
        prepSeconds: PREP_SECONDS,
        setSeconds: 45,
        restSeconds: 75,
        explanation: 'Kontrolliert beugen, oben kurz halten, langsam zurücklassen. Kein Reißen aus dem Rücken.',
        alternatives: ['Seated Hamstring Curl', 'Lying Hamstring Curl', 'Swiss Ball Hamstring Curl']
      },
      {
        key: 'leg-extension',
        name: 'Leg Extension Maschine',
        type: 'legs',
        sets: 3,
        reps: '10–15',
        prepSeconds: PREP_SECONDS,
        setSeconds: 45,
        restSeconds: 75,
        explanation: 'Kontrolliert strecken, oben kurz halten, Gewicht nicht hochschleudern. Kniegefühl beachten.',
        alternatives: ['Single-leg Leg Extension', 'Step-ups leicht', 'Spanish Squat Isometric']
      },
      {
        key: 'hip-abductor',
        name: 'Hip Abductor Maschine',
        type: 'legs',
        sets: 3,
        reps: '12–20',
        prepSeconds: PREP_SECONDS,
        setSeconds: 40,
        restSeconds: 60,
        explanation: 'Beine kontrolliert nach außen drücken. Wichtig für Hüftstabilität, Knieachse und Lauftechnik.',
        alternatives: ['Cable Hip Abduction', 'Band Side Walks', 'Side-lying Hip Abduction']
      },
      {
        key: 'hip-adductor',
        name: 'Hip Adductor Maschine',
        type: 'legs',
        sets: 2,
        reps: '12–20',
        prepSeconds: PREP_SECONDS,
        setSeconds: 40,
        restSeconds: 60,
        explanation: 'Beine kontrolliert nach innen führen. Ergänzung für Balance und Becken-/Leistenstabilität.',
        alternatives: ['Cable Hip Adduction', 'Copenhagen Plank sehr leicht', 'Adductor Squeeze']
      },
      {
        key: 'incline-db-press',
        name: 'Incline Dumbbell Press',
        type: 'push',
        sets: 3,
        reps: '8–12',
        prepSeconds: PREP_SECONDS,
        setSeconds: 45,
        restSeconds: 75,
        explanation: 'Schrägbank, Brust oben treffen, kontrolliert absenken. Nicht zu schwer, weil Gym A schon Brust enthält.',
        alternatives: ['Chest Press Maschine', 'Kurzhantel-Bankdrücken leicht', 'Incline Press Maschine']
      },
      {
        key: 'lat-pulldown-b',
        name: 'Lat Pulldown',
        type: 'pull',
        sets: 3,
        reps: '8–12',
        prepSeconds: PREP_SECONDS,
        setSeconds: 45,
        restSeconds: 75,
        explanation: 'Zweiter Rückenreiz der Woche. Sauber und kontrolliert, nicht maximal schwer.',
        alternatives: ['Seated Row leicht', 'Cable Pullover', 'Einarmiger Pulldown']
      },
      {
        key: 'triceps-pushdown-b',
        name: 'Cable Triceps Pushdown',
        type: 'push',
        sets: 2,
        reps: '10–15',
        prepSeconds: PREP_SECONDS,
        setSeconds: 40,
        restSeconds: 60,
        explanation: 'Kurzer zweiter Trizepsreiz. Sauber ausführen, kein kompletter Arm-Zerstörer.',
        alternatives: ['Triceps Extension Maschine', 'Overhead Cable Extension', 'Dips Maschine leicht']
      },
      {
        key: 'biceps-curl-b',
        name: 'Biceps Curl Maschine',
        type: 'pull',
        sets: 2,
        reps: '10–15',
        prepSeconds: PREP_SECONDS,
        setSeconds: 40,
        restSeconds: 60,
        explanation: 'Kurzer zweiter Bizepsreiz. Kontrolliert, ohne Schwung.',
        alternatives: ['Cable Curl', 'Kurzhantel Curls', 'Preacher Curl Maschine']
      },
      {
        key: 'tibialis-raises-b',
        name: 'Tibialis Raises',
        type: 'legs',
        sets: 3,
        reps: '15–25 pro Seite',
        prepSeconds: PREP_SECONDS,
        setSeconds: 40,
        restSeconds: 45,
        explanation: 'Hauptoption: Cable Tibialis Raise mit Fußschlaufe. Fuß nach oben Richtung Schienbein ziehen, oben kurz halten, langsam zurücklassen.',
        alternatives: ['Cable Tibialis Raise mit Fußschlaufe', 'Wall Tibialis Raises', 'Theraband Tibialis Raises', 'Heel Walks']
      }
    ]
  }
];

export function getGymWorkoutsForWeek(week) {
  return gymTemplates.map((template) => ({
    ...template,
    id: `${week.year}-kw${week.kw}-${template.key}`,
    exercises: template.exercises.map((exercise, index) => ({
      ...exercise,
      id: `${week.year}-kw${week.kw}-${template.key}-${exercise.key}`,
      order: index + 1
    }))
  }));
}
