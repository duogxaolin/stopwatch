<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stopwatch</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card mt-5">
                    <div class="card-body text-center">
                        <div class="display">00:00:00:00</div>
                        <button id="startStopBtn" class="btn btn-primary">Start</button>
                        <button id="resetBtn" class="btn btn-secondary">Reset</button>
                        <button id="lapBtn" class="btn btn-secondary">Lap</button>
                    </div>
                    <ul id="lapsList"></ul>
                    <button id="exportBtn" class="btn btn-secondary" style="display:none" onclick="exportToCSV()">Export to CSV</button>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.4/xlsx.full.min.js"></script>
    <script>
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
                document.getElementById("startStopBtn").textContent = "Start";
                isRunning = false;
            } else {
                document.getElementById("startStopBtn").textContent = "Stop";
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
            document.getElementById("startStopBtn").textContent = "Start";
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
                alert("Start the timer first!"); // Hiển thị cảnh báo nếu bộ đếm chưa được bắt đầu
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
                const listItem = document.createElement("li");
                listItem.innerHTML = `<li class="mt-2">Lap ${index + 1}: ${lap} <button class="btn btn-danger btn-sm"  onclick="deleteLap(${index})">Delete</button></li>`;
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
            const fileName = generateRandomFileName(12) + '.csv'; // Tạo tên file ngẫu nhiên
            const csvContent = "data:text/csv;charset=utf-8," + laps.map((lap, index) => `Lap ${index + 1},${lap}`).join("\n");
            const encodedUri = encodeURI(csvContent);
            const blob = new Blob([csvContent], {
                type: 'text/csv;charset=utf-8;'
            });
            const csvURL = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.setAttribute("href", csvURL);
            link.setAttribute("download", fileName);
            document.body.appendChild(link);
            link.click();
            setTimeout(() => {
                URL.revokeObjectURL(csvURL);
            }, 100);
        }
    </script>
</body>

</html>