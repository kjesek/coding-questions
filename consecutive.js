// given a sorted array of integers, 
// return an array with a dash replacing the consecutive numbers

// example: [1, 2, 3, 5, 6, 7, 9, 10, 11, 15] => [1-3, 5-7, 9-11, 15]

function getConsecutiveNumbers(inputArray) {
    let resultString = ''; 
    let consecutiveString = ''; 
    for(let i = 0; i < inputArray.length; i++) {
        let firstNumber = inputArray[i];
        let secondNumber = inputArray[i + 1]; 
        if (checkIfConsecutive(firstNumber, secondNumber)) {
            if (!checkIfStringExists(consecutiveString)) {
                consecutiveString += firstNumber + '-';
            } 
        } else { 
            resultString += consecutiveString + firstNumber; 
            if (!checkIfLast(firstNumber, inputArray)) {
                resultString += ', '; 
            } 
            consecutiveString = ''; 
        }
    }
    return resultString; 
}

function checkIfConsecutive(num1, num2) {
    if (num1 === num2 - 1) {
        return true; 
    } else {
        return false; 
    }
}

function checkIfStringExists(consecutiveString) {
    if (consecutiveString.length > 0) {
        return true; 
    } else {
        return false; 
    }
}

function checkIfLast(num, numberArray) {
    if (num === numberArray[numberArray.length - 1]) {
        return true; 
    } else {
        return false; 
    }
}

console.log(getConsecutiveNumbers([1, 2, 3, 5, 6, 7, 9, 10, 11, 15]));
