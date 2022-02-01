import { C04, C18, C22, C27, C33, SamplingInterval, Sensor} from './i-face-sensors';
import { TEST_SENSOR_URL } from './settings';

export const sensors: Sensor[] = [
  {
    name: 'living room',
    range: [C22, C27],
    sampling: SamplingInterval.nominal,
    url: TEST_SENSOR_URL,
  },
  {
    name: 'garage',
    range: [C04,C33],
    sampling: SamplingInterval.occasional,
    url: TEST_SENSOR_URL,
  },
  {
    name: 'bedroom',
    range: [C18,C22],
    sampling: SamplingInterval.nominal,
    url: TEST_SENSOR_URL,
  },
  {
    name:'greenhouse',
    range: [C18,C33],
    sampling: SamplingInterval.occasional,
    url: TEST_SENSOR_URL,
  },
];
