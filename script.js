var timer = document.getElementById('timer');
var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');

var userInput = document.getElementById('minutes');
var min = userInput.value;


document.addEventListener('DOMContentLoaded', () => {

    function formatTime(seconds) {
        var mins = Math.floor(seconds / 60);
        var secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function startTimer(){
        var min = parseInt(userInput.value, 10);
        if (isNaN(min) || min <= 0) {
            alert('Please enter a valid number of minutes greater than 0.');
            return;
        }

        var time = min * 60;
        timer.textContent = formatTime(time);
    }



    startButton.addEventListener('click', startTimer);
});