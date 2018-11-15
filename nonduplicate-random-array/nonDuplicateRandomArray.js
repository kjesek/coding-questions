function createRandomArray(){
	let randomIntArray = [getRandomNum(1, 11)]; 
	while(!checkArrayLength(randomIntArray, 4)){
        nextNum = getRandomNum(1, 11);
        if(checkIfInArray(nextNum, randomIntArray)){
            randomIntArray.push(nextNum);
        } 
    }
    return randomIntArray; 
}

function checkArrayLength(array, expectedLength){
	return array.length === expectedLength;
}

function checkIfInArray(num, array){
	return array.indexOf(num) === -1;
}

function getRandomNum(min, max){ 
    return  Math.floor(Math.random() * (max - min)) + min;
}

console.log(createRandomArray())

