/* function confirmEnding
* @param string
* @param string
* return boolean
*/
const confirmEnding = (str, target) => {
  // target string to be the end of str 
  // substring can return the end of the string with a number for the index
  //  str length minus the  target length
  return str.substring(str.length - target.length) === target;
  // return the substring of above
  // check if the substring above is equal to the target, return true or false
}

// hello, lo 

console.log(confirmEnding('hello', 'h'));
