const imagesArray = [
  "images/banana.png",
  "images/carrot.png",
  "images/diiddy-kong.png",
  "images/mario.png",
  "images/matched-set.png",
  "images/star.png",
  "images/super.png",
  "images/the-real-kirby.png",
];
//
const header = document.getElementById("title");
header.append("Super Smash 3");
//
let totalCards = [...imagesArray, ...imagesArray];
let count = 0;
let firstClick = null;
let secondClick = null;
let previousClick = null;
let delay = 700;
//
let pair = 0;
let health = 5;
//
const stats = document.getElementById("stats-container");
const score = document.createElement("div");
score.id = "score";
stats.append(score);
score.append(pair);
//
const lives = document.createElement("div");
lives.id = "lives";
stats.append(lives);
lives.append(health);
//
const gameContainer = document.getElementById("game-container");
function shuffleCards(array) {
  let randomNumber, newArray, deck;
  for (deck = array.length - 1; deck > 0; deck--) {
    randomNumber = Math.floor(Math.random() * (deck + 1));
    newArray = array[deck];
    array[deck] = array[randomNumber];
    array[randomNumber] = newArray;
  }
  return array;
}
//
shuffleCards(totalCards);
totalCards.forEach((image) => {
  // give the card a class
  const cardContainer = document.createElement("div");
  cardContainer.id = "card-container";
  const card = document.createElement("div");
  card.classList.add("card");
  const back = document.createElement("div");
  back.id = image;
  back.classList.add("back");
  const front = document.createElement("div");
  front.classList.add("front");
  front.style.backgroundImage = `url("${image}")`;
  // append
  gameContainer.appendChild(cardContainer);
  cardContainer.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});
//
const resetClick = () => {
  firstClick = null;
  secondClick = null;
  count = 0;
};
//
function win() {
  let front = document.querySelectorAll(".front");
  let back = document.querySelectorAll(".back");
  alert("WINNER WINNER CHICKEN DINNER");
  // console.log(front);
  front.forEach((card) => {
    card.style.display = "initial"
    card.style.visibility = "hidden"
    console.log(card);
  })
  back.forEach((card) => {
    card.style.display = "initial"
  })
    pair = 0;
    health = 5;
    score.textContent = pair;
    lives.textContent = health;
}
function lose () {
  let front = document.querySelectorAll(".front");
  let back = document.querySelectorAll(".back");
  alert("WINNER WINNER CHICKEN DINNER");
  // console.log(front);
  front.forEach((card) => {
    card.style.display = "initial";
    card.style.visibility = "hidden";
    console.log(card);
  });
  back.forEach((card) => {
    card.style.display = "initial";
  });
}

//
const match = () => {
  if (firstClick.id === secondClick.id) {
    pair++;
    score.textContent = pair;
    if (pair === 1) {
      win();
    }
    let selected = document.querySelectorAll(".selected");
    selected.forEach((card) => {
      card.style.display = "none";
    });
  } else {
    health--;
    lives.textContent = health;
    if (health === 0) {
      alert("LOST LADS");
    }
    let selected = document.querySelectorAll(".selected");
    selected.forEach((card) => {
      card.style.visibility = "hidden";
      card.classList.remove("selected");
    });
    firstClick.style.display = "initial";
    secondClick.style.display = "initial";
  }
};
//
gameContainer.addEventListener("click", (event) => {
  let clicked = event.target;
  if (event.path[1].firstChild.classList.contains("selected")) {
    return;
  }
  if (count < 2) {
    count++;
    if (count === 1) {
      firstClick = clicked;
      firstClick.style.display = "none";
      let frontOne = event.path[1].firstChild;
      frontOne.classList.add("selected");
      frontOne.style.visibility = "visible";
    } else {
      secondClick = clicked;
      secondClick.style.display = "none";
      let frontTwo = event.path[1].firstChild;
      frontTwo.classList.add("selected");
      frontTwo.style.visibility = "visible";
    }
    //
    if (firstClick !== null && secondClick !== null) {
      setTimeout(match, delay);
      setTimeout(resetClick, delay);
    }
  }
});
