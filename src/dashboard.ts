import { Dashboard } from './i-face-dashboard';
import { AirConAction, Sensor } from './i-face-sensors';
import { sendControlSignal } from './lib';

export const createDashboard = (sensor: Pick<Sensor, 'name'>): Dashboard => ({
  cool: () => sendControlSignal({ name: sensor.name, action: AirConAction.cool }),
  heat: () => sendControlSignal({ name: sensor.name, action: AirConAction.heat })
});
