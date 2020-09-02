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


function genRandomNumber(lowerLimit, upperLimit) {
    var groupNumber = Math.floor(Math.random() * (upperLimit / 3));
    var elementNumber = Math.floor(Math.random() * 3)
    var randomNumber = groupNumber * 3 + elementNumber
    if (randomNumber >= upperLimit) {
        return upperLimit - 1
    }
    return randomNumber
}

function genrateBaisedRandomNumber(freq, upperLimit) {
    var spreadArr = []
    for (var i = 0; i < freq.length; i++) {
        for (var j = 0; j < freq[i]; j++) {
            spreadArr.push(i)
        }
    }
    // index = Math.floor(Math.random() * freq.length)
    index = genRandomNumber(0, freq.length)
    return spreadArr[index]
}

function drawCard() {
    cardsFreq = [2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    dringksFreq = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]//change the number to either increase or decrease the frequency 
    var randomNumber = genrateBaisedRandomNumber(cardsFreq, cards.length)
    var randomNumber1 = genrateBaisedRandomNumber(dringksFreq, drinks.length)
    console.log(randomNumber1 + 1);
    console.log(randomNumber + 1);
    document.getElementById("drinks").src = 'assets/js/games/cards/drinkordare/' + drinks[randomNumber1] + '.png';
    document.getElementById("wildcard").src = 'assets/js/games/cards/drinkordare/' + cards[randomNumber] + '.png';
}