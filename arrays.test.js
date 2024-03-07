import { includes, find, filter, some, map } from './arrays';
describe('includes', () => {
  test('If given an argument "pikachu" compared to an array that contains "pikachu", "charmeleon" and "charmander" it should return true', () => {
    const x = 'pikachu';
    const expected = true;
    const r = includes(x);
    expect(r).toBe(expected);
  });
});

test('If given an argument "pikachu" compared to an array that contains "pikachu", "charmeleon" and "charmander" it should return true', () => {
  const x = 'pikachu';
  const expected = true;
  const r = includes(x);
  expect(r).toBe(expected);
});
describe('includes', () => {
  test('If given an argument of 2 compared to an array that contains "pikachu", "charmeleon" and "charmander" it should return false', () => {
    const x = 2;
    const expected = false;
    const r = includes(x);
    expect(r).toBe(expected);
  });
});

test('If given an argument of 2 compared to an array that contains "pikachu", "charmeleon" and "charmander" it should return false', () => {
  const x = 2;
  const expected = false;
  const r = includes(x);
  expect(r).toBe(expected);
});
