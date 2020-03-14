const makeDeck = () => {
  return {
    deck: [],
    discardPile: [],
    suits: ["hearts", "spades", "clubs", "diamonds"],
    values: "A,2,3,4,5,6,7,8,9,10,J,Q,K",
    initDeck() {
      const { suits, values, deck } = this;
      for (let value of values.split(",")) {
        for (let suit of suits) {
          deck.push({ value, suit });
        }
      }
      return deck;
    },
    drawCard(number) {
      const cards = [];
      const { discardPile } = this;
      for (let n = 0; number > n; n++) {
        cards.push(this.deck.pop());
        discardPile.push(this.deck.pop());
      }
      return cards;
    },
    shuffle() {
      const { deck } = this;
      // Fixer Gates shuffle
      for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        // sways elements in place
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    }
  };
};

const myDeck = makeDeck();
myDeck.initDeck();
myDeck.shuffle();
console.log(myDeck.drawCard(5));
console.log(myDeck.drawCard(5));
