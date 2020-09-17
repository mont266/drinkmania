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
    'spades-king'
];
var kingsCup = 0;
var gameComplete = false;

function drawCard() {
    if (gameComplete == false) {
        var randomNumber = Math.floor(Math.random() * (cards.length - 1));
        cards = cards.filter((e, i) => i !== randomNumber);
        console.log(cards.length);
        console.log(cards[randomNumber]);
        document.getElementById("cards").src = 'assets/js/games/cards/' + cards[randomNumber] + '.png';
    
        switch(cards[randomNumber]) {
            case "clubs-ace":
                document.getElementById("task").innerHTML = "Waterfall!";
            break;
            case "clubs-2":
                document.getElementById("task").innerHTML = "Pick someone to drink."
            break;
            case "clubs-3":
                document.getElementById("task").innerHTML = "Take a drink.";
            break;
            case "clubs-4":
                document.getElementById("task").innerHTML = "Last to touch the floor drinks.";
            break;
            case "clubs-5":
                document.getElementById("task").innerHTML = "All guys drink.";
            break;
            case "clubs-6":
                document.getElementById("task").innerHTML = "All chicks drink.";
            break;
            case "clubs-7":
                document.getElementById("task").innerHTML = "Last to reach for the sky drinks.";
            break;
            case "clubs-8":
                document.getElementById("task").innerHTML = "Pick a mate that will drink anytime you drink.";
            break;
            case "clubs-9":
                document.getElementById("task").innerHTML = "Rhyme";
            break;
            case "clubs-10":
                document.getElementById("task").innerHTML = "Categories";
            break;
            case "clubs-jack":
                document.getElementById("task").innerHTML = "Make A Rule.";
            break;
            case "clubs-queen":
                document.getElementById("task").innerHTML = "You're now the question master.";
            break;
            case "clubs-king":
                kingsCup = kingsCup + 1;
                if (kingsCup < 4) {
                    document.getElementById("task").innerHTML = "KING! Add a dash of your drink to the kings cup!";
                }
                else {
                    gameComplete = true;
                    document.getElementById("task").innerHTML = "GAME OVER! You must down the kings cup!";
                }
            break;
            case "diamonds-ace":
                document.getElementById("task").innerHTML = "Waterfall!";
            break;
            case "diamonds-2":
                document.getElementById("task").innerHTML = "Pick someone to drink."
            break;
            case "diamonds-3":
                document.getElementById("task").innerHTML = "Take a drink.";
            break;
            case "diamonds-4":
                document.getElementById("task").innerHTML = "Last to touch the floor drinks.";
            break;
            case "diamonds-5":
                document.getElementById("task").innerHTML = "All guys drink.";
            break;
            case "diamonds-6":
                document.getElementById("task").innerHTML = "All chicks drink.";
            break;
            case "diamonds-7":
                document.getElementById("task").innerHTML = "Last to reach for the sky drinks.";
            break;
            case "diamonds-8":
                document.getElementById("task").innerHTML = "Pick a mate that will drink anytime you drink.";
            break;
            case "diamonds-9":
                document.getElementById("task").innerHTML = "Rhyme";
            break;
            case "diamonds-10":
                document.getElementById("task").innerHTML = "Categories";
            break;
            case "diamonds-jack":
                document.getElementById("task").innerHTML = "Everyone must drink.";
            break;
            case "diamonds-queen":
                document.getElementById("task").innerHTML = "You're now the question master.";
            break;
            case "diamonds-king":
                kingsCup = kingsCup + 1;
                if (kingsCup < 4) {
                    document.getElementById("task").innerHTML = "KING! Add a dash of your drink to the kings cup!";
                }
                else {
                    gameComplete = true;
                    document.getElementById("task").innerHTML = "GAME OVER! You must down the kings cup!";
                }
            break;
            case "hearts-ace":
                document.getElementById("task").innerHTML = "Waterfall!";
            break;
            case "hearts-2":
                document.getElementById("task").innerHTML = "Pick someone to drink.";
            break;
            case "hearts-3":
                document.getElementById("task").innerHTML = "Take a drink.";
            break;
            case "hearts-4":
                document.getElementById("task").innerHTML = "Last to touch the floor drinks.";
            break;
            case "hearts-5":
                document.getElementById("task").innerHTML = "All guys drink.";
            break;
            case "hearts-6":
                document.getElementById("task").innerHTML = "All chicks drink.";
            break;
            case "hearts-7":
                document.getElementById("task").innerHTML = "Last to reach for the sky drinks.";
            break;
            case "hearts-8":
                document.getElementById("task").innerHTML = "Pick a mate that will drink anytime you drink.";
            break;
            case "hearts-9":
                document.getElementById("task").innerHTML = "Rhyme";
            break;
            case "hearts-10":
                document.getElementById("task").innerHTML = "Categories";
            break;
            case "hearts-jack":
                document.getElementById("task").innerHTML = "Everyone must drink.";
            break;
            case "hearts-queen":
                document.getElementById("task").innerHTML = "You're now the question master.";
            break;
            case "hearts-king":
                kingsCup = kingsCup + 1;
                if (kingsCup < 4) {
                    document.getElementById("task").innerHTML = "KING! Add a dash of your drink to the kings cup!";
                }
                else {
                    gameComplete = true;
                    document.getElementById("task").innerHTML = "GAME OVER! You must down the kings cup!";
                }
            break;
            case "spades-ace":
                document.getElementById("task").innerHTML = "Waterfall!";
            break;
            case "spades-2":
                document.getElementById("task").innerHTML = "Pick someone to drink.";
            break;
            case "spades-3":
                document.getElementById("task").innerHTML = "Take a drink.";
            break;
            case "spades-4":
                document.getElementById("task").innerHTML = "Last to touch the floor drinks.";
            break;
            case "spades-5":
                document.getElementById("task").innerHTML = "All guys drink.";
            break;
            case "spades-6":
                document.getElementById("task").innerHTML = "All chicks drink.";
            break;
            case "spades-7":
                document.getElementById("task").innerHTML = "Last to reach for the sky drinks.";
            break;
            case "spades-8":
                document.getElementById("task").innerHTML = "Pick a mate that will drink anytime you drink.";
            break;
            case "spades-9":
                document.getElementById("task").innerHTML = "Rhyme";
            break;
            case "spades-10":
                document.getElementById("task").innerHTML = "Categories";
            break;
            case "spades-jack":
                document.getElementById("task").innerHTML = "Everyone must drink.";
            break;
            case "spades-queen":
                document.getElementById("task").innerHTML = "You're now the question master.";
            break;
            case "spades-king":
                kingsCup = kingsCup + 1;
                if (kingsCup < 4) {
                    document.getElementById("task").innerHTML = "KING! Add a dash of your drink to the kings cup!";
                }
                else {
                    gameComplete = true;
                    document.getElementById("task").innerHTML = "GAME OVER! You must down the kings cup!";
                }
            break;
        }
        document.getElementById("kingCount").innerHTML = 4 - kingsCup + " Kings Remaining";
    }

}