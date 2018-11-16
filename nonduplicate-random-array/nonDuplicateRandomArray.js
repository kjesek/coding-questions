function checkArrayLength(array, expectedLength) {
  return array.length === expectedLength;
}

function checkIfInArray(num, array) {
  return array.indexOf(num) === -1;
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function createRandomArray(minNum, maxNum, arrayLength) {
  let randomIntArray = [getRandomNum(minNum, maxNum)];
  while (!checkArrayLength(randomIntArray, arrayLength)) {
    nextNum = getRandomNum(minNum, maxNum);
    if (checkIfInArray(nextNum, randomIntArray)) {
      randomIntArray.push(nextNum);
    }
  }
  return randomIntArray;
}

console.log(createRandomArray(1, 11, 4));
