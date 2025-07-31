var intervalID; 
var time = 0;



document.addEventListener('DOMContentLoaded', () => {
    var userInput = document.getElementById('minutes');
    var timer = document.getElementById('timer');
    var startButton = document.getElementById('start');
    var resetButton = document.getElementById('reset');


    function formatTime(seconds) {
        var mins = Math.floor(seconds / 60);
        var secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function startTimer() {
       clearInterval(intervalID);

       var min = parseInt(userInput.value, 10);
       if (isNaN(min) || min <= 0) {
              alert('Please enter a valid number of minutes greater than 0.');
              return;
         }

        time = min * 60;
        timer.textContent = formatTime(time);
        intervalID = setInterval(() => {
            time--;
            timer.textContent = formatTime(time);
            if (time <= 0) {
                clearInterval(intervalID);
                alert('Time is up!');
            }
        }, 1000);
    }

    function resetTimer() {
        clearInterval(intervalID);
        time = 0;
        timer.textContent = '00:00';
    }

    startButton.addEventListener('click', startTimer);
    resetButton.addEventListener('click', resetTimer);
});