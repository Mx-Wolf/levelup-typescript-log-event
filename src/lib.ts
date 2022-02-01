import { ControlSignal, SamplingInterval } from './i-face-sensors';
import { BASE_SAMPLING_FACTOR } from './settings';

/**
 * Функция для эмуляции управления системой кондиционирования воздуха умного дома.
 * Вам следует вызывать эту функцию при обнаружении показаний любого из набора датчиков
 * выходящими за пределы установленного диапазона.
 * @param airConSignal сведения для управления системой кондиционирования воздуха
 * @returns Promise
 */
export const sendControlSignal = (
  airConSignal: ControlSignal,
) => new Promise<void>(
  (resolve) => {
    setTimeout(
      ()=>{
        global.console.log(airConSignal);
        resolve();
      },
      0,
    );
  },
);

export const getMilliseconds = (sampling: SamplingInterval) => sampling * BASE_SAMPLING_FACTOR;
