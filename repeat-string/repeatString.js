const repeatStringNumTimes = (str, num) => {
  if (num < 1) {return ''} 
  else {
    let repeatedString = str;
    for(let i = 1; i < num; i++ ) {
      str += repeatedString;
    }
    return str;
  }
}

console.log(repeatStringNumTimes('abc', 3))