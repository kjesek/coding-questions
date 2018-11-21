// Array traversing
// Given an array of strings, join each string (with a space) with the ones before it and return that new array.
// Ex: makeStrings([‘hello’, ‘world’, ‘its’, ‘me’, ‘krista’]) ==> [‘hello’, ‘hello world’, ‘hello world its’, ‘hello world its me’, ‘hello world its me krista’]

// World > hello —> true? Calculate the difference and compare to current max difference
// World < hello —> false? Move to the next one

// Function test(arrayToRunThrough) {
// 	for(I = 1; I < arraytoRunThrough.length; I++) {
// 		let item = arrayToRunThrough[I]
// 		for(j = 0; j < i; j++) {
//let comparedItem = arrayToRunThrough[j];

// 		}
// 	}
// 	return maxDifference;
// }

// I = 1
// item = ‘world’
// J = 0
// comparedItem = ‘hello’

// I = 2
// Item = ‘its’
// J = 0
// comparedItem = ‘hello’
// J = 1
// comparedItem = ‘world’

// I = 3
// Item = me’
// J=0
// comparedItem = ‘hello’
// J=1
// comparedItem = ‘world’
// J=2
// comparedItem = ‘its’

// Function test(arrayToRunThrough) {
// 	let maxDifference = -1;
// 	for(I = 1; I < arraytoRunThrough.length; I++) {
// 		let item = arrayToRunThrough[I]
// 		for(j = 0; j < I; j++) {
//let comparedItem = arrayToRunThrough[j];
// 			if (item > comparedItem]) {
// 				// Calculate the difference
// 				if difference > maxDifference
// 					maxDifference = difference;
// 			}
// 		}
// 	}
// 	return maxDifference;
// }
