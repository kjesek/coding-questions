//given two integers, return the max. 
// If the integers are equal return the first.

function getMax(a, b) {
  if(a === b || checkForGreaterNum(a, b)) { 
    return a;
  } else {
    return b;
  }
}

function checkForGreaterNum(num1, num2) {
  return num1 > num2;
}

console.log('test1', getMax( 40, 30));
console.log('test2', getMax( 20, 20));
console.log('test3', getMax( -30, 50));