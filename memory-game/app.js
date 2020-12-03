 const cardArray = [
   "memory-game/images/back-side.png",
   "memory-game/images/banana.png",
   "memory-game/images/carrot.png",
   "memory-game/images/diiddy-kong.png",
   "memory-game/images/mario.png",
   "memory-game/images/match-maker.png",
   "memory-game/images/matched-set.png",
   "memory-game/images/star.png",
   "memory-game/images/super.png",
   "memory-game/images/the-real-kirby.png",
 ];

 function initalizeApp() {

 };

//  <div id="card-container">
//    <div class="card">
//      <div class="card-back"></div>
//      <div class="card-front"></div>
//    </div>
//  </div>;

 function createCards (imageArray) {
    var totalArray = [...imageArray, ...imageArray];
    const cardContainer = document.createElement('div')
    cardContainer.setAttribute('id', 'card-container');
    const card = document.createElement('div')
    card.classList.add('card');
    const back = document.createElement("div");
    card.classList.add("back");
    const front = document.createElement("div");
    card.classList.add("front");
 }; 