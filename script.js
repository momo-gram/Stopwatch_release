let startTime = 0;
let intervalId = null;
let running = false;

function startStopwatch() {
    if (!running) {
        startTime = Date.now() - (startTime ? startTime : 0);
        intervalId = setInterval(updateTime, 1000);
        running = true;
        document.getElementById('start').disabled = true;
        document.getElementById('stop').disabled = false;
    }
}

function stopStopwatch() {
    if (running) {
        clearInterval(intervalId);
        running = false;
        document.getElementById('start').disabled = false;
        document.getElementById('stop').disabled = true;
    }
}

function resetStopwatch() {
    if (!running) {
        startTime = 0;
        updateTime();
        document.getElementById('start').disabled = false;
        document.getElementById('stop').disabled = true;
    }
}

function updateTime() {
    const currentTime = Date.now();
    const elapsedTime = new Date(currentTime - startTime);
    const hours = elapsedTime.getUTCHours();
    const minutes = elapsedTime.getUTCMinutes();
    const seconds = elapsedTime.getUTCSeconds();
    document.querySelector('.time').textContent = `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}