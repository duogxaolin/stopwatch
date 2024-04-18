let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let laps = [];
document.getElementById("resetBtn").addEventListener("click", reset);
document.getElementById("lapBtn").addEventListener("click", lap);
document.getElementById("startStopBtn").addEventListener("click", startStop);
document.getElementById("exportBtn").addEventListener("click", exportToCSV);


/* start Stop */

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStopBtn").textContent = "Bắt đầu";
        isRunning = false;
    } else {
        document.getElementById("startStopBtn").textContent = "Tạm dừng";
        timer = setInterval(updateDisplay, 10);
        isRunning = true;
    }
}
/* start Stop */
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


function reset() {
    clearInterval(timer);
    document.getElementById("startStopBtn").textContent = "Bắt đầu";
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    laps = [];
    document.querySelector(".display").textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
    updateLaps();
}

function lap() {
    if (!isRunning) {
        alert("Vui lòng bắt đầu trước!"); // Hiển thị cảnh báo nếu bộ đếm chưa được bắt đầu
        return;
    }
    laps.push(`${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`);
    updateLaps();
}

function deleteLap(index) {
    laps.splice(index, 1);
    updateLaps();
}

function updateLaps() {

    const lapsList = document.getElementById("lapsList");
    lapsList.innerHTML = "";
    laps.forEach((lap, index) => {
        var now = new Date();

        var options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false // Sử dụng định dạng 24 giờ
        };

        var formatter = new Intl.DateTimeFormat('en-US', options);
        var formattedDate = formatter.format(now);
        const listItem = document.createElement("tr");
        listItem.innerHTML = `
          
            <tr>
            <td>${index + 1}</td>
            <td>Lap: ${index + 1}</td>
            <td>${lap}</td>
            <td><button type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 btn btn-outline btn-error"onclick="deleteLap(${index})">Delete</button></td>
            
            </tr>
            `;
        lapsList.appendChild(listItem);
    });
    const exportBtn = document.getElementById("exportBtn");
    exportBtn.style.display = laps.length ? "inline-block" : "none"; // Hiển thị nút xuất nếu có dữ liệu, ngược lại ẩn nút
}


function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function generateRandomFileName(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomFileName = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomFileName += characters.charAt(randomIndex);
    }
    return randomFileName;
}

function exportToCSV() {
    const fileName = generateRandomFileName(12) + '.csv';
    const csvContent = "data:text/csv;charset=utf-8," + laps.map((lap, index) => `Lap ${index + 1},${lap}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", fileName); // Sử dụng tên file ngẫu nhiên
    document.body.appendChild(link);
    link.click();
}