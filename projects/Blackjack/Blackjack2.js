//Model a card to have a value and a suit

//Create a function that creates a deck of cards

const generateDeck = function () {
  const deck = [];
  const cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "King",
    "Queen",
    "Jack",
    "Ace",
  ];

  const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
  let card;
  for (card of cards) {
    for (let suit of suits) {
      deck.push({ card: card, suit: suit });
    }
  }
  // console.log(deck);
  return deck;
};

const myDeck = generateDeck();

//Draw card function
const drawCard = function (deck) {
  const randomIndex = Math.floor(Math.random() * deck.length);
  const card = deck[randomIndex];
  deck.splice(randomIndex, 1);
  return card;
};

const playerHand = [];
const dealerHand = [];

playerHand.push(drawCard(myDeck));
playerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));
//Calculate score function
const calcScore = function (hand) {
  let score = 0;
  for (const card of hand) {
    if (card.card === "King") score += 10;
    else if (card.card === "Queen") score += 10;
    else if (card.card === "Jack") score += 10;
    else if (card.card === "Ace") score += 1;
    else {
      score += Number(card.card);
    }
  }
  return score;
};

console.log("Starting Player Hand: ", playerHand);
console.log("Starting Player Score: ", calcScore(playerHand));
console.log("Starting Dealer Hand: ", dealerHand);
console.log("Starting Dealer Score: ", calcScore(dealerHand));

console.log("=====================STARTING GAME=============");

while (true) {
  //deal player card
  playerHand.push(drawCard(myDeck));
  //check if player bust over 21
  const playerScore = calcScore(playerHand);
  let dealerScore = calcScore(dealerHand);
  if (playerScore > 21) {
    console.log(
      `You lose! You final score was ${playerScore} while the dealer had ${dealerScore}`
    );
    break;
  }
  //check if player hits 21
  if (playerScore === 21) {
    console.log(
      `You win! Your final score was ${playerScore} while the dealer had ${dealerScore}`
    );
    break;
  }
  //deal dealer card
  dealerHand.push(drawCard(myDeck));
  //check if dealer bust over 21
  if (dealerScore > 21) {
    console.log(
      `You win! Your final score was ${playerScore} while the dealer had ${dealerScore}`
    );
    break;
  }
  if (dealerScore === 21) {
    console.log(
      `You win! Your final score was ${playerScore} while the dealer had ${dealerScore}`
    );
    break;
  }
  //check if dealer hits 21
}
console.log("Ending Player Hand: ", playerHand);
console.log("Ending Player Score: ", calcScore(playerHand));
console.log("Ending Dealer Hand: ", dealerHand);
console.log("Ending Dealer Score: ", calcScore(dealerHand));
