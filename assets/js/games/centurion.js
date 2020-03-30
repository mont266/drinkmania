var seconds = 60;
var shots = 0;
var timer;
var c = 60;

function timer() {
    timer = setInterval(myTimer, 1000)
}

function myTimer() {
    document.getElementById("seconds").innerHTML = --c;
    if (c == 0) {
        shots = shots + 1;
        c = 60;
    }
    document.getElementById("shots").innerHTML = shots;
}