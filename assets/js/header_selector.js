headerInt = 0;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function load() {
    headerInt = getRandomInt(3);

    switch(headerInt) {
        case 0:
            document.getElementById("mainTitle").innerHTML = "Centurions";
            document.getElementById("mainPara").innerHTML = "100 Shots in 100 minutes. Can you do it?";
            document.getElementById("mainButton").innerHTML = "PLAY CENTURIONS";
            document.getElementById("mainButton").href='centurions.html';
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
    }
}