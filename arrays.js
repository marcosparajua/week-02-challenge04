export const manualArrayLength = (array) => {
  let r = 0;

  for (const iterator of array) {
    r++;
  }

  return r;
};

export const fakeIndexOf = (arr, arrayElement) => {
  if (arrayElement === undefined) {
    throw new Error('you must indicate an element to be indexed.');
  }

  let elementIndex = -1;
  const arrayLength = manualArrayLength(arr);
  for (let i = 0; i < arrayLength; i++) {
    if (arrayElement === arr[i]) {
      elementIndex = i;
    }
  }
  return elementIndex;
};

export const fakePush = (arr, ...p) => {
  const arrayLength = manualArrayLength(arr);
  const pLength = manualArrayLength(p);
  for (let i = 0; i < pLength; i++) {
    arr[arrayLength + i] = p[i];
  }
  const newLength = manualArrayLength(arr);
  return newLength;
};
export const multiply = (a) => {
  return a * 2;
};

export const fakeMap = (arr, func) => {
  const arrayLength = manualArrayLength(arr);
  let newArray = new Array(arrayLength);
  for (let i = 0; i < arrayLength; i++) {
    const element = func(arr[i]);
    newArray[i] = element;
  }
  return newArray;
};
