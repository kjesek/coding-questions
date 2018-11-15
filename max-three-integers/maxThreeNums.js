// given an array of three or more numbers, return the maximum three numbers
// [10, 5, 1, 495] => [10,5,495]
// questions: can there be multiples of the same number? 

/*
initial thought: but the javascript sort method actually sorts by strings, 
not integers so [10, 5, 1, 495] sorts to [1, 10, 495, 5] 
5 is greater than 4 here so 495 is before 5. 

 function getMaxThree(numbersArray){
    numbersArray.sort().reverse(); 
    let maxThreeArray = [numbersArray[0], numbersArray[1], numbersArray[2]];
    return maxThreeArray;
 }
 console.log(getMaxThree([10, 5 , 1, 495]))
 */

//  function getMaxThree(numbersArray){
//      let maxThreeArray = [];
//      for(let i = 0; i < numbersArray.length; i++){
//          //check if one position is greater than the last 
//          if(checkNumbers(numbersArray[i], numbersArray[i+1])){
//             maxThreeArray.push(numbersArray[i+1]);
//          } 
//      }
//     return maxThreeArray; 
//  }

//  function checkNumbers(num1, num2){
//      if(num2 > num1){
//          return true
//      }
//  }
//  console.log(getMaxThree([10, 5 , 1, 495]));

// gets max three sorted 
function getMaxThree(numbersArray){
    sortNumbersArray(numbersArray); 
    let maxThreeArray = [numbersArray[0], numbersArray[1], numbersArray[2]];
    return maxThreeArray; 
}

function sortNumbersArray(numbers){
    numbers.sort(function(num1, num2){
        return num2 - num1
    })
    return numbers; 
}



console.log(getMaxThree([1000, 5 , 1000000, 495, 989, 600, 0]));