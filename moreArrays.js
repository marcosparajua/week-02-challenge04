export function arrayLength(array) {
  let i = 0;
  for (const item of array) {
    i++;
  }

  return i;
}

export function arrayPush(array, ...elements) {
  /* Array[arrayLength(newArray)] = element
  return arrayLength(array); */
  const elementLength = elements.length;
  for (let i = 0; i < elementLength; i++) {
    array[arrayLength(array)] = elements[i];
  }

  return arrayLength(array);
}

export function indexOf(arr, element) {
  let elementIndex = -1;
  for (let i = 0; i < arrayLength(arr); i++) {
    if (element === arr[i]) {
      elementIndex = i;
    }
  }

  return elementIndex;
}

export function shift(arr) {
  if (arr.length === 0) return undefined;

  const removedElement = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length--;

  return removedElement;
}

export function unshift(arr, ...elements) {
  if (length(elements) <= 0) return 0;
  for (let i = length(arr); i >= 0; i--) {
    if (i === 0) {
      for (let j = 0; j < length(elements); j++) {
        arrayPush(arr, elements[j]);
      }
    }
  }

  return length(arr);
}

export function some(arr, callbackFunction) {
  for (const element of arr) {
    if (callbackFunction(element)) return true;
  }

  return false;
}

export function map(arr, callbackFunction) {
  const newArr = [];
  for (const element of arr) {
    arrayPush(newArr, callbackFunction(element));
  }

  return newArr;
}
