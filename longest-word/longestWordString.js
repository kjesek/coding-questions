const findLongestWordLength = (str) => {
  let max = 0;
  let words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    if(checkForMaxLength(words[i], max)) {
      max = words[i].length;
    }
  }
  return max;
}

const checkForMaxLength = (word, maxLength) => { return word.length > maxLength };

findLongestWordLength("The quick brown fox jumped over the lazy dog");