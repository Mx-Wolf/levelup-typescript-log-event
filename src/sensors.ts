import { C04, C18, C22, C27, C33, SamplingInterval, Sensor } from './i-face-sensors';

export const sensors: Sensor[] = [
  {
    name: 'living room',
    range: [C22, C27],
    sampling: SamplingInterval.nominal,
  },
  {
    name: 'garage',
    range: [C04,C33],
    sampling: SamplingInterval.occasional,
  },
  {
    name: 'bedroom',
    range: [C18,C22],
    sampling: SamplingInterval.nominal,
  },
  {
    name:'greenhouse',
    range: [C18,C33],
    sampling: SamplingInterval.occasional
  }
];
