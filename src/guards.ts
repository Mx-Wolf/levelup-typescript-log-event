import { Temperature } from './i-face-sensors';

const isArray = (value: unknown): value is unknown[] => Array.isArray(value);

const isReading = (value: unknown): value is number => Number.isFinite(value);

export const assertArray: (value: unknown) => asserts value is unknown[] = (value) => {
  if (!isArray(value)) {
    throw new TypeError('not array');
  }
};

export const assertReading: (value: unknown) => asserts value is Temperature = (value) => {
  if (!isReading(value) || value < 0 || value > 40) {
    throw new RangeError(`not an expected value [${value}]`);
  }
};
