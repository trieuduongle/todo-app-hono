import { isExist } from './common.util';

test('Value is not existed', () => {
  expect(isExist(undefined)).toBe(false);
  expect(isExist(null)).toBe(false);
});

test('Value is existed', () => {
  expect(isExist('')).toBe(true);
  expect(isExist(0)).toBe(true);
  expect(isExist({})).toBe(true);
  expect(isExist([])).toBe(true);
});
