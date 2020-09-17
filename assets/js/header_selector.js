headerInt = 0;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function load() {
    headerInt = getRandomInt(7);

    switch(headerInt) {
        case 0:
            document.getElementById("mainTitle").innerHTML = "Centurions";
            document.getElementById("mainPara").innerHTML = "100 Shots in 100 minutes. Can you do it?";
            document.getElementById("mainButton").innerHTML = "PLAY CENTURIONS";
            document.getElementById("mainButton").href='centurions-standard.html';
        break;
        case 1:
            document.getElementById("mainTitle").innerHTML = "Never Have I Ever";
            document.getElementById("mainPara").innerHTML = "The drunker you get, the easier these questions are to answer!";
            document.getElementById("mainButton").innerHTML = "PLAY NEVER HAVE I EVER";
            document.getElementById("mainButton").href='neverhaveiever.html';
        break;
        case 2:
            document.getElementById("mainTitle").innerHTML = "Kings";
            document.getElementById("mainPara").innerHTML = "Will you be the one to down the kings cup?";
            document.getElementById("mainButton").innerHTML = "PLAY KINGS";
            document.getElementById("mainButton").href='kings.html';
        break;
        case 3:
            document.getElementById("mainTitle").innerHTML = "Reddit Community!";
            document.getElementById("mainPara").innerHTML = "Join our subreddit! Share some of your favourite drinking games and it might get featured on here!";
            document.getElementById("mainButton").innerHTML = "VIEW SUBREDDIT";
            document.getElementById("mainButton").href='https://www.reddit.com/r/DrinkMania/';
        break;
        case 4:
            document.getElementById("mainTitle").innerHTML = "Deck of Cards!";
            document.getElementById("mainPara").innerHTML = "We added a digital deck of cards so you can play your own games without a physical deck!";
            document.getElementById("mainButton").innerHTML = "USE DECK OF CARDS";
            document.getElementById("mainButton").href='deck-of-cards.html';
        break;
        case 5:
            document.getElementById("mainTitle").innerHTML = "Most Likely!";
            document.getElementById("mainPara").innerHTML = "Who's Most Likely to... You decide!";
            document.getElementById("mainButton").innerHTML = "PLAY 'MOST LIKELY'";
            document.getElementById("mainButton").href='most-likely.html';
        break;
        case 6:
            document.getElementById("mainTitle").innerHTML = "Drink or Dare!";
            document.getElementById("mainPara").innerHTML = "Not for the shy!";
            document.getElementById("mainButton").innerHTML = "PLAY 'DRINK OR DARE'";
            document.getElementById("mainButton").href='drinkordare.html';
        break;
    }
}