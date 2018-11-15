/* Filter is a function that takes an array and a function that returns true or false 
and returns an array of items that have true as a return value for the function.
Filter will take each item in the array and apply the function to that item. 
If the function returns true, it will add it to an array that will be returned. 
If it returns false, it does not add it to the array that will be returned.

filter([1,2,3,4], function(n) { return n % 2 === 0 }) ===> [2,4]
filter(['a', 'e', 'o'], function (n) { return n === 'a' || n ===  'o' }) ==> ['a','o']

function filter(container, f)

Implement filter */

function filter(container, f) {
    const resultArray = []; 
    for(let i=0; i<container.length; i++){
       let position = f(container[i]); 
       if(position){
        resultArray.push(container[i])
       }
    }
    return resultArray; 
}


console.log("result", filter([1,2,3,4], function(n) { return n % 2 === 0 }))
console.log("result", filter(['a', 'e', 'o'], function (n) { return n === 'a' || n ===  'o' }))