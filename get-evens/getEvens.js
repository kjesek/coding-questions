//Given an array of integers, return an array of even 

//Given an array of integers and a number n, return an array of numbers divisible n

//Given an array of integers, a number n and a limit, return an array (up to the size of limit) of numbers divisible by n

// Sample case: [1, 3, 4, 6, 7, 8, 10, 27, 36], 3, 3 => [3, 6, 27]
//when N is length of integerArray, O(N)

function getEvens(integerArray, n, limit){
    let evenArray = []; 
        for(let i = 0; i < integerArray.length; i++){
            if(integerArray[i] % n === 0 && evenArray.length < limit){
                evenArray.push(integerArray[i]); 
                //evenArray = [3, 6, 27]
                console.log("evenArray in loop", evenArray);
            } 
        }
    console.log("returned evenArray", evenArray); 
    return evenArray; 
}

getEvens([1, 3, 4, 6, 7, 8, 10, 27, 36], 3, 3); 