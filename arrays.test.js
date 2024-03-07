
import {
  manualArrayLength,
  fakeIndexOf,
  fakeMap,
  fakePush,
  multiply,
} from './arrays';
describe('manualArrayLength', () => {
  test('If given an empty array as an argument it should return 0 ', () => {
    const x = [];
    const expected = 0;
    const r = manualArrayLength(x);
    expect(r).toBe(expected);
  });
});

test('If given a one element array as argument it should return 1 ', () => {
  const x = [1];
  const expected = 1;
  const r = manualArrayLength(x);
  expect(r).toBe(expected);
});

test('If given an array with the elements cat, dog and chicken and one of its elements, dog, as arguments it should return 1 ', () => {
  const x = ['cat', 'dog', 'chicken'];
  const y = 'dog';
  const expected = 1;
  const r = fakeIndexOf(x, y);
  expect(r).toBe(expected);
});

test('If given an array with the elements cat, dog and chicken and a foreign element , frog, as arguments it should return -1 ', () => {
  const x = ['cat', 'dog', 'chicken'];
  const y = 'frog';
  const expected = -1;
  const r = fakeIndexOf(x, y);
  expect(r).toBe(expected);
});

test('If only given the array as argument it should return "you must indicate an element to be indexed." ', () => {
  const x = ['cat', 'dog', 'chicken'];


  expect(() => fakeIndexOf(x)).toThrow(
    'you must indicate an element to be indexed.'
  );

});

test('If only given an array of animals and another element, armadillo, as arguments it should return the new length of the array, that is, the original length plus one, in this case 4', () => {
  const x = ['cat', 'dog', 'chicken'];
  const y = 'armadillo';
  const expected = 4;
  const r = fakePush(x, y);
  expect(r).toBe(expected);
});

test('If only given an array of animals and two more elements, armadillo and caterpillar, as arguments it should return the new length of the array, that is, the original length plus two, in this case 5', () => {
  const x = ['cat', 'dog', 'chicken'];
  const y = ['armadillo', 'caterpillar'];
  const expected = 5;
  const r = fakePush(x, ...y);
  expect(r).toBe(expected);
});
