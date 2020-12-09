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
   initalizeApp();

 function createGameCards (images) {
    const cardImages = [...images, ...images];

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

 function displayStats() {
//  <div id="stats">
//    <div class="score"></div>
//    <div class="timer"></div>
//    <div class="lives"></div>
//  </div>;
let scoreTrack = "0";
let countdown = "2:00";
let health = "5";
const score = document.createElement("div");
score.className = "score";
const timer = document.createElement("div");
timer.className = "timer";
const lives = document.createElement("div");
lives.className = "lives"
score.append(scoreTrack);
timer.append(countdown);
lives.append(health);
const stats = document.querySelector("#stats");
stats.append(score);
stats.append(timer);
stats.append(lives);


 }; 
   function initalizeApp() {
      createGameCards(imagesArray);
      displayStats();
 };
 


