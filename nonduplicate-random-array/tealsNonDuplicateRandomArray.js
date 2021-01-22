//O(N) time (n = c) O(N) space if space for output array is assumed

nonDuplicateRandomArray = (a, b, c) => {
  if(c === 0) return [];
  if (a === b && c===1) return [...a];
  if (c>(b-a)) throw 'Range too narrow for array length given!';

  let result = new Array(c);
  let obj = {};
  let i = 0;

  while (i<c){
    let num = Math.floor(Math.random()*(b-a)+a);

    if (obj[num] == null){
      obj[num] = i;
      result[i] = num;
      i++;
    }   
  }
  return result;
}


console.log('test 5, 20, 10: ' + nonDuplicateRandomArray(5, 20, 10))
console.log('test 4, 200, 15: ' + nonDuplicateRandomArray(4, 200, 15))
console.log('test 0, 0, 0: ' + nonDuplicateRandomArray(0, 0, 0))
console.log('test 0, 30, 5: ' + nonDuplicateRandomArray(0, 30, 5))
console.log('test 0, 3, 10: ' + nonDuplicateRandomArray(0, 3, 10))