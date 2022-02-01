export const enum AirConAction {
  heat = 'heat',
  cool = 'cool',
}

export const enum SamplingInterval {
  /**
   * измерения проводить чаще, поддержание заданного диапазона важно
   */
  moreOften = 10,
  /**
   * расчетная частота измерения, подходит для жилых и не жилых помещений
   */
  nominal = 20,
  /**
   * измерения проводить реже, подходит для подсобных помещений
   */
  occasional = 60,
}

export type Temperature = number & { celsius: void };
export const makeTemperature = (value: number) => value as Temperature;
/**
 * Температура 4С
 */
export const C04 = makeTemperature(4);
/**
 * Температура 18С, рекомендуемая температура для спальни
 */
export const C18 = makeTemperature(18);
/**
 * Температура 22С
 */
export const C22 = makeTemperature(22);
/**
 * Температура 27С
 */
export const C27 = makeTemperature(27);
/**
 * Температура 33С
 */
export const C33 = makeTemperature(33);

type TemperatureRange = [min: Temperature, max: Temperature];

export interface Sensor {
  name: string;
  sampling: SamplingInterval;
  range: TemperatureRange;
  url: string;
}

export interface ControlSignal {
  name: string;
  action: AirConAction;
}
