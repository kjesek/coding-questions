//runtime: max = O((N^2)/2) if indices array is filled with 0's min
//space: O(1) assuming output array is a given
//One interesting case is that sometimes there are empty spaces in the array, even if the inputs are the same length. If the values in the indices array are too high, the lower indices do not get filled.  This program returns them as just empty spaces in the array and then extends the array to move items to the right.  IE: [a, b, c, d, e], [4, 4, 4, 4, 4] ==> [null, null, null, null, e, d, c, b, a]... probably not the expected/desired behavior, but not sure how the "interviewer" would want such a case handled.

const arrangeChars = (chars, indices) => {
  if (chars.length !== indices.length) throw 'input array lengths do not match!';
  if (chars.length === 0) return [];
  
  let result = new Array(chars.length);
  
  for (let i=0; i<chars.length; i++){
    if (result[indices[i]] == null){
      result[indices[i]] = chars[i];
    } else {
      let j = indices[i] + 1;
      while (result[j] != null){
        j++;
      }
      while (j>indices[i]){
        result[j]=result[j-1];
        j--;
      }
      result[indices[i]] = chars[i];
    }
  }
  console.log(`result length is ${result.length}`)
  return result;
}

console.log(arrangeChars(['a', 'b', 'c', 'd'], [3, 1, 0, 0]));
console.log(arrangeChars(['a', 'b', 'c', 'd', 'e', 'f', 'g'], [3, 1, 0, 0, 2, 4, 6]));

let longString ='gkyunxudmihvsejavwvfgpidamezvfbhvwzqkvxtgibihgosiweapbxujfayynztjdghurqpnyyecypqrnlobvgxitneomgoqnvd';
let longStringArr = [...longString.split('')]

console.log(arrangeChars(longStringArr, [19,	35,	3,	53,	12,
  93,	28,	69,	63,	86,
  22,	2,	97,	52,	54,
  41,	25,	77,	65,	42,
  92,	8,	4,	57,	79,
  76,	49,	23,	65,	7,
  86,	89,	40,	62,	68,
  83,	17,	15,	79,	48,
  1,	72,	37,	83,	24,
  72,	74,	52,	50,	17,
  9,	88,	28,	76,	89,
  45,	23,	0,	99,	58,
  82,	31,	38,	68,	96,
  49,	12,	60,	50,	68,
  8,	41,	66,	73,	53,
  14,	68,	57,	84,	77,
  31,	44,	0,	21,	8,
  30,	73,	23,	33,	22,
  23,	93,	44,	50,	28,
  53,	44,	24,	4,	66]));