// Write a isValidPassword Function
// It accepts 2 arguments: password & username
// Password must: 
// - be at least 8 characters
// - cannot contain spaces
// - cannot contain the username
// if all conditions are met, return true, else false

// meo-version
function isValidPassword(username, password) {
    if (password.length < 8) {
        return false;
    }
    else if (password.indexOf(' ') > -1) {
        return false;
    }
    else if (password.indexOf(username) > -1) {
        return false;
    }
    return true;
}
// make variables
function isValidPassword(username, password) {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;
    if (tooShort || hasSpace || tooSimilar) return false;
    return true;
}
// remove conditional
function isValidPassword(username, password) {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;
    return (!tooShort && !hasSpace && !tooSimilar)
}