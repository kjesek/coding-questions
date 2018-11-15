let test1 = [1, 3, 4, 5, 6, 9, 15, 16];
let test2 = [12, 12, 13, 14, 15, 18, 19, 25, 30];
let test3 = [1, 6, 7, 8, 10, 24, 25, 53, 61, 72, 73, 74, 75, 85];

function getConsecutiveNumbers(givenArray) {
    let resultString = "";
    for (let i = 0; i < givenArray.length; i++) {
        if (givenArray[i] + 1 === givenArray[i + 1]) {
            resultString += givenArray[i] + "-";
            while (givenArray[i + 2] === givenArray[i + 1] + 1) {
                givenArray.splice(i + 1, 1);
            }
        } else {
            if (i !== givenArray.length - 1) {
                resultString += givenArray[i] + ", ";
            } else {
                resultString += givenArray[i];
            }
        }
    }
    return resultString;
}

console.log("result from test1:", getConsecutiveNumbers(test1));
console.log("result from test2:", getConsecutiveNumbers(test2));
console.log("result from test3:", getConsecutiveNumbers(test3));