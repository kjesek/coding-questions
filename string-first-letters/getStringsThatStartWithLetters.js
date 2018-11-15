// Given an array of strings and an array of letters, 
// return the an array of strings (sorted alphabetically) that start with any of the letters in the letters array

// Sample input: ["me", "hello", "krista", "jesek", "its", "kazoo"], ["k", "m"] => ["kazoo", "krista", "me"]

function getStringsThatStartWithLetters(words, letters) {
  // .startsWith() .sort() 
  let resultArray = []; 
  for(let i = 0; i < words.length; i++ ){
      //if any word in array starts with one of the letters, push to result array
    if(checkLetters(words[i], letters)){
        resultArray.push(words[i]); 
    }
  }
  resultArray = resultArray.sort(); 
  return resultArray;    
}

function checkLetters(word, lettersArray ) {
    for(let i = 0; i < lettersArray.length; i++) {
        if (word.startsWith(lettersArray[i])){
            return true; 
        }
    }
    return false; 
}
