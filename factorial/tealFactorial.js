//Solved recursively.  O(N) space and time if accounting for the call stack space and size

const factorial = (num) => {
  if (typeof(num) !== 'number') throw 'please input a number'
  if (num == null) throw 'no number given!'
  if (num === 0) return 1;

  return num * factorial(num-1)
}


console.log(factorial(9));