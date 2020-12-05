 const imagesArray = [
   "images/banana.png",
   "images/carrot.png",
   "images/diiddy-kong.png",
   "images/mario.png",
   "images/match-maker.png",
   "images/matched-set.png",
   "images/star.png",
   "images/super.png",
   "images/the-real-kirby.png",
 ];
   initalizeApp();

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
       front.style.backgroundImage = `url:(/images/${image})`;
       back.style.backgroundImage = `url:(/images/back-side.png)`;
    console.log(cardContainer);
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
 };
 


