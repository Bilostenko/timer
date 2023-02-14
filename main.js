const mins = document.querySelector('.timer__value_mins[data-value="mins"]');
const secs = document.querySelector('.timer__value_secs[data-value="secs"]');


window.onload = function () {
  setTimeout(timer, 2000);
};

function timer() {
  var time = 0;
  var minutes = 0;
  var interval = setInterval(function () {
    time++;
    var seconds = time % 60;
    secs.innerHTML = seconds;

    if (seconds == 0) {
      minutes++;
      mins.innerHTML = minutes;
    }

    if (minutes == 40) {
      clearInterval(interval);
    }

  }, 1000);
}

