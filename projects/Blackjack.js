const player = {
  score: 0,
  hand: [],
  allHands: [],
  name: "Player",
};
const dealer = {
  score: 0,
  hand: [],
  allHands: [],
  name: "Dealer",
};

const Deck = new Map();
const cards = ["Jack", "Queen", "King", "Ace", "Ace2"];
const Suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
const setCards = () => {
  for (let i = 2; i <= 10; i++) {
    Deck.set(i, Suits);
  }
  for (let card of cards) {
    Deck.set(card, Suits);
  }
};
const players = [dealer, player];
// console.log(Deck);

const game = function () {
  //Create the deck of cards
  setCards();

  let currPlayer = 1;
  let curr = players[currPlayer];
  let winner;
  // DEAL TO RANDOM CARDS TO PLAYER AND
  // DEALER

  const firstDraw = function (mp, p) {
    let rand = Array.from(mp.keys())[Math.floor(Math.random() * mp.size)];

    let randVal = Math.floor(Math.random() * 4);

    let randPick = [rand, mp.get(rand)[randVal]];

    p.hand.push(randPick);
    mp.delete(rand);
  };

  firstDraw(Deck, player);
  firstDraw(Deck, player);
  firstDraw(Deck, dealer);
  firstDraw(Deck, dealer);
  // console.log(Deck.size);
  while (
    curr.score != 21 &&
    curr.score < 21 &&
    players[Number(!currPlayer)].score != 21 &&
    players[Number(!currPlayer)].score < 21
  ) {
    console.log(curr.name);
    console.log(curr.hand);
    if (curr.name == "Player") {
      if (curr.score > 21) {
        winner = "Dealer";
        break;
      }
      if (curr.score == 21) {
        winner = "Player";
        break;
      } else {
        currPlayer = Number(!currPlayer);
      }
    }
    if (curr.name == "Dealer") {
      getRandom(Deck, curr);
      if (curr.score > 21) {
        winner = "Player";
        break;
      }
      if (curr.score === 21) {
        winner = "Player";
        break;
      } else {
        currPlayer = Numer(!currPlayer);
      }
    }
  }
  console.log(`Winner is: ${winner}`);
};

const checkScore = (curr) => {
  curr.score = curr.hand.flat().reduce((acc, hand) => {
    if (hand === "Ace" || hand == "Ace1") return acc + 1;

    if (typeof hand == "number") {
      return acc + hand;
    }
    if (typeof hand == "string") {
      return acc + 10;
    }
  }, 0);
  // return curr.score;
};

const getRandom = (mp, curr) => {
  let rand = Array.from(mp.keys())[Math.floor(Math.random() * mp.size)];

  let randVal = Math.floor(Math.random() * 4);

  let randPick = [rand, mp.get(rand)[randVal]];
  curr.hand.push(randPick);
  // curr.allHands.push(randPick);
  // curr.hand = curr.allHands.slice(-1);

  // console.log(rand);
  // mp.delete(rand);
  checkScore(curr);
};
game();
// console.log(player.hand);
// console.log(dealer.hand);
// console.table(Deck);
// console.log(player.hand);
// const tenPoints = ["Jack", "Queen", "King"];
