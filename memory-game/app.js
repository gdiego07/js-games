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

 function createGameCards (images) {
    const cardImages = [...images, ...images];

    cardImages.forEach(image => {
    console.log(image);
       const cardContainer = document.createElement("div");
       cardContainer.id = "card-container";
       const card = document.createElement('div');
       card.className = "card";
       const back = document.createElement('div');
       back.className = "back";
       const front = document.createElement('div');
       front.className = 'front'
    //    front.style.backgroundImage = (`url:(/images/${image})`);
    //    back.style.backgroundImage = `url:(/images/back-side.png)`;
    console.log(cardContainer);
       cardContainer.append(card);
       card.append(back);
       card.append(front);
       const gameContainer = document.querySelector("#game-container");
       gameContainer.append(cardContainer);
    }) 
 };
   function initalizeApp() {
      createGameCards(imagesArray);
 };
  initalizeApp();
 


