<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/public/includes/header.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/public/includes/navbar.php');
?>
        <div class="navbar-center">
            <h1 class="font-bold normal-case text-lg sm:text-3xl max-w-[66vw] sm:max-w-full truncate">Đồng hồ Bấm giờ</h1>
        </div>
        <div class="navbar-end">
        </div>
    </header>
<main id="main" data-module="stopwatch" class="w-screen flex">
    <div class="mx-auto text-center min-w-[160px] xxl:min-w-[300px] max-h-[600px] hidden lg:block">
        <div id="adngin-sidebar_left-0"></div>
    </div>
    <div class="w-full max-w-3xl mx-auto p-5">
        <div class="w-full block sm:hidden mx-auto text-center mb-5 min-h-[50px]">
            <div id="adngin-top_leaderboard-0"></div>
        </div>
        <div class="fullscreen-one">
            <div class="text-center tabular-nums" id="stopwatch-container">
                <div class="fullscreen-two text-7xl xs:text-[4.75rem] sm:text-8xl md:text-[5rem]">
                    <div><span class="display">00:00:00:00</span>
                    </div>
                </div>
            </div>
            <div class="mt-6 flex flex-wrap justify-center gap-4">
                <button id="startStopBtn" class="btn btn-primary">Start</button>
                <button id="resetBtn" class="btn btn-secondary">Reset</button>
                <button id="lapBtn" class="btn btn-secondary">Lap</button>
            </div>
        </div>
        <div class=" mt-6" id="storage">
            <div class="prose mx-auto overflow-x-auto max-w-full">
                <h2>Dữ liệu bấm giờ</h2>
                <table data-date-format="DD/MM/YYYY - HH:mm" id="storage-table" class="table table-sm w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Vòng thời gian</th>
                            <th>Thời gian đã trôi qua</th>
                            <th>Thời gian hiện tại</th>
                        </tr>
                    </thead>
                    <tbody id="lapsList">
                        <tr>
                            <td colspan="4" class="text-center">Không có dữ liệu</td>
                        </tr>
                    </tbody>
                </table>
                <div class="mt-6 flex justify-center gap-x-4 w-full">
                    <button id="exportBtn" class="btn btn-outline btn-success grow" style="display:none" onclick="exportToCSV()">Xuất dưới dạng CSV</button>

                </div>
            </div>
        </div>
     <?php 
    require_once($_SERVER['DOCUMENT_ROOT'] . '/public/views/review-stopwatch.php');
     ?>
    </div>
    <div class="mx-auto text-center min-w-[160px] xxl:min-w-[300px] max-h-[600px] hidden lg:block">
        <div id="adngin-sidebar_right-0"></div>
    </div> 
</main>


<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/public/includes/footer.php');
?>
<script src="/app/js/stopwatch.js"></script>