<?php
$title= "Đồng hồ Thế Giới";
require_once($_SERVER['DOCUMENT_ROOT'] . '/public/includes/header.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/public/includes/navbar.php');
?>
<main id="main" data-module="world" class="w-screen flex">
    <div class="mx-auto text-center min-w-[160px] xxl:min-w-[300px] max-h-[600px] hidden lg:block">
        <div id="adngin-sidebar_left-0"></div>
    </div>
    <div class="w-full max-w-3xl mx-auto p-5">
        <div class="w-full block sm:hidden mx-auto text-center mb-5 min-h-[50px]">
            <div id="adngin-top_leaderboard-0"></div>
        </div>
        <div data-tz="browser" class="text-center tabular-nums fullscreen" id="clock-container">
            <div id="large-clock">
                <div data-format="dddd, D MMMM [năm] YYYY" class="text-2xl" id="date">chủ nhật, 7 tháng 4 năm 2024</div>
                <div class="fullscreen-two">
                    <div data-format="HH:mm:ss" data-format-original="HH:mm:ss" class="text-7xl xs:text-[5rem] sm:text-8xl md:text-9xl mt-6" id="clock">00:00:00</div>
                    <div class="hidden mt-6 text-center text-2xl font-semibold link link-hover" id="city-container"></div>
                </div>
            </div>
        </div>
        <div class="w-full block mx-auto text-center my-6 min-h-[50px]">
            <div id="adngin-incontent_1-0"></div>
        </div>
        <div data-format="ddd - HH:mm" class="mx-auto" id="world-clock">
            <h2 class="divider text-center text-2xl font-bold mt-10 mb-8"><span class="mr-1">🌎</span>Danh sách các Thành phố</h2>
            <div class="max-w-full mx-auto my-0 justify-items-center">

                <div id="clocks" class="flex flex-wrap justify-items-center">
                </div>

            </div>
            <div class="divider mb-0"></div>
        </div>
        <?php
        require_once($_SERVER['DOCUMENT_ROOT'] . '/public/views/review-world.php');
        ?>
</main>


<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/public/includes/footer.php');
?>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.33/moment-timezone-with-data.min.js"></script>
<script src="/app/js/world.js?v=2024"></script>