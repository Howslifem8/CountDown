var intervalID; 
var time = 0;



document.addEventListener('DOMContentLoaded', () => {
    var userInput = document.getElementById('minutes');
    var timer = document.getElementById('timer');
    var startButton = document.getElementById('start');
    var resetButton = document.getElementById('reset');
    const uiAudio = new Audio('sound/ui_click.wav');
    const alarmSound = new Audio('sound/alarm.mp3');
    const timerEndedEvent = new Event ("timerEnded");

    function formatTime(seconds) {
        var mins = Math.floor(seconds / 60);
        var secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function startTimer() {
       clearInterval(intervalID);
         uiAudio.play();
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
                document.dispatchEvent(timerEndedEvent);
            }
        }, 1000);
    }

    function resetTimer() {
        clearInterval(intervalID);
        time = 0;
        timer.textContent = '00:00';
        uiAudio.play();
    }

    document.addEventListener('timerEnded', () => {
        alarmSound.play();
        
        function stopAlarm() {
            alarmSound.pause();
            alarmSound.currentTime = 0;
        }
        resetButton.addEventListener('click', stopAlarm);
    });

    startButton.addEventListener('click', startTimer);
    resetButton.addEventListener('click', resetTimer);
});