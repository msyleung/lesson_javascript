// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

function getValue(index) {
    let value = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    return value[index];
}

function getSuit(index) {
    let suit = ['clubs', 'spades', 'hearts', 'diamonds'];
    return suit[index];
}

function getCard() {
    let v = getValue(Math.floor(Math.random() * 13));
    let s = getSuit(Math.floor(Math.random() * 4));
    return ({
        value: v,
        suit: s
    })
}