let player = {
  name: "jakob",
  chips: 200,
};
let hasBlackJack = false;
let isAlive = false;
let message = "";
let cards = [];
let sum = 0;
let messageEl = document.getElementById("message_el");
let sumEl = document.getElementById("sum_el");
let cardEl = document.getElementById("cards_el");
let playerEl = document.getElementById("player_el");
playerEl.textContent = player.name + " : $" + player.chips;

function getRandomCard() {
  let randomNr = Math.floor(Math.random() * 13) + 1;

  if (randomNr > 10) {
    return 10;
  } else if (randomNr === 1) {
    return 11;
  } else {
    return randomNr;
  }
}

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
  isAlive = true;
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "do you want another card?";

    isAlive = true;
  } else if (sum === 21) {
    message = "blackjack!";
    hasBlackJack = true;
  } else {
    isAlive = false;
    message = "you are out!";
  }
  messageEl.textContent = message;
  sumEl.textContent = "sum :" + sum;
  cardEl.textContent = "cards :";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let anotherCard = getRandomCard();
    sum += anotherCard;
    cards.push(anotherCard);
    renderGame();
  }
}
