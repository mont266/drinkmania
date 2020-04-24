var cards = [
    'clubs-ace',
    'clubs-2',
    'clubs-3',
    'clubs-4',
    'clubs-5',
    'clubs-6',
    'clubs-7',
    'clubs-8',
    'clubs-9',
    'clubs-10',
    'clubs-jack',
    'clubs-queen',
    'clubs-king',
    'diamonds-ace',
    'diamonds-2',
    'diamonds-3',
    'diamonds-4',
    'diamonds-5',
    'diamonds-6',
    'diamonds-7',
    'diamonds-8',
    'diamonds-9',
    'diamonds-10',
    'diamonds-jack',
    'diamonds-queen',
    'diamonds-king',
    'hearts-ace',
    'hearts-2',
    'hearts-3',
    'hearts-4',
    'hearts-5',
    'hearts-6',
    'hearts-7',
    'hearts-8',
    'hearts-9',
    'hearts-10',
    'hearts-jack',
    'hearts-queen',
    'hearts-king',
    'spades-ace',
    'spades-2',
    'spades-3',
    'spades-4',
    'spades-5',
    'spades-6',
    'spades-7',
    'spades-8',
    'spades-9',
    'spades-10',
    'spades-jack',
    'spades-queen',
    'spades-king',
    'joker-black',
    'joker-red'
];
var kingsCup = 0;

function drawCard() {
    if (cards.length > 0) {
        var randomNumber = Math.floor(Math.random() * (cards.length - 1));
        cards = cards.filter((e, i) => i !== randomNumber);
        console.log(cards.length);
        console.log(cards[randomNumber]);
        document.getElementById("cards").src = 'assets/js/games/cards/' + cards[randomNumber] + '.png';
    
        switch(cards[randomNumber]) {
            case "clubs-ace":
                document.getElementById("task").innerHTML = "Ace of Clubs.";
            break;
            case "clubs-2":
                document.getElementById("task").innerHTML = "2 of Clubs."
            break;
            case "clubs-3":
                document.getElementById("task").innerHTML = "3 of Clubs.";
            break;
            case "clubs-4":
                document.getElementById("task").innerHTML = "4 of Clubs.";
            break;
            case "clubs-5":
                document.getElementById("task").innerHTML = "5 of Clubs.";
            break;
            case "clubs-6":
                document.getElementById("task").innerHTML = "6 of Clubs.";
            break;
            case "clubs-7":
                document.getElementById("task").innerHTML = "7 of Clubs.";
            break;
            case "clubs-8":
                document.getElementById("task").innerHTML = "8 of Clubs.";
            break;
            case "clubs-9":
                document.getElementById("task").innerHTML = "9 of Clubs.";
            break;
            case "clubs-10":
                document.getElementById("task").innerHTML = "10 of Clubs.";
            break;
            case "clubs-jack":
                document.getElementById("task").innerHTML = "Jack of Clubs.";
            break;
            case "clubs-queen":
                document.getElementById("task").innerHTML = "Queen of Clubs.";
            break;
            case "clubs-king":
                    document.getElementById("task").innerHTML = "King of Clubs.";
            break;
            case "diamonds-ace":
                document.getElementById("task").innerHTML = "Ace of Diamonds.";
            break;
            case "diamonds-2":
                document.getElementById("task").innerHTML = "2 of Diamonds."
            break;
            case "diamonds-3":
                document.getElementById("task").innerHTML = "3 of Diamonds.";
            break;
            case "diamonds-4":
                document.getElementById("task").innerHTML = "4 of Diamonds.";
            break;
            case "diamonds-5":
                document.getElementById("task").innerHTML = "5 of Diamonds.";
            break;
            case "diamonds-6":
                document.getElementById("task").innerHTML = "6 of Diamonds.";
            break;
            case "diamonds-7":
                document.getElementById("task").innerHTML = "7 of Diamonds.";
            break;
            case "diamonds-8":
                document.getElementById("task").innerHTML = "8 of Diamonds.";
            break;
            case "diamonds-9":
                document.getElementById("task").innerHTML = "9 of Diamonds.";
            break;
            case "diamonds-10":
                document.getElementById("task").innerHTML = "10 of Diamonds.";
            break;
            case "diamonds-jack":
                document.getElementById("task").innerHTML = "Jack of Diamonds.";
            break;
            case "diamonds-queen":
                document.getElementById("task").innerHTML = "Queen of Diamonds.";
            break;
            case "diamonds-king":
                document.getElementById("task").innerHTML = "King of Diamonds.";
            break;
            case "hearts-ace":
                document.getElementById("task").innerHTML = "Ace of Hearts.";
            break;
            case "hearts-2":
                document.getElementById("task").innerHTML = "2 of Hearts.";
            break;
            case "hearts-3":
                document.getElementById("task").innerHTML = "3 of Hearts.";
            break;
            case "hearts-4":
                document.getElementById("task").innerHTML = "4 of Hearts.";
            break;
            case "hearts-5":
                document.getElementById("task").innerHTML = "5 of Hearts.";
            break;
            case "hearts-6":
                document.getElementById("task").innerHTML = "6 of Hearts.";
            break;
            case "hearts-7":
                document.getElementById("task").innerHTML = "7 of Hearts.";
            break;
            case "hearts-8":
                document.getElementById("task").innerHTML = "8 of Hearts.";
            break;
            case "hearts-9":
                document.getElementById("task").innerHTML = "9 of Hearts.";
            break;
            case "hearts-10":
                document.getElementById("task").innerHTML = "10 of Hearts.";
            break;
            case "hearts-jack":
                document.getElementById("task").innerHTML = "Jack of Hearts.";
            break;
            case "hearts-queen":
                document.getElementById("task").innerHTML = "Queen of Hearts.";
            break;
            case "hearts-king":
                document.getElementById("task").innerHTML = "King of Hearts.";
            break;
            case "spades-ace":
                document.getElementById("task").innerHTML = "Ace of Spades.";
            break;
            case "spades-2":
                document.getElementById("task").innerHTML = "2 of Spades.";
            break;
            case "spades-3":
                document.getElementById("task").innerHTML = "3 of Spades.";
            break;
            case "spades-4":
                document.getElementById("task").innerHTML = "4 of Spades.";
            break;
            case "spades-5":
                document.getElementById("task").innerHTML = "5 of Spades.";
            break;
            case "spades-6":
                document.getElementById("task").innerHTML = "6 of Spades.";
            break;
            case "spades-7":
                document.getElementById("task").innerHTML = "7 of Spades.";
            break;
            case "spades-8":
                document.getElementById("task").innerHTML = "8 of Spades.";
            break;
            case "spades-9":
                document.getElementById("task").innerHTML = "9 of Spades.";
            break;
            case "spades-10":
                document.getElementById("task").innerHTML = "10 of Spades.";
            break;
            case "spades-jack":
                document.getElementById("task").innerHTML = "Jack of Spades.";
            break;
            case "spades-queen":
                document.getElementById("task").innerHTML = "Queen of Spades.";
            break;
            case "spades-king":
                document.getElementById("task").innerHTML = "King of Spades.";
            break;
            case "joker-black":
                document.getElementById("task").innerHTML = "Joker.";
            break;
            case "joker-red":
                document.getElementById("task").innerHTML = "Joker.";
            break;
        }
        document.getElementById("kingCount").innerHTML = 4 - kingsCup + " Kings Remaining";
    }

}