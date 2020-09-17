var cards = Array(30).fill().map((_,i) => `${i+1}-wildcard`),
    drinks = Array(9).fill().map((_,i) => `${i+1}-drinks`).concat(Array(4).fill().map((_,i) => `${i+1}-shots`)),

    shuffle = ([...arr]) => arr.reduceRight((r,_,__,s) => 
      (r.push(s.splice(0|Math.random()*s.length,1)[0]), r),[]),
      
    cardsToDraw = [],
    drinksToDraw = [],
    currentCard = null,
    currentDrink = null,
   
    
      
    drawCard = () => {
      if(!cardsToDraw.length)
        cardsToDraw = shuffle(cards).filter(c => currentCard != c)
      currentCard = cardsToDraw.pop()
      if(!drinksToDraw.length)
        drinksToDraw = shuffle(drinks).filter(d => currentDrink != d)
      currentDrink = drinksToDraw.pop()
    }

for(i = 0; i<50; i++){
  drawCard()
  console.log(currentCard, currentDrink) 
  document.getElementById("drinks").src = 'assets/js/games/cards/drinkordare/' + currentDrink + '.png';
  document.getElementById("wildcard").src = 'assets/js/games/cards/drinkordare/' + currentCard + '.png';
}

/*function drawCard() {
        var randomNumber = Math.floor(Math.random() * (cards.length - 1));
        var randomNumber1 = Math.floor(Math.random() * (drinks.length - 1));
        console.log(cards.length);
        console.log(cards[randomNumber]);
        document.getElementById("drinks").src = 'assets/js/games/cards/drinkordare/' + drinks[randomNumber1] + '.png';
        document.getElementById("wildcard").src = 'assets/js/games/cards/drinkordare/' + cards[randomNumber] + '.png';

        switch(cards[randomNumber]) {
            
        }

        switch (drinks[randomNumber1]) {

        }
}*/