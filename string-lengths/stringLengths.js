// Given an array of strings and a maximum string length,
// return the count of the strings greater than or equal to the max length

// ['hi', 'hello', 'ciao', 'bonjour'], 4 ==> 3
function checkStringLength(word, max) {
  if (word.length >= max) {
    return true;
  }
}

function stringLengthsGreaterThan(words, maxLength) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (checkStringLength(words[i], maxLength)) {
      count++;
    }
  }
  return count;
}

console.log(stringLengthsGreaterThan(["hi", "hello", "ciao", "bonjour"], 4));
console.log(
  stringLengthsGreaterThan(["hey", "hi", "hello", "burger", "time"], 3)
);
