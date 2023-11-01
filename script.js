let startTime = 0;
let intervalId = null; // インターバル ID を格納する変数を宣言

function startStopwatch() {
    if (!running) {
        startTime = Date.now() - (running ? startTime : 0);
        intervalId = setInterval(updateTime, 10);
        running = true;
        document.getElementById('start').disabled = true;
        document.getElementById('stop').disabled = false;
        document.getElementById('reset').disabled = true;
    }
}

function stopStopwatch() {
    if (running) {
        clearInterval(intervalId); // 正しいインターバル ID を使用してクリア
        running = false;
        document.getElementById('start').disabled = false;
        document.getElementById('stop').disabled = true;
        document.getElementById('reset').disabled = false;
    }
}

function resetStopwatch() {
    if (!running) {
        clearInterval(intervalId); // インターバルをクリア
        startTime = 0;
        updateTime();
        document.getElementById('start').disabled = false;
        document.getElementById('stop').disabled = true;
        document.getElementById('reset').disabled = true;
    }
}

function updateTime() {
    const currentTime = Date.now();
    const elapsedTime = new Date(currentTime - startTime);
    const minutes = elapsedTime.getUTCMinutes();
    const seconds = elapsedTime.getUTCSeconds();
    const milliseconds = Math.floor(elapsedTime.getUTCMilliseconds() / 10);
    const hours = Math.floor(minutes / 60);
    document.querySelector('.time').textContent = `${String(hours).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}
