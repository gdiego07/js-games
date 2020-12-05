 const imagesArray = [
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
initalizeApp();


 function createGameCards (images) {
    const cardImages = [...imagesArray, ...imagesArray];

    cardImages.forEach(image => {
       let cardContainer = document.createElement("div");
       cardContainer.id = "card-container";
       let card = document.createElement('div');
       card.className = "card";
       let back = document.createElement('div');
       back.className = "back";
       let front = document.createElement('div');
       front.className = 'front'
       front.style.backgroundImage = (`url:(memory-game/images/${image})`);
       cardContainer.appendChild(card);
       card.appendChild(back);
       card.appendChild(front);
       document.querySelector("#game-container").appendChild(cardContainer);
    }) 
 };
   function initalizeApp() {
      createGameCards(imagesArray);
 };
 


