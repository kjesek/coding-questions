//O(N) time O(1) space.
//works if array has negative integers as well

getConsecutiveNums = (arr) => {
  if (!arr[0]) return '';
  if (arr.length === 1) return arr[0].toString();

  let result = '';
  let i = 0;

  while (i<arr.length){
    let start = arr[i];
    let j = i + 1;
    let end = arr[j];

    while (end <=(arr[j-1] + 1) && i<arr.length && j<arr.length){
      j++;
      end = arr[j];
    } 

    if (arr[i] == arr[j-1]){
      result += start.toString() + ', ';
      i = j;
    } else {
      result += start.toString() + '-' + arr[j-1].toString() + ', '
      i = j;
    }
  }
return result.substring(0, result.length-2);
}

//perhaps not the cleanest way to return the result by adding characters then trimming them off... could add conditions to the concatenation instead.

let a = [-4, -3, -1, 0, 1, 2, 3, 5, 6, 7, 9, 80, 81, 82, 83 ];
;
let b = [12, 12, 13, 14, 15, 18, 19, 25, 30];
let c = [12, 12, 12, 12, 12, 12, 12, 12];
let d = [12, 12, 12, 12, 14, 15, 16];


console.log("a result: " + getConsecutiveNums(a));
console.log("b result: " + getConsecutiveNums(b));
console.log("c result: " + getConsecutiveNums(c));
console.log("d result: " + getConsecutiveNums(d));
