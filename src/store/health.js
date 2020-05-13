import { writable } from 'svelte/store'

const healthStore = writable([
  {
    imgSrc: 'bg1',
    flag: true,
    value: '16',
    unit: '| 24',
    icon: '',
    result: 'Goals Completed'
  },
  {
    imgSrc: 'bg1',
    flag: false,
    value: '',
    unit: '',
    icon: 'fas fa-battery-three-quarters',
    result: 'Respiration'
  },
  {
    imgSrc: 'bg2',
    flag: false,
    value: '',
    unit: '',
    icon: 'fas fa-running',
    result: 'Miles'
  },
  {
    imgSrc: 'bg1',
    flag: true,
    value: '36 °',
    unit: '',
    icon: '',
    result: 'Temperature'
  },
  {
    imgSrc: 'bg1',
    flag: false,
    value: '',
    unit: '',
    icon: 'fas fa-bed',
    result: 'Sleep Keep'
  },
  {
    imgSrc: 'bg2',
    flag: true,
    value: '98',
    unit: 'bmp',
    icon: '',
    result: 'Heart Rate'
  },
  {
    imgSrc: 'bg1',
    flag: true,
    value: 170,
    unit: 'lbs',
    icon: '',
    result: 'Weight'
  },
  {
    imgSrc: 'bg1',
    flag: true,
    value: '28',
    unit: '%',
    icon: '',
    result: 'Fat Percentage'
  },
  {
    imgSrc: 'bg2',
    flag: true,
    value: '118',
    unit: 'mgdl',
    icon: '',
    result: 'Blood Glucose'
  },
  {
    imgSrc: 'bg2',
    flag: true,
    value: '680',
    unit: 'kcal',
    icon: '',
    result: 'AVG Consumption'
  },
  {
    imgSrc: 'bg2',
    flag: false,
    value: '',
    unit: '',
    icon: 'fas fa-dumbbell',
    result: 'Workouts'
  },
  {
    imgSrc: 'bg2',
    flag: true,
    value: '85',
    unit: '%',
    icon: '',
    result: 'Body Hydration'
  }
])

export default healthStore