// Categorised half marathon training plan.
// Every distance is calculated from the displayed minutes and pace.
// Goal race: 18 April 2027.
// Run overview heart rate uses the representative part of the workout, not warm-up or cool-down.

export const trainingPlan = [
  {
    "kw": 24,
    "year": 2026,
    "startDate": "2026-06-08",
    "endDate": "2026-06-14",
    "targetKm": 42.78,
    "runs": [
      {
        "id": "kw24-2026-lauf1",
        "order": 1,
        "title": "Steady Run",
        "type": "steady",
        "distanceKm": 8.07,
        "optimalHr": 164,
        "hrRange": "158-170 bpm",
        "pace": "6:49/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 12,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:35/km",
            "km": 1.58
          },
          {
            "label": "Steady",
            "minutes": 35,
            "hr": 164,
            "hrRange": "158-170 bpm",
            "pace": "6:20/km",
            "km": 5.53
          },
          {
            "label": "Cool-down",
            "minutes": 8,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:20/km",
            "km": 0.96
          }
        ]
      },
      {
        "id": "kw24-2026-lauf2",
        "order": 2,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 7.54,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:38/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 48,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:35/km",
            "km": 6.33
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw24-2026-lauf3",
        "order": 3,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 11.21,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:35/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 85,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:35/km",
            "km": 11.21
          }
        ]
      },
      {
        "id": "kw24-2026-lauf4",
        "order": 4,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 15.96,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:35/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 121,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:35/km",
            "km": 15.96
          }
        ]
      }
    ]
  },
  {
    "kw": 25,
    "year": 2026,
    "startDate": "2026-06-15",
    "endDate": "2026-06-21",
    "targetKm": 45.81,
    "runs": [
      {
        "id": "kw25-2026-lauf1",
        "order": 1,
        "title": "Interval Run",
        "type": "interval",
        "distanceKm": 7.47,
        "optimalHr": 184,
        "hrRange": "180-192 bpm",
        "pace": "6:42/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 15,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:34/km",
            "km": 1.98
          },
          {
            "label": "4 × 4 min",
            "minutes": 16,
            "hr": 184,
            "hrRange": "180-192 bpm",
            "pace": "4:59/km",
            "km": 3.21
          },
          {
            "label": "3 × 3 min Easy Jog",
            "minutes": 9,
            "hr": 145,
            "hrRange": "138-152 bpm",
            "pace": "8:19/km",
            "km": 1.08
          },
          {
            "label": "Cool-down",
            "minutes": 10,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:19/km",
            "km": 1.2
          }
        ]
      },
      {
        "id": "kw25-2026-lauf2",
        "order": 2,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 7.55,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:37/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 48,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:34/km",
            "km": 6.34
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw25-2026-lauf3",
        "order": 3,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 13.74,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:34/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 104,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:34/km",
            "km": 13.74
          }
        ]
      },
      {
        "id": "kw25-2026-lauf4",
        "order": 4,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 17.05,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:34/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 129,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:34/km",
            "km": 17.05
          }
        ]
      }
    ]
  },
  {
    "kw": 26,
    "year": 2026,
    "startDate": "2026-06-22",
    "endDate": "2026-06-28",
    "targetKm": 48.76,
    "runs": [
      {
        "id": "kw26-2026-lauf1",
        "order": 1,
        "title": "Threshold Run",
        "type": "threshold",
        "distanceKm": 6.76,
        "optimalHr": 178,
        "hrRange": "174-183 bpm",
        "pace": "6:31/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 12,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:33/km",
            "km": 1.59
          },
          {
            "label": "Threshold",
            "minutes": 24,
            "hr": 178,
            "hrRange": "174-183 bpm",
            "pace": "5:42/km",
            "km": 4.21
          },
          {
            "label": "Cool-down",
            "minutes": 8,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:18/km",
            "km": 0.96
          }
        ]
      },
      {
        "id": "kw26-2026-lauf2",
        "order": 2,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 7.57,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:36/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 48,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:33/km",
            "km": 6.36
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw26-2026-lauf3",
        "order": 3,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 16.42,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:33/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 124,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:33/km",
            "km": 16.42
          }
        ]
      },
      {
        "id": "kw26-2026-lauf4",
        "order": 4,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 18.01,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:33/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 136,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:33/km",
            "km": 18.01
          }
        ]
      }
    ]
  },
  {
    "kw": 27,
    "year": 2026,
    "startDate": "2026-06-29",
    "endDate": "2026-07-05",
    "targetKm": 39.73,
    "runs": [
      {
        "id": "kw27-2026-lauf1",
        "order": 1,
        "title": "Steady Run",
        "type": "steady",
        "distanceKm": 8.12,
        "optimalHr": 164,
        "hrRange": "158-170 bpm",
        "pace": "6:46/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 12,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:32/km",
            "km": 1.59
          },
          {
            "label": "Steady",
            "minutes": 35,
            "hr": 164,
            "hrRange": "158-170 bpm",
            "pace": "6:17/km",
            "km": 5.57
          },
          {
            "label": "Cool-down",
            "minutes": 8,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:18/km",
            "km": 0.96
          }
        ]
      },
      {
        "id": "kw27-2026-lauf2",
        "order": 2,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 7.58,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:35/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 48,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:32/km",
            "km": 6.37
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw27-2026-lauf3",
        "order": 3,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 10.09,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:32/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 76,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:32/km",
            "km": 10.09
          }
        ]
      },
      {
        "id": "kw27-2026-lauf4",
        "order": 4,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 13.94,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:32/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 105,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:32/km",
            "km": 13.94
          }
        ]
      }
    ]
  },
  {
    "kw": 28,
    "year": 2026,
    "startDate": "2026-07-06",
    "endDate": "2026-07-12",
    "targetKm": 50.7,
    "runs": [
      {
        "id": "kw28-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.04,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "8:17/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "8:17/km",
            "km": 6.04
          }
        ]
      },
      {
        "id": "kw28-2026-lauf2",
        "order": 2,
        "title": "Interval Run",
        "type": "interval",
        "distanceKm": 7.53,
        "optimalHr": 184,
        "hrRange": "180-192 bpm",
        "pace": "6:38/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 15,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:31/km",
            "km": 2.0
          },
          {
            "label": "4 × 4 min",
            "minutes": 16,
            "hr": 184,
            "hrRange": "180-192 bpm",
            "pace": "4:57/km",
            "km": 3.23
          },
          {
            "label": "3 × 3 min Easy Jog",
            "minutes": 9,
            "hr": 145,
            "hrRange": "138-152 bpm",
            "pace": "8:17/km",
            "km": 1.09
          },
          {
            "label": "Cool-down",
            "minutes": 10,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:17/km",
            "km": 1.21
          }
        ]
      },
      {
        "id": "kw28-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 7.6,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:34/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 48,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:31/km",
            "km": 6.39
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw28-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 11.57,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:31/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 87,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:31/km",
            "km": 11.57
          }
        ]
      },
      {
        "id": "kw28-2026-lauf5",
        "order": 5,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 17.96,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:31/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 135,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:31/km",
            "km": 17.96
          }
        ]
      }
    ]
  },
  {
    "kw": 29,
    "year": 2026,
    "startDate": "2026-07-13",
    "endDate": "2026-07-19",
    "targetKm": 53.8,
    "runs": [
      {
        "id": "kw29-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.05,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "8:16/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "8:16/km",
            "km": 6.05
          }
        ]
      },
      {
        "id": "kw29-2026-lauf2",
        "order": 2,
        "title": "Threshold Run",
        "type": "threshold",
        "distanceKm": 7.53,
        "optimalHr": 178,
        "hrRange": "174-183 bpm",
        "pace": "6:22/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 12,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:30/km",
            "km": 1.6
          },
          {
            "label": "Threshold",
            "minutes": 28,
            "hr": 178,
            "hrRange": "174-183 bpm",
            "pace": "5:39/km",
            "km": 4.96
          },
          {
            "label": "Cool-down",
            "minutes": 8,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:16/km",
            "km": 0.97
          }
        ]
      },
      {
        "id": "kw29-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 7.61,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:33/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 48,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:30/km",
            "km": 6.4
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw29-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 13.6,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:30/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 102,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:30/km",
            "km": 13.6
          }
        ]
      },
      {
        "id": "kw29-2026-lauf5",
        "order": 5,
        "title": "Fast Finish Long Run",
        "type": "fast-finish-long",
        "distanceKm": 19.01,
        "optimalHr": 166,
        "hrRange": "160-175 bpm",
        "pace": "7:16/km",
        "steps": [
          {
            "label": "Easy Long Run",
            "minutes": 111,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:30/km",
            "km": 14.8
          },
          {
            "label": "Fast Finish",
            "minutes": 27,
            "hr": 166,
            "hrRange": "160-175 bpm",
            "pace": "6:25/km",
            "km": 4.21
          }
        ]
      }
    ]
  },
  {
    "kw": 30,
    "year": 2026,
    "startDate": "2026-07-20",
    "endDate": "2026-07-26",
    "targetKm": 56.78,
    "runs": [
      {
        "id": "kw30-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.06,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "8:15/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "8:15/km",
            "km": 6.06
          }
        ]
      },
      {
        "id": "kw30-2026-lauf2",
        "order": 2,
        "title": "Steady Run",
        "type": "steady",
        "distanceKm": 8.18,
        "optimalHr": 164,
        "hrRange": "158-170 bpm",
        "pace": "6:43/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 12,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:30/km",
            "km": 1.6
          },
          {
            "label": "Steady",
            "minutes": 35,
            "hr": 164,
            "hrRange": "158-170 bpm",
            "pace": "6:14/km",
            "km": 5.61
          },
          {
            "label": "Cool-down",
            "minutes": 8,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:15/km",
            "km": 0.97
          }
        ]
      },
      {
        "id": "kw30-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 7.61,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:33/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 48,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:30/km",
            "km": 6.4
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw30-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 14.93,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:30/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 112,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:30/km",
            "km": 14.93
          }
        ]
      },
      {
        "id": "kw30-2026-lauf5",
        "order": 5,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 20.0,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:30/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 150,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:30/km",
            "km": 20.0
          }
        ]
      }
    ]
  },
  {
    "kw": 31,
    "year": 2026,
    "startDate": "2026-07-27",
    "endDate": "2026-08-02",
    "targetKm": 45.76,
    "runs": [
      {
        "id": "kw31-2026-lauf1",
        "order": 1,
        "title": "Steady Run",
        "type": "steady",
        "distanceKm": 8.2,
        "optimalHr": 164,
        "hrRange": "158-170 bpm",
        "pace": "6:42/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 12,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:29/km",
            "km": 1.6
          },
          {
            "label": "Steady",
            "minutes": 35,
            "hr": 164,
            "hrRange": "158-170 bpm",
            "pace": "6:13/km",
            "km": 5.63
          },
          {
            "label": "Cool-down",
            "minutes": 8,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:14/km",
            "km": 0.97
          }
        ]
      },
      {
        "id": "kw31-2026-lauf2",
        "order": 2,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 7.62,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:33/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 48,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:29/km",
            "km": 6.41
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw31-2026-lauf3",
        "order": 3,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 13.9,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:29/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 104,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:29/km",
            "km": 13.9
          }
        ]
      },
      {
        "id": "kw31-2026-lauf4",
        "order": 4,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 16.04,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:29/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 120,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:29/km",
            "km": 16.04
          }
        ]
      }
    ]
  },
  {
    "kw": 32,
    "year": 2026,
    "startDate": "2026-08-03",
    "endDate": "2026-08-09",
    "targetKm": 58.73,
    "runs": [
      {
        "id": "kw32-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.07,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "8:14/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "8:14/km",
            "km": 6.07
          }
        ]
      },
      {
        "id": "kw32-2026-lauf2",
        "order": 2,
        "title": "Progressive Run",
        "type": "progressive",
        "distanceKm": 9.12,
        "optimalHr": 168,
        "hrRange": "162-174 bpm",
        "pace": "6:35/km",
        "steps": [
          {
            "label": "Easy Start",
            "minutes": 24,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:28/km",
            "km": 3.21
          },
          {
            "label": "Steady Middle",
            "minutes": 21,
            "hr": 162,
            "hrRange": "156-168 bpm",
            "pace": "6:12/km",
            "km": 3.39
          },
          {
            "label": "Strong Finish",
            "minutes": 15,
            "hr": 168,
            "hrRange": "162-174 bpm",
            "pace": "5:57/km",
            "km": 2.52
          }
        ]
      },
      {
        "id": "kw32-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 7.64,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:32/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 48,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:28/km",
            "km": 6.43
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw32-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 14.87,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:28/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 111,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:28/km",
            "km": 14.87
          }
        ]
      },
      {
        "id": "kw32-2026-lauf5",
        "order": 5,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 21.03,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:28/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 157,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:28/km",
            "km": 21.03
          }
        ]
      }
    ]
  },
  {
    "kw": 33,
    "year": 2026,
    "startDate": "2026-08-10",
    "endDate": "2026-08-16",
    "targetKm": 60.73,
    "runs": [
      {
        "id": "kw33-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.09,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "8:13/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "8:13/km",
            "km": 6.09
          }
        ]
      },
      {
        "id": "kw33-2026-lauf2",
        "order": 2,
        "title": "Interval Run",
        "type": "interval",
        "distanceKm": 7.61,
        "optimalHr": 184,
        "hrRange": "180-192 bpm",
        "pace": "6:34/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 15,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:27/km",
            "km": 2.01
          },
          {
            "label": "4 × 4 min",
            "minutes": 16,
            "hr": 184,
            "hrRange": "180-192 bpm",
            "pace": "4:53/km",
            "km": 3.28
          },
          {
            "label": "3 × 3 min Easy Jog",
            "minutes": 9,
            "hr": 145,
            "hrRange": "138-152 bpm",
            "pace": "8:13/km",
            "km": 1.1
          },
          {
            "label": "Cool-down",
            "minutes": 10,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:13/km",
            "km": 1.22
          }
        ]
      },
      {
        "id": "kw33-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.0,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:30/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:27/km",
            "km": 7.79
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw33-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 15.97,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:27/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 119,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:27/km",
            "km": 15.97
          }
        ]
      },
      {
        "id": "kw33-2026-lauf5",
        "order": 5,
        "title": "Fast Finish Long Run",
        "type": "fast-finish-long",
        "distanceKm": 22.06,
        "optimalHr": 166,
        "hrRange": "160-175 bpm",
        "pace": "7:12/km",
        "steps": [
          {
            "label": "Easy Long Run",
            "minutes": 128,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:27/km",
            "km": 17.18
          },
          {
            "label": "Fast Finish",
            "minutes": 31,
            "hr": 166,
            "hrRange": "160-175 bpm",
            "pace": "6:21/km",
            "km": 4.88
          }
        ]
      }
    ]
  },
  {
    "kw": 34,
    "year": 2026,
    "startDate": "2026-08-17",
    "endDate": "2026-08-23",
    "targetKm": 63.73,
    "runs": [
      {
        "id": "kw34-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.1,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "8:12/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "8:12/km",
            "km": 6.1
          }
        ]
      },
      {
        "id": "kw34-2026-lauf2",
        "order": 2,
        "title": "Steady Run",
        "type": "steady",
        "distanceKm": 8.27,
        "optimalHr": 164,
        "hrRange": "158-170 bpm",
        "pace": "6:39/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 12,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:26/km",
            "km": 1.61
          },
          {
            "label": "Steady",
            "minutes": 35,
            "hr": 164,
            "hrRange": "158-170 bpm",
            "pace": "6:10/km",
            "km": 5.68
          },
          {
            "label": "Cool-down",
            "minutes": 8,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:12/km",
            "km": 0.98
          }
        ]
      },
      {
        "id": "kw34-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.01,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:30/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:26/km",
            "km": 7.8
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw34-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 17.35,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:26/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 129,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:26/km",
            "km": 17.35
          }
        ]
      },
      {
        "id": "kw34-2026-lauf5",
        "order": 5,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 23.0,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:26/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 171,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:26/km",
            "km": 23.0
          }
        ]
      }
    ]
  },
  {
    "kw": 35,
    "year": 2026,
    "startDate": "2026-08-24",
    "endDate": "2026-08-30",
    "targetKm": 50.73,
    "runs": [
      {
        "id": "kw35-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 5.5,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "8:11/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 45,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "8:11/km",
            "km": 5.5
          }
        ]
      },
      {
        "id": "kw35-2026-lauf2",
        "order": 2,
        "title": "Steady Run",
        "type": "steady",
        "distanceKm": 8.29,
        "optimalHr": 164,
        "hrRange": "158-170 bpm",
        "pace": "6:38/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 12,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:25/km",
            "km": 1.62
          },
          {
            "label": "Steady",
            "minutes": 35,
            "hr": 164,
            "hrRange": "158-170 bpm",
            "pace": "6:09/km",
            "km": 5.69
          },
          {
            "label": "Cool-down",
            "minutes": 8,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:11/km",
            "km": 0.98
          }
        ]
      },
      {
        "id": "kw35-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 7.68,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:29/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 48,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:25/km",
            "km": 6.47
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw35-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 11.19,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:25/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 83,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:25/km",
            "km": 11.19
          }
        ]
      },
      {
        "id": "kw35-2026-lauf5",
        "order": 5,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 18.07,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:25/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 134,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:25/km",
            "km": 18.07
          }
        ]
      }
    ]
  },
  {
    "kw": 36,
    "year": 2026,
    "startDate": "2026-08-31",
    "endDate": "2026-09-06",
    "targetKm": 63.7,
    "runs": [
      {
        "id": "kw36-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.12,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "8:10/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "8:10/km",
            "km": 6.12
          }
        ]
      },
      {
        "id": "kw36-2026-lauf2",
        "order": 2,
        "title": "Progressive Run",
        "type": "progressive",
        "distanceKm": 9.21,
        "optimalHr": 168,
        "hrRange": "162-174 bpm",
        "pace": "6:31/km",
        "steps": [
          {
            "label": "Easy Start",
            "minutes": 24,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:24/km",
            "km": 3.24
          },
          {
            "label": "Steady Middle",
            "minutes": 21,
            "hr": 162,
            "hrRange": "156-168 bpm",
            "pace": "6:08/km",
            "km": 3.42
          },
          {
            "label": "Strong Finish",
            "minutes": 15,
            "hr": 168,
            "hrRange": "162-174 bpm",
            "pace": "5:53/km",
            "km": 2.55
          }
        ]
      },
      {
        "id": "kw36-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.05,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:28/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:24/km",
            "km": 7.84
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw36-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 16.35,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:24/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 121,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:24/km",
            "km": 16.35
          }
        ]
      },
      {
        "id": "kw36-2026-lauf5",
        "order": 5,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 22.97,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:24/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 170,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:24/km",
            "km": 22.97
          }
        ]
      }
    ]
  },
  {
    "kw": 37,
    "year": 2026,
    "startDate": "2026-09-07",
    "endDate": "2026-09-13",
    "targetKm": 69.43,
    "runs": [
      {
        "id": "kw37-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.12,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "8:10/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "8:10/km",
            "km": 6.12
          }
        ]
      },
      {
        "id": "kw37-2026-lauf2",
        "order": 2,
        "title": "Interval Run",
        "type": "interval",
        "distanceKm": 7.66,
        "optimalHr": 184,
        "hrRange": "180-192 bpm",
        "pace": "6:32/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 15,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:23/km",
            "km": 2.03
          },
          {
            "label": "4 × 4 min",
            "minutes": 16,
            "hr": 184,
            "hrRange": "180-192 bpm",
            "pace": "4:50/km",
            "km": 3.31
          },
          {
            "label": "3 × 3 min Easy Jog",
            "minutes": 9,
            "hr": 145,
            "hrRange": "138-152 bpm",
            "pace": "8:10/km",
            "km": 1.1
          },
          {
            "label": "Cool-down",
            "minutes": 10,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:10/km",
            "km": 1.22
          }
        ]
      },
      {
        "id": "kw37-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.07,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:27/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:23/km",
            "km": 7.86
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw37-2026-lauf4",
        "order": 4,
        "title": "Progressive Run",
        "type": "progressive",
        "distanceKm": 22.64,
        "optimalHr": 168,
        "hrRange": "162-174 bpm",
        "pace": "6:30/km",
        "steps": [
          {
            "label": "Easy Start",
            "minutes": 59,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:23/km",
            "km": 7.99
          },
          {
            "label": "Steady Middle",
            "minutes": 51,
            "hr": 162,
            "hrRange": "156-168 bpm",
            "pace": "6:07/km",
            "km": 8.34
          },
          {
            "label": "Strong Finish",
            "minutes": 37,
            "hr": 168,
            "hrRange": "162-174 bpm",
            "pace": "5:52/km",
            "km": 6.31
          }
        ]
      },
      {
        "id": "kw37-2026-lauf5",
        "order": 5,
        "title": "Fast Finish Long Run",
        "type": "fast-finish-long",
        "distanceKm": 23.94,
        "optimalHr": 166,
        "hrRange": "160-175 bpm",
        "pace": "7:09/km",
        "steps": [
          {
            "label": "Easy Long Run",
            "minutes": 138,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:23/km",
            "km": 18.69
          },
          {
            "label": "Fast Finish",
            "minutes": 33,
            "hr": 166,
            "hrRange": "160-175 bpm",
            "pace": "6:17/km",
            "km": 5.25
          }
        ]
      }
    ]
  },
  {
    "kw": 38,
    "year": 2026,
    "startDate": "2026-09-14",
    "endDate": "2026-09-20",
    "targetKm": 68.78,
    "runs": [
      {
        "id": "kw38-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.13,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "8:09/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "8:09/km",
            "km": 6.13
          }
        ]
      },
      {
        "id": "kw38-2026-lauf2",
        "order": 2,
        "title": "Steady Run",
        "type": "steady",
        "distanceKm": 9.99,
        "optimalHr": 164,
        "hrRange": "158-170 bpm",
        "pace": "6:30/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 12,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:22/km",
            "km": 1.63
          },
          {
            "label": "Steady",
            "minutes": 45,
            "hr": 164,
            "hrRange": "158-170 bpm",
            "pace": "6:06/km",
            "km": 7.38
          },
          {
            "label": "Cool-down",
            "minutes": 8,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:09/km",
            "km": 0.98
          }
        ]
      },
      {
        "id": "kw38-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.08,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:26/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:22/km",
            "km": 7.87
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw38-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 19.55,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:22/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 144,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:22/km",
            "km": 19.55
          }
        ]
      },
      {
        "id": "kw38-2026-lauf5",
        "order": 5,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 24.03,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:22/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 177,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:22/km",
            "km": 24.03
          }
        ]
      }
    ]
  },
  {
    "kw": 39,
    "year": 2026,
    "startDate": "2026-09-21",
    "endDate": "2026-09-27",
    "targetKm": 54.69,
    "runs": [
      {
        "id": "kw39-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 5.53,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "8:08/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 45,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "8:08/km",
            "km": 5.53
          }
        ]
      },
      {
        "id": "kw39-2026-lauf2",
        "order": 2,
        "title": "Steady Run",
        "type": "steady",
        "distanceKm": 8.36,
        "optimalHr": 164,
        "hrRange": "158-170 bpm",
        "pace": "6:35/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 12,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:21/km",
            "km": 1.63
          },
          {
            "label": "Steady",
            "minutes": 35,
            "hr": 164,
            "hrRange": "158-170 bpm",
            "pace": "6:05/km",
            "km": 5.75
          },
          {
            "label": "Cool-down",
            "minutes": 8,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:08/km",
            "km": 0.98
          }
        ]
      },
      {
        "id": "kw39-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 7.74,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:26/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 48,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:21/km",
            "km": 6.53
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw39-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 14.01,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:21/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 103,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:21/km",
            "km": 14.01
          }
        ]
      },
      {
        "id": "kw39-2026-lauf5",
        "order": 5,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 19.05,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:21/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 140,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:21/km",
            "km": 19.05
          }
        ]
      }
    ]
  },
  {
    "kw": 40,
    "year": 2026,
    "startDate": "2026-09-28",
    "endDate": "2026-10-04",
    "targetKm": 68.77,
    "runs": [
      {
        "id": "kw40-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.16,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "8:07/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "8:07/km",
            "km": 6.16
          }
        ]
      },
      {
        "id": "kw40-2026-lauf2",
        "order": 2,
        "title": "Progressive Run",
        "type": "progressive",
        "distanceKm": 9.31,
        "optimalHr": 168,
        "hrRange": "162-174 bpm",
        "pace": "6:27/km",
        "steps": [
          {
            "label": "Easy Start",
            "minutes": 24,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:20/km",
            "km": 3.27
          },
          {
            "label": "Steady Middle",
            "minutes": 21,
            "hr": 162,
            "hrRange": "156-168 bpm",
            "pace": "6:04/km",
            "km": 3.46
          },
          {
            "label": "Strong Finish",
            "minutes": 15,
            "hr": 168,
            "hrRange": "162-174 bpm",
            "pace": "5:49/km",
            "km": 2.58
          }
        ]
      },
      {
        "id": "kw40-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.12,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:24/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:20/km",
            "km": 7.91
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw40-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 20.18,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:20/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 148,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:20/km",
            "km": 20.18
          }
        ]
      },
      {
        "id": "kw40-2026-lauf5",
        "order": 5,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 24.0,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:20/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 176,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:20/km",
            "km": 24.0
          }
        ]
      }
    ]
  },
  {
    "kw": 41,
    "year": 2026,
    "startDate": "2026-10-05",
    "endDate": "2026-10-11",
    "targetKm": 73.98,
    "runs": [
      {
        "id": "kw41-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.17,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "8:06/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "8:06/km",
            "km": 6.17
          }
        ]
      },
      {
        "id": "kw41-2026-lauf2",
        "order": 2,
        "title": "Interval Run",
        "type": "interval",
        "distanceKm": 7.75,
        "optimalHr": 184,
        "hrRange": "180-192 bpm",
        "pace": "6:27/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 15,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:20/km",
            "km": 2.05
          },
          {
            "label": "4 × 4 min",
            "minutes": 16,
            "hr": 184,
            "hrRange": "180-192 bpm",
            "pace": "4:46/km",
            "km": 3.36
          },
          {
            "label": "3 × 3 min Easy Jog",
            "minutes": 9,
            "hr": 145,
            "hrRange": "138-152 bpm",
            "pace": "8:06/km",
            "km": 1.11
          },
          {
            "label": "Cool-down",
            "minutes": 10,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:06/km",
            "km": 1.23
          }
        ]
      },
      {
        "id": "kw41-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.12,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:24/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:20/km",
            "km": 7.91
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw41-2026-lauf4",
        "order": 4,
        "title": "Progressive Run",
        "type": "progressive",
        "distanceKm": 25.97,
        "optimalHr": 168,
        "hrRange": "162-174 bpm",
        "pace": "6:26/km",
        "steps": [
          {
            "label": "Easy Start",
            "minutes": 67,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:20/km",
            "km": 9.14
          },
          {
            "label": "Steady Middle",
            "minutes": 58,
            "hr": 162,
            "hrRange": "156-168 bpm",
            "pace": "6:03/km",
            "km": 9.59
          },
          {
            "label": "Strong Finish",
            "minutes": 42,
            "hr": 168,
            "hrRange": "162-174 bpm",
            "pace": "5:48/km",
            "km": 7.24
          }
        ]
      },
      {
        "id": "kw41-2026-lauf5",
        "order": 5,
        "title": "Fast Finish Long Run",
        "type": "fast-finish-long",
        "distanceKm": 24.97,
        "optimalHr": 166,
        "hrRange": "160-175 bpm",
        "pace": "7:05/km",
        "steps": [
          {
            "label": "Easy Long Run",
            "minutes": 143,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:20/km",
            "km": 19.5
          },
          {
            "label": "Fast Finish",
            "minutes": 34,
            "hr": 166,
            "hrRange": "160-175 bpm",
            "pace": "6:13/km",
            "km": 5.47
          }
        ]
      }
    ]
  },
  {
    "kw": 42,
    "year": 2026,
    "startDate": "2026-10-12",
    "endDate": "2026-10-18",
    "targetKm": 72.69,
    "runs": [
      {
        "id": "kw42-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.17,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "8:06/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "8:06/km",
            "km": 6.17
          }
        ]
      },
      {
        "id": "kw42-2026-lauf2",
        "order": 2,
        "title": "Steady Run",
        "type": "steady",
        "distanceKm": 10.09,
        "optimalHr": 164,
        "hrRange": "158-170 bpm",
        "pace": "6:27/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 12,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:19/km",
            "km": 1.64
          },
          {
            "label": "Steady",
            "minutes": 45,
            "hr": 164,
            "hrRange": "158-170 bpm",
            "pace": "6:02/km",
            "km": 7.46
          },
          {
            "label": "Cool-down",
            "minutes": 8,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:06/km",
            "km": 0.99
          }
        ]
      },
      {
        "id": "kw42-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.14,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:23/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:19/km",
            "km": 7.93
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw42-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 11.21,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:19/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 82,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:19/km",
            "km": 11.21
          }
        ]
      },
      {
        "id": "kw42-2026-lauf5",
        "order": 5,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 11.07,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:19/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 81,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:19/km",
            "km": 11.07
          }
        ]
      },
      {
        "id": "kw42-2026-lauf6",
        "order": 6,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 25.01,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:19/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 183,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:19/km",
            "km": 25.01
          }
        ]
      }
    ]
  },
  {
    "kw": 43,
    "year": 2026,
    "startDate": "2026-10-19",
    "endDate": "2026-10-25",
    "targetKm": 58.8,
    "runs": [
      {
        "id": "kw43-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 5.57,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "8:05/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 45,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "8:05/km",
            "km": 5.57
          }
        ]
      },
      {
        "id": "kw43-2026-lauf2",
        "order": 2,
        "title": "Steady Run",
        "type": "steady",
        "distanceKm": 8.45,
        "optimalHr": 164,
        "hrRange": "158-170 bpm",
        "pace": "6:31/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 12,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:18/km",
            "km": 1.64
          },
          {
            "label": "Steady",
            "minutes": 35,
            "hr": 164,
            "hrRange": "158-170 bpm",
            "pace": "6:01/km",
            "km": 5.82
          },
          {
            "label": "Cool-down",
            "minutes": 8,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:05/km",
            "km": 0.99
          }
        ]
      },
      {
        "id": "kw43-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 7.79,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:23/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 48,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:18/km",
            "km": 6.58
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw43-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 16.99,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:18/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 124,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:18/km",
            "km": 16.99
          }
        ]
      },
      {
        "id": "kw43-2026-lauf5",
        "order": 5,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 20.0,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:18/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 146,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:18/km",
            "km": 20.0
          }
        ]
      }
    ]
  },
  {
    "kw": 44,
    "year": 2026,
    "startDate": "2026-10-26",
    "endDate": "2026-11-01",
    "targetKm": 70.69,
    "runs": [
      {
        "id": "kw44-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.2,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "8:04/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "8:04/km",
            "km": 6.2
          }
        ]
      },
      {
        "id": "kw44-2026-lauf2",
        "order": 2,
        "title": "Progressive Run",
        "type": "progressive",
        "distanceKm": 10.97,
        "optimalHr": 168,
        "hrRange": "162-174 bpm",
        "pace": "6:23/km",
        "steps": [
          {
            "label": "Easy Start",
            "minutes": 28,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:17/km",
            "km": 3.84
          },
          {
            "label": "Steady Middle",
            "minutes": 24,
            "hr": 162,
            "hrRange": "156-168 bpm",
            "pace": "6:00/km",
            "km": 4.0
          },
          {
            "label": "Strong Finish",
            "minutes": 18,
            "hr": 168,
            "hrRange": "162-174 bpm",
            "pace": "5:45/km",
            "km": 3.13
          }
        ]
      },
      {
        "id": "kw44-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.17,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:22/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:17/km",
            "km": 7.96
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw44-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 19.36,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:17/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 141,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:17/km",
            "km": 19.36
          }
        ]
      },
      {
        "id": "kw44-2026-lauf5",
        "order": 5,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 24.99,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:17/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 182,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:17/km",
            "km": 24.99
          }
        ]
      }
    ]
  },
  {
    "kw": 45,
    "year": 2026,
    "startDate": "2026-11-02",
    "endDate": "2026-11-08",
    "targetKm": 72.79,
    "runs": [
      {
        "id": "kw45-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.21,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "8:03/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "8:03/km",
            "km": 6.21
          }
        ]
      },
      {
        "id": "kw45-2026-lauf2",
        "order": 2,
        "title": "Interval Run",
        "type": "interval",
        "distanceKm": 7.81,
        "optimalHr": 184,
        "hrRange": "180-192 bpm",
        "pace": "6:24/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 15,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:16/km",
            "km": 2.06
          },
          {
            "label": "4 × 4 min",
            "minutes": 16,
            "hr": 184,
            "hrRange": "180-192 bpm",
            "pace": "4:43/km",
            "km": 3.39
          },
          {
            "label": "3 × 3 min Easy Jog",
            "minutes": 9,
            "hr": 145,
            "hrRange": "138-152 bpm",
            "pace": "8:03/km",
            "km": 1.12
          },
          {
            "label": "Cool-down",
            "minutes": 10,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:03/km",
            "km": 1.24
          }
        ]
      },
      {
        "id": "kw45-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.19,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:21/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:16/km",
            "km": 7.98
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw45-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 11.83,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:16/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 86,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:16/km",
            "km": 11.83
          }
        ]
      },
      {
        "id": "kw45-2026-lauf5",
        "order": 5,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 11.83,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:16/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 86,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:16/km",
            "km": 11.83
          }
        ]
      },
      {
        "id": "kw45-2026-lauf6",
        "order": 6,
        "title": "Fast Finish Long Run",
        "type": "fast-finish-long",
        "distanceKm": 25.92,
        "optimalHr": 166,
        "hrRange": "160-175 bpm",
        "pace": "7:01/km",
        "steps": [
          {
            "label": "Easy Long Run",
            "minutes": 147,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:16/km",
            "km": 20.23
          },
          {
            "label": "Fast Finish",
            "minutes": 35,
            "hr": 166,
            "hrRange": "160-175 bpm",
            "pace": "6:09/km",
            "km": 5.69
          }
        ]
      }
    ]
  },
  {
    "kw": 46,
    "year": 2026,
    "startDate": "2026-11-09",
    "endDate": "2026-11-15",
    "targetKm": 74.74,
    "runs": [
      {
        "id": "kw46-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.22,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "8:02/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "8:02/km",
            "km": 6.22
          }
        ]
      },
      {
        "id": "kw46-2026-lauf2",
        "order": 2,
        "title": "Steady Run",
        "type": "steady",
        "distanceKm": 10.2,
        "optimalHr": 164,
        "hrRange": "158-170 bpm",
        "pace": "6:22/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 12,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:15/km",
            "km": 1.66
          },
          {
            "label": "Steady",
            "minutes": 45,
            "hr": 164,
            "hrRange": "158-170 bpm",
            "pace": "5:58/km",
            "km": 7.54
          },
          {
            "label": "Cool-down",
            "minutes": 8,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:02/km",
            "km": 1.0
          }
        ]
      },
      {
        "id": "kw46-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.21,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:20/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:15/km",
            "km": 8.0
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw46-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 11.59,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:15/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 84,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:15/km",
            "km": 11.59
          }
        ]
      },
      {
        "id": "kw46-2026-lauf5",
        "order": 5,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 11.59,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:15/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 84,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:15/km",
            "km": 11.59
          }
        ]
      },
      {
        "id": "kw46-2026-lauf6",
        "order": 6,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 25.93,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:15/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 188,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:15/km",
            "km": 25.93
          }
        ]
      }
    ]
  },
  {
    "kw": 47,
    "year": 2026,
    "startDate": "2026-11-16",
    "endDate": "2026-11-22",
    "targetKm": 60.71,
    "runs": [
      {
        "id": "kw47-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 5.6,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "8:02/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 45,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "8:02/km",
            "km": 5.6
          }
        ]
      },
      {
        "id": "kw47-2026-lauf2",
        "order": 2,
        "title": "Steady Run",
        "type": "steady",
        "distanceKm": 8.56,
        "optimalHr": 164,
        "hrRange": "158-170 bpm",
        "pace": "6:26/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 12,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:14/km",
            "km": 1.66
          },
          {
            "label": "Steady",
            "minutes": 35,
            "hr": 164,
            "hrRange": "158-170 bpm",
            "pace": "5:56/km",
            "km": 5.9
          },
          {
            "label": "Cool-down",
            "minutes": 8,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:02/km",
            "km": 1.0
          }
        ]
      },
      {
        "id": "kw47-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.23,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:19/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:14/km",
            "km": 8.02
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw47-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 16.31,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:14/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 118,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:14/km",
            "km": 16.31
          }
        ]
      },
      {
        "id": "kw47-2026-lauf5",
        "order": 5,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 21.01,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:14/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 152,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:14/km",
            "km": 21.01
          }
        ]
      }
    ]
  },
  {
    "kw": 48,
    "year": 2026,
    "startDate": "2026-11-23",
    "endDate": "2026-11-29",
    "targetKm": 72.68,
    "runs": [
      {
        "id": "kw48-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.24,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "8:01/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "8:01/km",
            "km": 6.24
          }
        ]
      },
      {
        "id": "kw48-2026-lauf2",
        "order": 2,
        "title": "HM Pace Run",
        "type": "hm-pace",
        "distanceKm": 10.22,
        "optimalHr": 176,
        "hrRange": "170-184 bpm",
        "pace": "5:58/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 15,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:13/km",
            "km": 2.08
          },
          {
            "label": "3 × 10 min HM Pace",
            "minutes": 30,
            "hr": 176,
            "hrRange": "170-184 bpm",
            "pace": "4:53/km",
            "km": 6.14
          },
          {
            "label": "Easy Jog Between Blocks",
            "minutes": 6,
            "hr": 145,
            "hrRange": "138-152 bpm",
            "pace": "8:01/km",
            "km": 0.75
          },
          {
            "label": "Cool-down",
            "minutes": 10,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:01/km",
            "km": 1.25
          }
        ]
      },
      {
        "id": "kw48-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.25,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:18/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:13/km",
            "km": 8.04
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw48-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 10.53,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:13/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 76,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:13/km",
            "km": 10.53
          }
        ]
      },
      {
        "id": "kw48-2026-lauf5",
        "order": 5,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 10.39,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:13/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 75,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:13/km",
            "km": 10.39
          }
        ]
      },
      {
        "id": "kw48-2026-lauf6",
        "order": 6,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 26.05,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:13/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 188,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:13/km",
            "km": 26.05
          }
        ]
      }
    ]
  },
  {
    "kw": 49,
    "year": 2026,
    "startDate": "2026-11-30",
    "endDate": "2026-12-06",
    "targetKm": 74.74,
    "runs": [
      {
        "id": "kw49-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.25,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "8:00/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "8:00/km",
            "km": 6.25
          }
        ]
      },
      {
        "id": "kw49-2026-lauf2",
        "order": 2,
        "title": "Interval Run",
        "type": "interval",
        "distanceKm": 9.12,
        "optimalHr": 145,
        "hrRange": "138-150 bpm",
        "pace": "6:15/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 15,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:12/km",
            "km": 2.08
          },
          {
            "label": "5 × 4 min",
            "minutes": 20,
            "hr": 184,
            "hrRange": "180-192 bpm",
            "pace": "4:40/km",
            "km": 4.29
          },
          {
            "label": "4 × 3 min Easy Jog",
            "minutes": 12,
            "hr": 145,
            "hrRange": "138-152 bpm",
            "pace": "8:00/km",
            "km": 1.5
          },
          {
            "label": "Cool-down",
            "minutes": 10,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "8:00/km",
            "km": 1.25
          }
        ]
      },
      {
        "id": "kw49-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.27,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:17/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:12/km",
            "km": 8.06
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw49-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 11.53,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:12/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 83,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:12/km",
            "km": 11.53
          }
        ]
      },
      {
        "id": "kw49-2026-lauf5",
        "order": 5,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 11.53,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:12/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 83,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:12/km",
            "km": 11.53
          }
        ]
      },
      {
        "id": "kw49-2026-lauf6",
        "order": 6,
        "title": "Fast Finish Long Run",
        "type": "fast-finish-long",
        "distanceKm": 27.04,
        "optimalHr": 166,
        "hrRange": "160-175 bpm",
        "pace": "6:57/km",
        "steps": [
          {
            "label": "Easy Long Run",
            "minutes": 152,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:12/km",
            "km": 21.11
          },
          {
            "label": "Fast Finish",
            "minutes": 36,
            "hr": 166,
            "hrRange": "160-175 bpm",
            "pace": "6:04/km",
            "km": 5.93
          }
        ]
      }
    ]
  },
  {
    "kw": 50,
    "year": 2026,
    "startDate": "2026-12-07",
    "endDate": "2026-12-13",
    "targetKm": 76.7,
    "runs": [
      {
        "id": "kw50-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.26,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "7:59/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "7:59/km",
            "km": 6.26
          }
        ]
      },
      {
        "id": "kw50-2026-lauf2",
        "order": 2,
        "title": "Progressive Run",
        "type": "progressive",
        "distanceKm": 11.18,
        "optimalHr": 168,
        "hrRange": "162-174 bpm",
        "pace": "6:16/km",
        "steps": [
          {
            "label": "Easy Start",
            "minutes": 28,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:11/km",
            "km": 3.9
          },
          {
            "label": "Steady Middle",
            "minutes": 24,
            "hr": 162,
            "hrRange": "156-168 bpm",
            "pace": "5:53/km",
            "km": 4.08
          },
          {
            "label": "Strong Finish",
            "minutes": 18,
            "hr": 168,
            "hrRange": "162-174 bpm",
            "pace": "5:38/km",
            "km": 3.2
          }
        ]
      },
      {
        "id": "kw50-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.28,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:16/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:11/km",
            "km": 8.07
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw50-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 11.55,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:11/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 83,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:11/km",
            "km": 11.55
          }
        ]
      },
      {
        "id": "kw50-2026-lauf5",
        "order": 5,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 11.42,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:11/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 82,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:11/km",
            "km": 11.42
          }
        ]
      },
      {
        "id": "kw50-2026-lauf6",
        "order": 6,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 27.01,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:11/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 194,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:11/km",
            "km": 27.01
          }
        ]
      }
    ]
  },
  {
    "kw": 51,
    "year": 2026,
    "startDate": "2026-12-14",
    "endDate": "2026-12-20",
    "targetKm": 62.79,
    "runs": [
      {
        "id": "kw51-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 5.64,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "7:59/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 45,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "7:59/km",
            "km": 5.64
          }
        ]
      },
      {
        "id": "kw51-2026-lauf2",
        "order": 2,
        "title": "Steady Run",
        "type": "steady",
        "distanceKm": 8.64,
        "optimalHr": 164,
        "hrRange": "158-170 bpm",
        "pace": "6:22/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 12,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:10/km",
            "km": 1.67
          },
          {
            "label": "Steady",
            "minutes": 35,
            "hr": 164,
            "hrRange": "158-170 bpm",
            "pace": "5:52/km",
            "km": 5.97
          },
          {
            "label": "Cool-down",
            "minutes": 8,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:59/km",
            "km": 1.0
          }
        ]
      },
      {
        "id": "kw51-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.3,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:15/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:10/km",
            "km": 8.09
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw51-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 17.16,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:10/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 123,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:10/km",
            "km": 17.16
          }
        ]
      },
      {
        "id": "kw51-2026-lauf5",
        "order": 5,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 22.05,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:10/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 158,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:10/km",
            "km": 22.05
          }
        ]
      }
    ]
  },
  {
    "kw": 52,
    "year": 2026,
    "startDate": "2026-12-21",
    "endDate": "2026-12-27",
    "targetKm": 64.77,
    "runs": [
      {
        "id": "kw52-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 5.65,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "7:58/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 45,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "7:58/km",
            "km": 5.65
          }
        ]
      },
      {
        "id": "kw52-2026-lauf2",
        "order": 2,
        "title": "Steady Run",
        "type": "steady",
        "distanceKm": 8.65,
        "optimalHr": 164,
        "hrRange": "158-170 bpm",
        "pace": "6:22/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 12,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:10/km",
            "km": 1.67
          },
          {
            "label": "Steady",
            "minutes": 35,
            "hr": 164,
            "hrRange": "158-170 bpm",
            "pace": "5:51/km",
            "km": 5.98
          },
          {
            "label": "Cool-down",
            "minutes": 8,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:58/km",
            "km": 1.0
          }
        ]
      },
      {
        "id": "kw52-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.3,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:15/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:10/km",
            "km": 8.09
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw52-2026-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 19.12,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:10/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 137,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:10/km",
            "km": 19.12
          }
        ]
      },
      {
        "id": "kw52-2026-lauf5",
        "order": 5,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 22.05,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:10/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 158,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:10/km",
            "km": 22.05
          }
        ]
      }
    ]
  },
  {
    "kw": 53,
    "year": 2026,
    "startDate": "2026-12-28",
    "endDate": "2027-01-03",
    "targetKm": 69.62,
    "runs": [
      {
        "id": "kw53-2026-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.29,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "7:57/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "7:57/km",
            "km": 6.29
          }
        ]
      },
      {
        "id": "kw53-2026-lauf2",
        "order": 2,
        "title": "Interval Run",
        "type": "interval",
        "distanceKm": 9.2,
        "optimalHr": 145,
        "hrRange": "138-150 bpm",
        "pace": "6:12/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 15,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:09/km",
            "km": 2.1
          },
          {
            "label": "5 × 4 min",
            "minutes": 20,
            "hr": 184,
            "hrRange": "180-192 bpm",
            "pace": "4:37/km",
            "km": 4.33
          },
          {
            "label": "4 × 3 min Easy Jog",
            "minutes": 12,
            "hr": 145,
            "hrRange": "138-152 bpm",
            "pace": "7:57/km",
            "km": 1.51
          },
          {
            "label": "Cool-down",
            "minutes": 10,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:57/km",
            "km": 1.26
          }
        ]
      },
      {
        "id": "kw53-2026-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.32,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:15/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:09/km",
            "km": 8.11
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw53-2026-lauf4",
        "order": 4,
        "title": "Progressive Run",
        "type": "progressive",
        "distanceKm": 21.87,
        "optimalHr": 168,
        "hrRange": "162-174 bpm",
        "pace": "6:13/km",
        "steps": [
          {
            "label": "Easy Start",
            "minutes": 54,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:09/km",
            "km": 7.55
          },
          {
            "label": "Steady Middle",
            "minutes": 48,
            "hr": 162,
            "hrRange": "156-168 bpm",
            "pace": "5:50/km",
            "km": 8.23
          },
          {
            "label": "Strong Finish",
            "minutes": 34,
            "hr": 168,
            "hrRange": "162-174 bpm",
            "pace": "5:35/km",
            "km": 6.09
          }
        ]
      },
      {
        "id": "kw53-2026-lauf5",
        "order": 5,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 22.94,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:09/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 164,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:09/km",
            "km": 22.94
          }
        ]
      }
    ]
  },
  {
    "kw": 1,
    "year": 2027,
    "startDate": "2027-01-04",
    "endDate": "2027-01-10",
    "targetKm": 70.7,
    "runs": [
      {
        "id": "kw1-2027-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.3,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "7:56/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "7:56/km",
            "km": 6.3
          }
        ]
      },
      {
        "id": "kw1-2027-lauf2",
        "order": 2,
        "title": "Progressive Run",
        "type": "progressive",
        "distanceKm": 11.29,
        "optimalHr": 168,
        "hrRange": "162-174 bpm",
        "pace": "6:12/km",
        "steps": [
          {
            "label": "Easy Start",
            "minutes": 28,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:08/km",
            "km": 3.93
          },
          {
            "label": "Steady Middle",
            "minutes": 24,
            "hr": 162,
            "hrRange": "156-168 bpm",
            "pace": "5:49/km",
            "km": 4.13
          },
          {
            "label": "Strong Finish",
            "minutes": 18,
            "hr": 168,
            "hrRange": "162-174 bpm",
            "pace": "5:34/km",
            "km": 3.23
          }
        ]
      },
      {
        "id": "kw1-2027-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.34,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:14/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:08/km",
            "km": 8.13
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw1-2027-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 19.63,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:08/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 140,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:08/km",
            "km": 19.63
          }
        ]
      },
      {
        "id": "kw1-2027-lauf5",
        "order": 5,
        "title": "Fast Finish Long Run",
        "type": "fast-finish-long",
        "distanceKm": 24.14,
        "optimalHr": 166,
        "hrRange": "160-175 bpm",
        "pace": "6:53/km",
        "steps": [
          {
            "label": "Easy Long Run",
            "minutes": 134,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:08/km",
            "km": 18.79
          },
          {
            "label": "Fast Finish",
            "minutes": 32,
            "hr": 166,
            "hrRange": "160-175 bpm",
            "pace": "5:59/km",
            "km": 5.35
          }
        ]
      }
    ]
  },
  {
    "kw": 2,
    "year": 2027,
    "startDate": "2027-01-11",
    "endDate": "2027-01-17",
    "targetKm": 72.76,
    "runs": [
      {
        "id": "kw2-2027-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.32,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "7:55/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "7:55/km",
            "km": 6.32
          }
        ]
      },
      {
        "id": "kw2-2027-lauf2",
        "order": 2,
        "title": "Threshold Run",
        "type": "threshold",
        "distanceKm": 10.43,
        "optimalHr": 179,
        "hrRange": "175-184 bpm",
        "pace": "6:02/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 15,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:07/km",
            "km": 2.11
          },
          {
            "label": "4 × 8 min Threshold",
            "minutes": 32,
            "hr": 179,
            "hrRange": "175-184 bpm",
            "pace": "5:05/km",
            "km": 6.3
          },
          {
            "label": "3 × 2 min Easy Jog",
            "minutes": 6,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:55/km",
            "km": 0.76
          },
          {
            "label": "Cool-down",
            "minutes": 10,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:55/km",
            "km": 1.26
          }
        ]
      },
      {
        "id": "kw2-2027-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.36,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:13/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:07/km",
            "km": 8.15
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw2-2027-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 10.82,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:07/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 77,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:07/km",
            "km": 10.82
          }
        ]
      },
      {
        "id": "kw2-2027-lauf5",
        "order": 5,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 10.82,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:07/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 77,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:07/km",
            "km": 10.82
          }
        ]
      },
      {
        "id": "kw2-2027-lauf6",
        "order": 6,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 25.01,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:07/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 178,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:07/km",
            "km": 25.01
          }
        ]
      }
    ]
  },
  {
    "kw": 3,
    "year": 2027,
    "startDate": "2027-01-18",
    "endDate": "2027-01-24",
    "targetKm": 74.73,
    "runs": [
      {
        "id": "kw3-2027-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.32,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "7:55/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "7:55/km",
            "km": 6.32
          }
        ]
      },
      {
        "id": "kw3-2027-lauf2",
        "order": 2,
        "title": "HM Pace Run",
        "type": "hm-pace",
        "distanceKm": 10.36,
        "optimalHr": 176,
        "hrRange": "170-184 bpm",
        "pace": "5:53/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 15,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:06/km",
            "km": 2.11
          },
          {
            "label": "3 × 10 min HM Pace",
            "minutes": 30,
            "hr": 176,
            "hrRange": "170-184 bpm",
            "pace": "4:49/km",
            "km": 6.23
          },
          {
            "label": "Easy Jog Between Blocks",
            "minutes": 6,
            "hr": 145,
            "hrRange": "138-152 bpm",
            "pace": "7:55/km",
            "km": 0.76
          },
          {
            "label": "Cool-down",
            "minutes": 10,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:55/km",
            "km": 1.26
          }
        ]
      },
      {
        "id": "kw3-2027-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.38,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:12/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:06/km",
            "km": 8.17
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw3-2027-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 11.41,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:06/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 81,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:06/km",
            "km": 11.41
          }
        ]
      },
      {
        "id": "kw3-2027-lauf5",
        "order": 5,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 11.27,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:06/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 80,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:06/km",
            "km": 11.27
          }
        ]
      },
      {
        "id": "kw3-2027-lauf6",
        "order": 6,
        "title": "Fast Finish Long Run",
        "type": "fast-finish-long",
        "distanceKm": 25.99,
        "optimalHr": 166,
        "hrRange": "160-175 bpm",
        "pace": "6:51/km",
        "steps": [
          {
            "label": "Easy Long Run",
            "minutes": 144,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:06/km",
            "km": 20.28
          },
          {
            "label": "Fast Finish",
            "minutes": 34,
            "hr": 166,
            "hrRange": "160-175 bpm",
            "pace": "5:57/km",
            "km": 5.71
          }
        ]
      }
    ]
  },
  {
    "kw": 4,
    "year": 2027,
    "startDate": "2027-01-25",
    "endDate": "2027-01-31",
    "targetKm": 76.68,
    "runs": [
      {
        "id": "kw4-2027-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.33,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "7:54/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "7:54/km",
            "km": 6.33
          }
        ]
      },
      {
        "id": "kw4-2027-lauf2",
        "order": 2,
        "title": "Interval Run",
        "type": "interval",
        "distanceKm": 9.29,
        "optimalHr": 145,
        "hrRange": "138-150 bpm",
        "pace": "6:08/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 15,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:05/km",
            "km": 2.12
          },
          {
            "label": "5 × 4 min",
            "minutes": 20,
            "hr": 184,
            "hrRange": "180-192 bpm",
            "pace": "4:34/km",
            "km": 4.38
          },
          {
            "label": "4 × 3 min Easy Jog",
            "minutes": 12,
            "hr": 145,
            "hrRange": "138-152 bpm",
            "pace": "7:54/km",
            "km": 1.52
          },
          {
            "label": "Cool-down",
            "minutes": 10,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:54/km",
            "km": 1.27
          }
        ]
      },
      {
        "id": "kw4-2027-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.4,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:11/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:05/km",
            "km": 8.19
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw4-2027-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 12.42,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:05/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 88,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:05/km",
            "km": 12.42
          }
        ]
      },
      {
        "id": "kw4-2027-lauf5",
        "order": 5,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 12.28,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:05/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 87,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:05/km",
            "km": 12.28
          }
        ]
      },
      {
        "id": "kw4-2027-lauf6",
        "order": 6,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 26.96,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:05/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 191,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:05/km",
            "km": 26.96
          }
        ]
      }
    ]
  },
  {
    "kw": 5,
    "year": 2027,
    "startDate": "2027-02-01",
    "endDate": "2027-02-07",
    "targetKm": 78.76,
    "runs": [
      {
        "id": "kw5-2027-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.34,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "7:53/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "7:53/km",
            "km": 6.34
          }
        ]
      },
      {
        "id": "kw5-2027-lauf2",
        "order": 2,
        "title": "Progressive Run",
        "type": "progressive",
        "distanceKm": 11.4,
        "optimalHr": 168,
        "hrRange": "162-174 bpm",
        "pace": "6:08/km",
        "steps": [
          {
            "label": "Easy Start",
            "minutes": 28,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:04/km",
            "km": 3.96
          },
          {
            "label": "Steady Middle",
            "minutes": 24,
            "hr": 162,
            "hrRange": "156-168 bpm",
            "pace": "5:45/km",
            "km": 4.17
          },
          {
            "label": "Strong Finish",
            "minutes": 18,
            "hr": 168,
            "hrRange": "162-174 bpm",
            "pace": "5:30/km",
            "km": 3.27
          }
        ]
      },
      {
        "id": "kw5-2027-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.42,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:10/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:04/km",
            "km": 8.21
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw5-2027-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 11.75,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:04/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 83,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:04/km",
            "km": 11.75
          }
        ]
      },
      {
        "id": "kw5-2027-lauf5",
        "order": 5,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 11.89,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:04/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 84,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:04/km",
            "km": 11.89
          }
        ]
      },
      {
        "id": "kw5-2027-lauf6",
        "order": 6,
        "title": "Long Run with HM Pace Blocks",
        "type": "hm-block-long",
        "distanceKm": 27.96,
        "optimalHr": 176,
        "hrRange": "170-184 bpm",
        "pace": "6:37/km",
        "steps": [
          {
            "label": "Easy Long Run",
            "minutes": 79,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:04/km",
            "km": 11.18
          },
          {
            "label": "2 × 14 min HM Pace",
            "minutes": 28,
            "hr": 176,
            "hrRange": "170-184 bpm",
            "pace": "4:48/km",
            "km": 5.83
          },
          {
            "label": "Easy Jog Between Blocks",
            "minutes": 6,
            "hr": 145,
            "hrRange": "138-152 bpm",
            "pace": "7:53/km",
            "km": 0.76
          },
          {
            "label": "Cool-down",
            "minutes": 72,
            "hr": 150,
            "hrRange": "144-156 bpm",
            "pace": "7:04/km",
            "km": 10.19
          }
        ]
      }
    ]
  },
  {
    "kw": 6,
    "year": 2027,
    "startDate": "2027-02-08",
    "endDate": "2027-02-14",
    "targetKm": 64.79,
    "runs": [
      {
        "id": "kw6-2027-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 5.72,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "7:52/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 45,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "7:52/km",
            "km": 5.72
          }
        ]
      },
      {
        "id": "kw6-2027-lauf2",
        "order": 2,
        "title": "HM Pace Run",
        "type": "hm-pace",
        "distanceKm": 13.17,
        "optimalHr": 176,
        "hrRange": "170-184 bpm",
        "pace": "5:42/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 15,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:03/km",
            "km": 2.13
          },
          {
            "label": "3 × 14 min HM Pace",
            "minutes": 42,
            "hr": 176,
            "hrRange": "170-184 bpm",
            "pace": "4:48/km",
            "km": 8.75
          },
          {
            "label": "Easy Jog Between Blocks",
            "minutes": 8,
            "hr": 145,
            "hrRange": "138-152 bpm",
            "pace": "7:52/km",
            "km": 1.02
          },
          {
            "label": "Cool-down",
            "minutes": 10,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:52/km",
            "km": 1.27
          }
        ]
      },
      {
        "id": "kw6-2027-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.44,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:09/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:03/km",
            "km": 8.23
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw6-2027-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 14.47,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:03/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 102,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:03/km",
            "km": 14.47
          }
        ]
      },
      {
        "id": "kw6-2027-lauf5",
        "order": 5,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 21.99,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:03/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 155,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:03/km",
            "km": 21.99
          }
        ]
      }
    ]
  },
  {
    "kw": 7,
    "year": 2027,
    "startDate": "2027-02-15",
    "endDate": "2027-02-21",
    "targetKm": 78.72,
    "runs": [
      {
        "id": "kw7-2027-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.37,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "7:51/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "7:51/km",
            "km": 6.37
          }
        ]
      },
      {
        "id": "kw7-2027-lauf2",
        "order": 2,
        "title": "Threshold Run",
        "type": "threshold",
        "distanceKm": 10.6,
        "optimalHr": 179,
        "hrRange": "175-184 bpm",
        "pace": "5:57/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 15,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:02/km",
            "km": 2.13
          },
          {
            "label": "4 × 8 min Threshold",
            "minutes": 32,
            "hr": 179,
            "hrRange": "175-184 bpm",
            "pace": "4:58/km",
            "km": 6.44
          },
          {
            "label": "3 × 2 min Easy Jog",
            "minutes": 6,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:51/km",
            "km": 0.76
          },
          {
            "label": "Cool-down",
            "minutes": 10,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:51/km",
            "km": 1.27
          }
        ]
      },
      {
        "id": "kw7-2027-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.46,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:08/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:02/km",
            "km": 8.25
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw7-2027-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 12.65,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:02/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 89,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:02/km",
            "km": 12.65
          }
        ]
      },
      {
        "id": "kw7-2027-lauf5",
        "order": 5,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 12.65,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:02/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 89,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:02/km",
            "km": 12.65
          }
        ]
      },
      {
        "id": "kw7-2027-lauf6",
        "order": 6,
        "title": "Fast Finish Long Run",
        "type": "fast-finish-long",
        "distanceKm": 26.99,
        "optimalHr": 166,
        "hrRange": "160-175 bpm",
        "pace": "6:47/km",
        "steps": [
          {
            "label": "Easy Long Run",
            "minutes": 148,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:02/km",
            "km": 21.04
          },
          {
            "label": "Fast Finish",
            "minutes": 35,
            "hr": 166,
            "hrRange": "160-175 bpm",
            "pace": "5:53/km",
            "km": 5.95
          }
        ]
      }
    ]
  },
  {
    "kw": 8,
    "year": 2027,
    "startDate": "2027-02-22",
    "endDate": "2027-02-28",
    "targetKm": 80.7,
    "runs": [
      {
        "id": "kw8-2027-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.37,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "7:51/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "7:51/km",
            "km": 6.37
          }
        ]
      },
      {
        "id": "kw8-2027-lauf2",
        "order": 2,
        "title": "Steady Run",
        "type": "steady",
        "distanceKm": 10.62,
        "optimalHr": 164,
        "hrRange": "158-170 bpm",
        "pace": "6:07/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 12,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:01/km",
            "km": 1.71
          },
          {
            "label": "Steady",
            "minutes": 45,
            "hr": 164,
            "hrRange": "158-170 bpm",
            "pace": "5:42/km",
            "km": 7.89
          },
          {
            "label": "Cool-down",
            "minutes": 8,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:51/km",
            "km": 1.02
          }
        ]
      },
      {
        "id": "kw8-2027-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.48,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:07/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:01/km",
            "km": 8.27
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw8-2027-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 13.11,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:01/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 92,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:01/km",
            "km": 13.11
          }
        ]
      },
      {
        "id": "kw8-2027-lauf5",
        "order": 5,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 13.11,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:01/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 92,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:01/km",
            "km": 13.11
          }
        ]
      },
      {
        "id": "kw8-2027-lauf6",
        "order": 6,
        "title": "Long Run with HM Pace Blocks",
        "type": "hm-block-long",
        "distanceKm": 28.01,
        "optimalHr": 176,
        "hrRange": "170-184 bpm",
        "pace": "6:34/km",
        "steps": [
          {
            "label": "Easy Long Run",
            "minutes": 79,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:01/km",
            "km": 11.26
          },
          {
            "label": "2 × 14 min HM Pace",
            "minutes": 28,
            "hr": 176,
            "hrRange": "170-184 bpm",
            "pace": "4:46/km",
            "km": 5.87
          },
          {
            "label": "Easy Jog Between Blocks",
            "minutes": 6,
            "hr": 145,
            "hrRange": "138-152 bpm",
            "pace": "7:51/km",
            "km": 0.76
          },
          {
            "label": "Cool-down",
            "minutes": 71,
            "hr": 150,
            "hrRange": "144-156 bpm",
            "pace": "7:01/km",
            "km": 10.12
          }
        ]
      }
    ]
  },
  {
    "kw": 9,
    "year": 2027,
    "startDate": "2027-03-01",
    "endDate": "2027-03-07",
    "targetKm": 82.7,
    "runs": [
      {
        "id": "kw9-2027-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.38,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "7:50/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "7:50/km",
            "km": 6.38
          }
        ]
      },
      {
        "id": "kw9-2027-lauf2",
        "order": 2,
        "title": "Progressive Run",
        "type": "progressive",
        "distanceKm": 11.53,
        "optimalHr": 168,
        "hrRange": "162-174 bpm",
        "pace": "6:04/km",
        "steps": [
          {
            "label": "Easy Start",
            "minutes": 28,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:00/km",
            "km": 4.0
          },
          {
            "label": "Steady Middle",
            "minutes": 24,
            "hr": 162,
            "hrRange": "156-168 bpm",
            "pace": "5:41/km",
            "km": 4.22
          },
          {
            "label": "Strong Finish",
            "minutes": 18,
            "hr": 168,
            "hrRange": "162-174 bpm",
            "pace": "5:26/km",
            "km": 3.31
          }
        ]
      },
      {
        "id": "kw9-2027-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.5,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:06/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:00/km",
            "km": 8.29
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw9-2027-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 13.71,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:00/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 96,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:00/km",
            "km": 13.71
          }
        ]
      },
      {
        "id": "kw9-2027-lauf5",
        "order": 5,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 13.57,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:00/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 95,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:00/km",
            "km": 13.57
          }
        ]
      },
      {
        "id": "kw9-2027-lauf6",
        "order": 6,
        "title": "Fast Finish Long Run",
        "type": "fast-finish-long",
        "distanceKm": 28.01,
        "optimalHr": 166,
        "hrRange": "160-175 bpm",
        "pace": "6:45/km",
        "steps": [
          {
            "label": "Easy Long Run",
            "minutes": 153,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:00/km",
            "km": 21.86
          },
          {
            "label": "Fast Finish",
            "minutes": 36,
            "hr": 166,
            "hrRange": "160-175 bpm",
            "pace": "5:51/km",
            "km": 6.15
          }
        ]
      }
    ]
  },
  {
    "kw": 10,
    "year": 2027,
    "startDate": "2027-03-08",
    "endDate": "2027-03-14",
    "targetKm": 70.8,
    "runs": [
      {
        "id": "kw10-2027-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 5.76,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "7:49/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 45,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "7:49/km",
            "km": 5.76
          }
        ]
      },
      {
        "id": "kw10-2027-lauf2",
        "order": 2,
        "title": "HM Pace Run",
        "type": "hm-pace",
        "distanceKm": 13.25,
        "optimalHr": 176,
        "hrRange": "170-184 bpm",
        "pace": "5:40/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 15,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:00/km",
            "km": 2.14
          },
          {
            "label": "3 × 14 min HM Pace",
            "minutes": 42,
            "hr": 176,
            "hrRange": "170-184 bpm",
            "pace": "4:46/km",
            "km": 8.81
          },
          {
            "label": "Easy Jog Between Blocks",
            "minutes": 8,
            "hr": 145,
            "hrRange": "138-152 bpm",
            "pace": "7:49/km",
            "km": 1.02
          },
          {
            "label": "Cool-down",
            "minutes": 10,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:49/km",
            "km": 1.28
          }
        ]
      },
      {
        "id": "kw10-2027-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.5,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:06/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:00/km",
            "km": 8.29
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw10-2027-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 18.29,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:00/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 128,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "7:00/km",
            "km": 18.29
          }
        ]
      },
      {
        "id": "kw10-2027-lauf5",
        "order": 5,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 24.0,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "7:00/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 168,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "7:00/km",
            "km": 24.0
          }
        ]
      }
    ]
  },
  {
    "kw": 11,
    "year": 2027,
    "startDate": "2027-03-15",
    "endDate": "2027-03-21",
    "targetKm": 76.68,
    "runs": [
      {
        "id": "kw11-2027-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 6.41,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "7:48/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 50,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "7:48/km",
            "km": 6.41
          }
        ]
      },
      {
        "id": "kw11-2027-lauf2",
        "order": 2,
        "title": "Threshold Run",
        "type": "threshold",
        "distanceKm": 11.57,
        "optimalHr": 179,
        "hrRange": "175-184 bpm",
        "pace": "5:47/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 15,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "6:59/km",
            "km": 2.15
          },
          {
            "label": "4 × 9 min Threshold",
            "minutes": 36,
            "hr": 179,
            "hrRange": "175-184 bpm",
            "pace": "4:53/km",
            "km": 7.37
          },
          {
            "label": "3 × 2 min Easy Jog",
            "minutes": 6,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:48/km",
            "km": 0.77
          },
          {
            "label": "Cool-down",
            "minutes": 10,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:48/km",
            "km": 1.28
          }
        ]
      },
      {
        "id": "kw11-2027-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.52,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:05/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "6:59/km",
            "km": 8.31
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw11-2027-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 11.6,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "6:59/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 81,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "6:59/km",
            "km": 11.6
          }
        ]
      },
      {
        "id": "kw11-2027-lauf5",
        "order": 5,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 11.6,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "6:59/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 81,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "6:59/km",
            "km": 11.6
          }
        ]
      },
      {
        "id": "kw11-2027-lauf6",
        "order": 6,
        "title": "Long Run with HM Pace Blocks",
        "type": "hm-block-long",
        "distanceKm": 25.98,
        "optimalHr": 176,
        "hrRange": "170-184 bpm",
        "pace": "6:26/km",
        "steps": [
          {
            "label": "Easy Long Run",
            "minutes": 73,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "6:59/km",
            "km": 10.45
          },
          {
            "label": "2 × 16 min HM Pace",
            "minutes": 32,
            "hr": 176,
            "hrRange": "170-184 bpm",
            "pace": "4:45/km",
            "km": 6.74
          },
          {
            "label": "Easy Jog Between Blocks",
            "minutes": 6,
            "hr": 145,
            "hrRange": "138-152 bpm",
            "pace": "7:48/km",
            "km": 0.77
          },
          {
            "label": "Cool-down",
            "minutes": 56,
            "hr": 150,
            "hrRange": "144-156 bpm",
            "pace": "6:59/km",
            "km": 8.02
          }
        ]
      }
    ]
  },
  {
    "kw": 12,
    "year": 2027,
    "startDate": "2027-03-22",
    "endDate": "2027-03-28",
    "targetKm": 68.68,
    "runs": [
      {
        "id": "kw12-2027-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 5.78,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "7:47/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 45,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "7:47/km",
            "km": 5.78
          }
        ]
      },
      {
        "id": "kw12-2027-lauf2",
        "order": 2,
        "title": "HM Pace Run",
        "type": "hm-pace",
        "distanceKm": 9.01,
        "optimalHr": 176,
        "hrRange": "170-184 bpm",
        "pace": "5:53/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 15,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "6:58/km",
            "km": 2.15
          },
          {
            "label": "2 × 12 min HM Pace",
            "minutes": 24,
            "hr": 176,
            "hrRange": "170-184 bpm",
            "pace": "4:44/km",
            "km": 5.07
          },
          {
            "label": "Easy Jog Between Blocks",
            "minutes": 4,
            "hr": 145,
            "hrRange": "138-152 bpm",
            "pace": "7:47/km",
            "km": 0.51
          },
          {
            "label": "Cool-down",
            "minutes": 10,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:47/km",
            "km": 1.28
          }
        ]
      },
      {
        "id": "kw12-2027-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.54,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:05/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "6:58/km",
            "km": 8.33
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw12-2027-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 22.39,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "6:58/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 156,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "6:58/km",
            "km": 22.39
          }
        ]
      },
      {
        "id": "kw12-2027-lauf5",
        "order": 5,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 21.96,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "6:58/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 153,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "6:58/km",
            "km": 21.96
          }
        ]
      }
    ]
  },
  {
    "kw": 13,
    "year": 2027,
    "startDate": "2027-03-29",
    "endDate": "2027-04-04",
    "targetKm": 60.77,
    "runs": [
      {
        "id": "kw13-2027-lauf1",
        "order": 1,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 5.78,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "7:47/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 45,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "7:47/km",
            "km": 5.78
          }
        ]
      },
      {
        "id": "kw13-2027-lauf2",
        "order": 2,
        "title": "HM Pace Run",
        "type": "hm-pace",
        "distanceKm": 9.02,
        "optimalHr": 176,
        "hrRange": "170-184 bpm",
        "pace": "5:53/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 15,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "6:57/km",
            "km": 2.16
          },
          {
            "label": "2 × 12 min HM Pace",
            "minutes": 24,
            "hr": 176,
            "hrRange": "170-184 bpm",
            "pace": "4:44/km",
            "km": 5.07
          },
          {
            "label": "Easy Jog Between Blocks",
            "minutes": 4,
            "hr": 145,
            "hrRange": "138-152 bpm",
            "pace": "7:47/km",
            "km": 0.51
          },
          {
            "label": "Cool-down",
            "minutes": 10,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:47/km",
            "km": 1.28
          }
        ]
      },
      {
        "id": "kw13-2027-lauf3",
        "order": 3,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 9.56,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:04/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 58,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "6:57/km",
            "km": 8.35
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw13-2027-lauf4",
        "order": 4,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 18.42,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "6:57/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 128,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "6:57/km",
            "km": 18.42
          }
        ]
      },
      {
        "id": "kw13-2027-lauf5",
        "order": 5,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 17.99,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "6:57/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 125,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "6:57/km",
            "km": 17.99
          }
        ]
      }
    ]
  },
  {
    "kw": 14,
    "year": 2027,
    "startDate": "2027-04-05",
    "endDate": "2027-04-11",
    "targetKm": 45.73,
    "runs": [
      {
        "id": "kw14-2027-lauf1",
        "order": 1,
        "title": "HM Pace Run",
        "type": "hm-pace",
        "distanceKm": 9.04,
        "optimalHr": 176,
        "hrRange": "170-184 bpm",
        "pace": "5:52/km",
        "steps": [
          {
            "label": "Warm-up",
            "minutes": 15,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "6:56/km",
            "km": 2.16
          },
          {
            "label": "2 × 12 min HM Pace",
            "minutes": 24,
            "hr": 176,
            "hrRange": "170-184 bpm",
            "pace": "4:44/km",
            "km": 5.07
          },
          {
            "label": "Easy Jog Between Blocks",
            "minutes": 4,
            "hr": 145,
            "hrRange": "138-152 bpm",
            "pace": "7:46/km",
            "km": 0.52
          },
          {
            "label": "Cool-down",
            "minutes": 10,
            "hr": 145,
            "hrRange": "138-150 bpm",
            "pace": "7:46/km",
            "km": 1.29
          }
        ]
      },
      {
        "id": "kw14-2027-lauf2",
        "order": 2,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 8.13,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:04/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 48,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "6:56/km",
            "km": 6.92
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw14-2027-lauf3",
        "order": 3,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 16.59,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "6:56/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 115,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "6:56/km",
            "km": 16.59
          }
        ]
      },
      {
        "id": "kw14-2027-lauf4",
        "order": 4,
        "title": "Long Run",
        "type": "long",
        "distanceKm": 11.97,
        "optimalHr": 152,
        "hrRange": "146-158 bpm",
        "pace": "6:56/km",
        "steps": [
          {
            "label": "Long Run",
            "minutes": 83,
            "hr": 152,
            "hrRange": "146-158 bpm",
            "pace": "6:56/km",
            "km": 11.97
          }
        ]
      }
    ]
  },
  {
    "kw": 15,
    "year": 2027,
    "startDate": "2027-04-12",
    "endDate": "2027-04-18",
    "targetKm": 35.66,
    "runs": [
      {
        "id": "kw15-2027-lauf1",
        "order": 1,
        "title": "Easy Run",
        "type": "easy",
        "distanceKm": 5.78,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "6:55/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 40,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "6:55/km",
            "km": 5.78
          }
        ]
      },
      {
        "id": "kw15-2027-lauf2",
        "order": 2,
        "title": "Easy Run + Strides",
        "type": "strides",
        "distanceKm": 5.55,
        "optimalHr": 146,
        "hrRange": "140-152 bpm",
        "pace": "7:07/km",
        "steps": [
          {
            "label": "Easy Run",
            "minutes": 30,
            "hr": 146,
            "hrRange": "140-152 bpm",
            "pace": "6:55/km",
            "km": 4.34
          },
          {
            "label": "6 × 20 s Strides",
            "minutes": 2,
            "hr": null,
            "hrRange": "",
            "pace": "4:20/km",
            "km": 0.46,
            "note": "Fast but relaxed. Not an all-out sprint."
          },
          {
            "label": "5 × 90 s Full Recovery",
            "minutes": 7.5,
            "hr": 138,
            "hrRange": "130-145 bpm",
            "pace": "10:00/km",
            "km": 0.75,
            "note": "Walk or very easy jog until breathing is fully controlled."
          }
        ]
      },
      {
        "id": "kw15-2027-lauf3",
        "order": 3,
        "title": "Recovery Run",
        "type": "recovery",
        "distanceKm": 3.23,
        "optimalHr": 142,
        "hrRange": "136-146 bpm",
        "pace": "7:44/km",
        "steps": [
          {
            "label": "Recovery Run",
            "minutes": 25,
            "hr": 142,
            "hrRange": "136-146 bpm",
            "pace": "7:45/km",
            "km": 3.23
          }
        ]
      },
      {
        "id": "kw15-2027-lauf4",
        "order": 4,
        "title": "Race",
        "type": "race",
        "distanceKm": 21.1,
        "optimalHr": 178,
        "hrRange": "172-186 bpm",
        "pace": "4:43/km",
        "steps": [
          {
            "label": "Half Marathon Race",
            "minutes": 99.5,
            "hr": 178,
            "hrRange": "172-186 bpm",
            "pace": "4:43/km",
            "km": 21.1
          }
        ]
      }
    ]
  }
];
