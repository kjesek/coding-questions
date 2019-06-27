// #Array identity and index
// ###Given an array of characters and an array of indices to place those integers at,
//return the resulting array of chars

// ###Ex: photoAlbum([‘a’, ‘b’, ‘c’], [0, 0, 1]) ===> [‘b’, ‘c’, ‘a’])

function moveChars(charArray, indexArray, resultArray) {
  charArray.forEach(elem => {
    moveOneChar(charArray[elem], indexArray[elem], resultArray[elem]);
  });
  //   for (let i = 0; i < charArray.length; i++) {
  //     moveOneChar(charArray[i], indexArray[i], resultArray);
  //   }
  return resultArray;
}

function moveOneChar(letter, index, resultArray) {
  if (!checkIfArrayExists(resultArray)) {
    resultArray.push(letter);
  } else {
    resultArray.splice(index, 0, letter);
  }
  return resultArray;
}

function checkIfArrayExists(array) {
  return array.length > 0;
}

console.log(moveChars(["a", "b", "c"], [1, 0, 2], ["p"]));
