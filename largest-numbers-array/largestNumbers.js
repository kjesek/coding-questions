const largestOfFour = (arr) => {
  let returnedArr = [];
    for(let i = 0; i < arr.length; i++ ) {
      returnedArr.push(findLargestNum(arr[i]));
    }
  return returnedArr;
}

const findLargestNum = (numArr) => {
  let largestNum = numArr[0];
  for (let i = 1; i < numArr.length; i++) {
    if (largestNum < numArr[i] ) {
      largestNum = numArr[i];
    };
  };
  return largestNum;
}

module.exports = largestOfFour;