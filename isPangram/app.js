// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet. 
// Make sure you ignore string casing!

function isPangram(string) {
    myString = string.toLowerCase();
    let flag = true;
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z'];
    for (let letter of alphabet) {
        flag = myString.includes(letter)
        if (flag === false) {
            break;
        }
    }
    return flag
}

isPangram('The five boxing wizards jump quickly') //true
isPangram('The five boxing wizards jump quick') //false
