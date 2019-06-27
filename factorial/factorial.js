function getFactorial(num) {
  if(num === 0) {
    return 1;
  } else {
    let factorial = num;
      for(let i = 1; i < num; i++) {
        factorial *= i;
    }
    return factorial;
  }
}

console.log(getFactorial(5));
console.log(getFactorial(10));
console.log(getFactorial(20));
console.log(getFactorial(0));