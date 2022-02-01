//в этом файле вам следует создать и запустит систему мониторинга и управления.

import { beginMonitor } from './monitor';
import { sensors } from './sensors';

const monitor = async()=>{
  await Promise.race(sensors.map(beginMonitor));
};

monitor();
