import { createDashboard } from './dashboard';
import { Sensor } from './i-face-sensors';
import { getMilliseconds } from './lib';
import { assesReading, getReadings } from './readings';

export const beginMonitor = (sensor: Sensor): Promise<void> => new Promise<void>((resolve, reject) => {
  const dashboard = createDashboard(sensor);
  const msec = getMilliseconds(sensor.sampling);
  let id: ReturnType<typeof setInterval> | undefined = undefined;
  try {
    const sample = async () => {
      assesReading(
        await getReadings(sensor),
        sensor,
        dashboard,
      );
      id = setTimeout(sample,msec);
    };
    sample();
  } catch (err) {
    if(typeof id !== 'undefined'){
      clearInterval(id);
    }
    reject(err);
  }
});
