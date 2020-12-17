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
let totalCards = [...imagesArray, ...imagesArray];
let count = 0;
let firstClick = null;
let secondClick = null;
let previousClick = null;
let delay = 700;
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

function reset () {
  firstClick = null;
  secondClick = null;
  count = 0;
}

gameContainer.addEventListener("click", (event) => {
  let clicked = event.target;
  if (event.path[1].firstChild.classList.contains("selected")) {
    return
  }
  console.log(clicked);
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

    if (firstClick !== null && secondClick !== null) {
      if (firstClick === secondClick) {
        let selected = document.querySelectorAll(".selected")
        selected.forEach((card) => {
          card.style.display = "none";
        })
      } else {
        console.log("did not match");
        console.log(event.target)
        console.log(firstClick, "hello" ,secondClick)
        let selected = document.querySelectorAll(".selected");
        selected.forEach((card) => {
          card.style.visibility = "hidden";
        });
        firstClick.style.display = "initial"
        secondClick.style.display = "initial";
      }
      reset();
    }
  }
});
