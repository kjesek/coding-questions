function reverseString(str) {
  let reversedString = '';
  for(let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

console.log(reverseString('hello'));
console.log(reverseString('Howdy'));
console.log(reverseString('Greetings from Earth'));