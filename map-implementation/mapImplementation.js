// Map is a function that takes an array and a function. 
//It takes whatever is in the array and returns an array 
// of each item with the function applied to it. For example:

// map([1,2,3], function(n) { return n + 2 }) ==> [3, 4, 5]
// map(['hello', 'world'], function(n) { return n.substring(0,2) } ==> ['he', 'wo']

// The method signature is:

// function map(container, f)

// Implement map

/*
    @param {array}
    @param {callback function}
    @return array
*/
function map(container, f) {
    // copy of container and then use this copy as the parameter in f 
    let containerCopy = container.slice(); 
    let resultArray = []; 
    for(let i=0; i < containerCopy.length; i++){
       let position =  f(containerCopy[i]); 
        resultArray.push(position); 
    }
    return resultArray; 
}



// this just does the same thing as the slice method
// function callback(inputArray) {
//     let functionArray = []; 
//     for(let i=0; i<inputArray.length; i++){
//         functionArray.push(inputArray[i]);
//     }
//     return functionArray; 
// }

console.log(map([1,2,3], function(n) { return n + 2 })); 
console.log(map(['hello', 'world'], function(n) { return n.substring(0,2) }));


