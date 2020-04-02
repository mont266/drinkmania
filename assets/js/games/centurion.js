var seconds = 60;
var shots = 0;
var timer;
var c = 60;

function start() {
    if (shots < 100) {
        clearInterval(timer)
        timer = setInterval(( ) =>{
          updateUi()
        }, 1000);
    }
}

function playSound() {
  document.getElementById("audiotag1").play();
}
function pause() {
  clearInterval(timer)
}
function updateUi() {
  document.getElementById("seconds").innerHTML = --c;
  if (c == 0) {
      if (shots == 99) {
        shots = shots + 1;
        pause();
        document.getElementById("seconds").innerHTML = "You've Completed Centurions!";
        document.getElementById("donate").innerHTML = "If you enjoyed this! Please consider buying me a beer!";
      } else {
        playSound();
        shots = shots + 1;
        c = 60;
      }
  }

  function reset() {
      clearInterval(timer);
      seconds = 60;
      shots = 0;
      c = 60;
  }
  document.getElementById("shots").innerHTML = "Shots: " + shots;
}