<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đếm Giờ</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-200 h-screen flex flex-col justify-center items-center">

<div id="countdownContainer" class="hidden">
    <div class="text-4xl font-bold mb-8" id="countdown"></div>
</div>

<div id="inputContainer" class="flex flex-row">
    <select id="hours" class="mr-2">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <!--Thêm các giờ khác nếu cần-->
    </select>
    <span>Giờ</span>
    <select id="minutes" class="mx-2">
        <option value="0">0</option>
        <option value="15">15</option>
        <option value="30">30</option>
        <option value="45">45</option>
    </select>
    <span>Phút</span>
    <select id="seconds" class="ml-2">
        <option value="0">0</option>
        <option value="15">15</option>
        <option value="30">30</option>
        <option value="45">45</option>
    </select>
    <span>Giây</span>
</div>

<div id="buttonContainer" class="mt-4">
    <button id="startBtn" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Bắt đầu</button>
    <button id="pauseBtn" class="hidden bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Kết Thúc</button>
    <button id="resumeBtn" class="hidden bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Đếm Lại</button>
    <button id="stopBtn" class="hidden bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Thoát</button>
    <button id="muteBtn" class="hidden bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Tắt Âm Thanh</button>
</div>

<audio id="audio" src="/app/modules/audio/sound.mp3" preload="auto"></audio>

<script>
let hoursInput = document.getElementById('hours');
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');
let countdownContainer = document.getElementById('countdownContainer');
let inputContainer = document.getElementById('inputContainer');
let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let resumeBtn = document.getElementById('resumeBtn');
let stopBtn = document.getElementById('stopBtn');
let muteBtn = document.getElementById('muteBtn');
let countdownInterval;
let audio = document.getElementById('audio');
let remainingTime; // Thời gian còn lại sau khi tạm dừng
let soundMuted = false; // Biến để kiểm soát trạng thái âm thanh

// Hiển thị thời gian đếm ngược trên trang HTML
function displayTime(time) {

    const days = Math.floor(time / (3600 * 24));
    const hours = Math.floor((time % (3600 * 24)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    document.getElementById('countdown').textContent = `${days}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Bắt đầu đếm ngược
function startCountdown() {
    let totalSeconds = parseInt(hoursInput.value) * 3600 + parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value);

    if (totalSeconds <= 0) {
        alert("Vui lòng chọn một thời gian hợp lệ.");
        return;
    }

    inputContainer.classList.add('hidden');
    countdownContainer.classList.remove('hidden');
    startBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');
    stopBtn.classList.remove('hidden');
    muteBtn.classList.add('hidden');

    countdownInterval = setInterval(() => {
        totalSeconds--;

        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            if (!soundMuted) playSound();
            inputContainer.classList.remove('hidden');
            countdownContainer.classList.add('hidden');
            startBtn.classList.remove('hidden');
            pauseBtn.classList.add('hidden');
            resumeBtn.classList.add('hidden');
            stopBtn.classList.add('hidden');
            muteBtn.classList.remove('hidden');
        }

        displayTime(totalSeconds);
    }, 1000);
}

// Phát âm thanh khi kết thúc đếm ngược
function playSound() {
    audio.play();
}

// Tạm dừng đếm ngược
function pauseCountdown() {
    clearInterval(countdownInterval);
    remainingTime = parseInt(hoursInput.value) * 3600 + parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value);
    startBtn.classList.add('hidden');
    pauseBtn.classList.add('hidden');
    resumeBtn.classList.remove('hidden');
    stopBtn.classList.remove('hidden');
}

// Tiếp tục đếm ngược
function resumeCountdown() {
    inputContainer.classList.add('hidden');
    countdownContainer.classList.remove('hidden');
    startBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');
    resumeBtn.classList.add('hidden');
    stopBtn.classList.remove('hidden');

    let totalSeconds = remainingTime; // Sử dụng remainingTime thay vì giá trị nhập ban đầu
    let startTime = Date.now(); // Thời gian bắt đầu tính toán lại từ thời điểm tạm dừng

    countdownInterval = setInterval(() => {
        let elapsedTime = Date.now() - startTime;
        let remainingSeconds = Math.max(totalSeconds - Math.floor(elapsedTime / 1000), 0);

        if (remainingSeconds <= 0) {
            clearInterval(countdownInterval);
            if (!soundMuted) playSound();
            inputContainer.classList.remove('hidden');
            countdownContainer.classList.add('hidden');
            startBtn.classList.remove('hidden');
            pauseBtn.classList.add('hidden');
            resumeBtn.classList.add('hidden');
            stopBtn.classList.add('hidden');
            muteBtn.classList.remove('hidden');
        }

        displayTime(remainingSeconds);
    }, 1000);
}

// Kết thúc đếm ngược
function stopCountdown() {
    clearInterval(countdownInterval);
    inputContainer.classList.remove('hidden');
    countdownContainer.classList.add('hidden');
    startBtn.classList.remove('hidden');
    pauseBtn.classList.add('hidden');
    resumeBtn.classList.add('hidden');
    stopBtn.classList.add('hidden');
    muteBtn.classList.remove('hidden');
}

// Tắt âm thanh
function toggleSound() {
    soundMuted = !soundMuted;
    if (soundMuted) {
        audio.pause();
    } else {
        if (remainingTime <= 0) playSound();
    }
}

// Bắt đầu đếm ngược khi nhấn nút
startBtn.addEventListener('click', startCountdown);
pauseBtn.addEventListener('click', pauseCountdown);
resumeBtn.addEventListener('click', resumeCountdown);
stopBtn.addEventListener('click', stopCountdown);
muteBtn.addEventListener('click', toggleSound);
</script>

</body>
</html>
