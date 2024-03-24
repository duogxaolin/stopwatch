let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let laps = [];

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStopBtn").textContent = "Start";
        isRunning = false;
    } else {
        document.getElementById("startStopBtn").textContent = "Stop";
        timer = setInterval(updateDisplay, 10);
        isRunning = true;
    }
}

function reset() {
    clearInterval(timer);
    document.getElementById("startStopBtn").textContent = "Start";
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    laps = [];
    updateDisplay();
    updateLaps();
}

function lap() {
    laps.push(`${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`);
    updateLaps();
}

function updateDisplay() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    document.querySelector(".display").textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
}

function updateLaps() {
    const lapsList = document.getElementById("lapsList");
    lapsList.innerHTML = "";
    laps.forEach((lap, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Lap ${index + 1}: ${lap}`;
        lapsList.appendChild(listItem);
    });
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

document.getElementById("startStopBtn").addEventListener("click", startStop);
document.getElementById("resetBtn").addEventListener("click", reset);
document.getElementById("lapBtn").addEventListener("click", lap);