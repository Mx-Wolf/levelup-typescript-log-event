import { assertArray, assertReading } from './guards';
import { Dashboard } from './i-face-dashboard';
import { Sensor, Temperature } from './i-face-sensors';

export const assesReading = (
  reading: Temperature,
  sensor: Pick<Sensor, 'range'>,
  dashboard:Dashboard,
) => {
  const { range: [min, max] } = sensor;
  const {heat,cool} = dashboard;
  if (reading < min) {
    return heat();
  }
  if (reading > max) {
    return cool();
  }
  global.console.log(`reading: ${reading} within range [${min}, ${max}]`);
};

export const getReadings = async (sensor: Pick<Sensor, 'url'>) => {
  const response = await fetch(sensor.url);
  if (response.ok) {
    const result = await response.json();
    assertArray(result);
    const [reading] = result;
    assertReading(reading);
    return reading;
  }
  throw new Error(`${response.status} - ${response.statusText}`);
};
