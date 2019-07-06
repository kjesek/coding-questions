//palindrome check for one word

const isPalindrome = (str) => {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome('mom'));
console.log(isPalindrome('hey'));
