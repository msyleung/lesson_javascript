alert("It's working!");

// generates a random number (range from 0 - 5)
let num = Math.random() * 6
console.log(num);
// Math.floor removes the decimals, no rounding (Math.round)
console.log(Math.floor(num));
console.log(Math.floor(num) + 1) // need to add one for range to be from 1 - 6

"a banana".indexOf('a') // returns 0
"a banana".indexOf('banana') // returns 3 for start of banana
"a banana".indexOf('c') // returns -1 'cause it don't exist