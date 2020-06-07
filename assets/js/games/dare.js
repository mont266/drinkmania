var cards = [
    '1-wildcard',
    '2-wildcard',
    '3-wildcard',
    '4-wildcard',
    '5-wildcard',
    '6-wildcard',
    '7-wildcard',
    '8-wildcard',
    '9-wildcard',
    '10-wildcard',
    '11-wildcard',
    '12-wildcard',
    '13-wildcard',
    '14-wildcard',
    '15-wildcard',
    '16-wildcard',
    '17-wildcard',
    '18-wildcard',
    '19-wildcard',
    '20-wildcard',
    '21-wildcard',
    '22-wildcard',
    '23-wildcard',
    '24-wildcard',
    '25-wildcard',
    '26-wildcard',
    '27-wildcard',
    '28-wildcard',
    '29-wildcard',
    '30-wildcard'
];   

var drinks = [
    '1-drink',
    '2-drinks',
    '3-drinks',
    '4-drinks',
    '5-drinks',
    '6-drinks',
    '7-drinks',
    '8-drinks',
    '9-drinks',
    '1-shot',
    '2-shots',
    '3-shots',
    '4-shots'
]

var kingsCup = 0;

function drawCard() {
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
}