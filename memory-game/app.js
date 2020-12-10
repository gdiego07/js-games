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
function shuffle(array) {
    var randomNumber, newArray, deck;
    for (deck = array.length - 1; deck > 0; deck--) {
        randomNumber = Math.floor(Math.random() * (deck + 1));
        newArray = array[deck];
        array[deck] = array[randomNumber];
        array[randomNumber] = newArray;
    }
    return array;
};
   function createGameCards (images) {
    const cardImages = [...images, ...images];
      shuffle(cardImages);
      console.log(cardImages);
       cardImages.forEach(image => {
       const cardContainer = document.createElement("div");
       cardContainer.id = "card-container";
       const card = document.createElement('div');
       card.className = "card";
       const back = document.createElement('div');
       back.className = "back";
       const front = document.createElement('div');
       front.className = 'front'
       front.style.backgroundImage = `url("${image}")`;
       cardContainer.append(card);
       card.append(back);
       card.append(front);
       const gameContainer = document.querySelector("#game-container");
       gameContainer.append(cardContainer);
       const main = document.querySelector("#main")
       main.append(gameContainer);
    }) 

 };
 function initalizeApp() {
     createGameCards(imagesArray);
 }
 initalizeApp();


 
// function displayStats() {
// let scoreTrack = "0";
// let countdown = "2:00";
// let health = "5";
// const score = document.createElement("div");
// score.className = "score";
// const timer = document.createElement("div");
// timer.className = "timer";
// const lives = document.createElement("div");
// lives.className = "lives"
// score.append(scoreTrack);
// timer.append(countdown);
// lives.append(health);
// const stats = document.querySelector("#stats");
// stats.append(score);
// stats.append(timer);
// stats.append(lives);
// };


