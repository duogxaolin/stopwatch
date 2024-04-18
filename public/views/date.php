<?php
$title = "Đồng hồ Đếm Ngày";
require_once($_SERVER['DOCUMENT_ROOT'] . '/public/includes/header.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/public/includes/navbar.php');
?>

<main id="main" data-format="j \t\h\á\n\g n \n\ă\m Y" data-module="date" class="w-screen flex">
        <div class="mx-auto text-center min-w-[160px] xxl:min-w-[300px] max-h-[600px] hidden lg:block">
            <div id="adngin-sidebar_left-0"></div>
        </div>
        <div class="w-full max-w-3xl mx-auto p-5">
            <div class="w-full block sm:hidden mx-auto text-center mb-5 min-h-[50px]">
                <div id="adngin-top_leaderboard-0"></div>
            </div>
            <div class="overflow-x-auto mb-6">
                <div class="tabs xl:tabs-lg tabs-bordered flex-nowrap whitespace-nowrap"><a href="#count-days" class="tab tab-active flex-grow">Đếm số ngày</a><a href="#add-date" class="tab flex-grow">Cộng thêm ngày</a><a href="#subtract-date" class="tab flex-grow">Trừ bớt ngày</a></div>
            </div>
            <div id="count-days">
                <div class="form-control w-full"><label class="label"><span id="count-days-start" class="label-text">Ngày bắt đầu</span><span id="set-start-today" class="label-text-alt text-primary cursor-pointer">Hôm nay</span></label><input id="datetime-start" aria-labelledby="count-days-start" type="text" class="input input-bordered w-full" /></div>
                <div class="mt-6 form-control w-full"><label class="label"><span id="count-days-end" class="label-text">Ngày kết thúc</span><span id="set-end-today" class="label-text-alt text-primary cursor-pointer">Hôm nay</span></label><input id="datetime-end" aria-labelledby="count-days-end" type="text" class="input input-bordered w-full" /></div>
                <div class="form-control mt-6"><label class="label cursor-pointer"><span class="label-text">Tính đến cuối ngày dương lịch (+1 ngày)</span><input id="include-end" type="checkbox" class="checkbox checkbox-primary" /></label></div>
                <div class="mt-6"><button id="count-button" class="btn btn-primary w-full">Tính thời lượng</button></div>
                <div id="count-days-result" class="w-full stats stats-vertical shadow hidden mt-10 bg-base-100">
                    <div class="stat place-items-center">
                        <div class="stat-title">Số ngày giữa hai ngày dương lịch</div>
                        <div id="count-days-result-day" class="stat-value"></div>
                    </div>
                    <div class="stat place-items-center">
                        <div class="stat-title">Số tuần giữa hai ngày dương lịch</div>
                        <div id="count-days-result-week" class="stat-value"></div>
                    </div>
                    <div class="stat place-items-center">
                        <div class="stat-title">Số tháng giữa hai ngày dương lịch</div>
                        <div id="count-days-result-month" class="stat-value"></div>
                    </div>
                    <div class="stat place-items-center">
                        <div class="stat-title">Số năm giữa hai ngày dương lịch</div>
                        <div id="count-days-result-year" class="stat-value"></div>
                    </div>
                </div>
            </div>
            <div data-format="dddd, D MMMM [năm] YYYY" class="hidden" id="add-date">
                <div class="form-control w-full"><label class="label"><span id="add-date-start" class="label-text">Ngày bắt đầu</span><span id="set-add-start-today" class="label-text-alt text-primary cursor-pointer is-today">Hôm nay</span></label><input id="add-start" aria-labelledby="add-date-start" type="text" class="input input-bordered w-full" /></div>
                <div class="columns-4 mt-6">
                    <div class="form-control w-full"><label for="add-years" class="label"><span class="label-text">Số năm</span></label><input id="add-years" type="number" min="0" step="1" value="0" class="input input-bordered w-full"></div>
                    <div class="form-control w-full"><label for="add-months" class="label"><span class="label-text">Số tháng</span></label><input id="add-months" type="number" min="0" step="1" value="0" class="input input-bordered w-full"></div>
                    <div class="form-control w-full"><label for="add-weeks" class="label"><span class="label-text">Số tuần</span></label><input id="add-weeks" type="number" min="0" step="1" value="0" class="input input-bordered w-full"></div>
                    <div class="form-control w-full"><label for="add-days" class="label"><span class="label-text">Số ngày</span></label><input id="add-days" type="number" min="0" step="1" value="0" class="input input-bordered w-full"></div>
                </div>
                <div class="mt-6"><button id="add-button" class="btn btn-primary w-full">Tính ngày dương lịch</button></div>
                <div id="add-date-result-container" class="flex p-4 rounded bg-base-100 border border-base-content/10 shadow-lg justify-center mt-10 hidden">
                    <div class="font-semibold text-lg sm:text-2xl" id="add-date-result"></div>
                </div>
            </div>
            <div data-format="dddd, D MMMM [năm] YYYY" class="hidden" id="subtract-date">
                <div class="form-control w-full"><label class="label"><span id="subtract-date-start" class="label-text">Ngày bắt đầu</span><span id="set-subtract-start-today" class="label-text-alt text-primary cursor-pointer is-today">Hôm nay</span></label><input id="subtract-start" aria-labelledby="subtract-date-start" type="text" class="input input-bordered w-full" /></div>
                <div class="columns-4 mt-6">
                    <div class="form-control w-full"><label for="subtract-years" class="label"><span class="label-text">Số năm</span></label><input id="subtract-years" type="number" min="0" step="1" value="0" class="input input-bordered w-full"></div>
                    <div class="form-control w-full"><label for="subtract-months" class="label"><span class="label-text">Số tháng</span></label><input id="subtract-months" type="number" min="0" step="1" value="0" class="input input-bordered w-full"></div>
                    <div class="form-control w-full"><label for="subtract-weeks" class="label"><span class="label-text">Số tuần</span></label><input id="subtract-weeks" type="number" min="0" step="1" value="0" class="input input-bordered w-full"></div>
                    <div class="form-control w-full"><label for="subtract-days" class="label"><span class="label-text">Số ngày</span></label><input id="subtract-days" type="number" min="0" step="1" value="0" class="input input-bordered w-full"></div>
                </div>
                <div class="mt-6"><button id="subtract-button" class="btn btn-primary w-full">Tính ngày dương lịch mới</button></div>
                <div id="subtract-date-result-container" class="flex p-4 rounded bg-base-100 border border-base-content/10 shadow-lg justify-center mt-10 hidden">
                    <div class="font-semibold text-lg sm:text-2xl" id="subtract-date-result"></div>
                </div>
            </div>
            <div class="w-full block mx-auto text-center my-6 min-h-[50px]">
                <div id="adngin-incontent_1-0"></div>
            </div>
            <div class="my-10" id="content">
                <article class="prose max-w-full">
                    <h2>Công cụ tính số ngày giữa các ngày dương lịch là gì?</h2>
                    <p>Công cụ tính ngày của chúng tôi cho phép bạn tính số ngày giữa hai ngày dương lịch.</p>
                    <p>Bạn có thể sử dụng công cụ này để xem số ngày, tuần, tháng và năm giữa hai ngày dương lịch. Bạn cũng có thể dùng máy tính ngày này để cộng thêm hoặc trừ đi một số ngày, tuần, tháng hay năm từ hoặc đến một ngày dương lịch nhất định.</p>
                    <p>Ví dụ: Để trả lời câu hỏi "Hai tuần sau ngày hôm nay là ngày nào?" hoặc "Hai tuần trước ngày hôm nay là ngày nào?", bạn có thể dùng công cụ tính ngày để cộng hoặc trừ đi một số ngày dựa trên một ngày dương. Tuy vậy, công cụ này không phục vụ cho mục đích theo dõi thời gian. Để theo dõi thời gian, bạn có thể sử dụng <a href="/stopwatch/vi/">đồng hồ bấm giờ online</a>, <a href="/vi/">đồng hồ báo thức online</a> hoặc <a href="/timer/vi/">đồng hồ hẹn giờ</a>.</p>
                    <h2>Tôi có thể dùng Công cụ Tính ngày cho mục đích gì?</h2>
                    <p>Sử dụng công cụ tính số ngày giữa các ngày dương lịch, bạn có thể:</p>
                    <ul>
                        <li>Tính được tổng số ngày giữa hai ngày dương lịch.</li>
                        <li>Tính được số ngày kể từ khi bạn được sinh ra hay bất kì ngày quan trọng nào đối với bạn trong quá khứ.</li>
                        <li>Tính được số tuần, tháng hoặc năm giữa hai ngày dương lịch.</li>
                        <li>Trừ đi một số năm, tháng, tuần hoặc ngày tính từ một ngày dương lịch.</li>
                        <li>Cộng thêm một số năm, tháng, tuần hoặc ngày tính vào một ngày dương lịch.</li>
                        <li>Tính được một ngày dương lịch nào đó cách ngày hôm nay một quãng thời gian nhất định. Ví dụ: 30 ngày/hai tuần/30 năm sau kể từ ngày hôm nay là ngày nào theo lịch dương?</li>
                    </ul>
                    <h2>Làm thế nào để sử dụng Công cụ tính Số ngày giữa Các ngày Dương lịch?</h2>
                    <p>Để tính số tuần, tháng hoặc năm giữa hai ngày dương lịch, hãy sử dụng các thẻ <strong>Đếm số ngày</strong>. Để cộng thêm hoặc trừ đi một số ngày, tuần, tháng hay năm dựa trên một ngày dương lịch trong quá khứ, hãy sử dụng thẻ Cộng/Trừ ngày một cách phù hợp.</p>
                    <h3>Đếm số ngày giữa hai ngày dương lịch</h3>
                    <p>Công cụ tính ngày dương lịch rất dễ sử dụng. Để <strong>đếm số ngày giữa các ngày dương lịch</strong>, chỉ cần:</p>
                    <ol>
                        <li>Sử dụng thẻ <strong>Đếm số ngày</strong>.</li>
                        <li>Chọn <strong>Ngày bắt đầu</strong> (ngày, tháng và năm). Nhấn vào nút <strong>Hôm nay</strong> để chọn ngày dương lịch là ngày hôm nay.</li>
                        <li>Chọn <strong>Ngày kết thúc</strong> (ngày, tháng và năm). Nhấn vào nút <strong>Hôm nay</strong> để chọn ngày dương lịch là ngày hôm nay.</li>
                        <li>Nhấn vào nút <strong>Tính thời lượng</strong> để tính thời lượng giữa hai ngày dương lịch đã chọn.</li>
                    </ol>
                    <p>Trong phần tính số ngày, bạn có thể tùy chọn để tính cả ngày kết thúc vào số ngày giữa các ngày dương lịch đã chọn, có nghĩa là kết quả sẽ được cộng thêm một ngày.</p>
                    <h3>Cộng thêm ngày</h3>
                    <p>Để <strong>cộng thêm ngày vào các ngày dương lịch đã chọn</strong>, bạn có thể:</p>
                    <ol>
                        <li>Sử dụng thẻ <strong>Cộng thêm ngày</strong>.</li>
                        <li>Nhập vào các trường <strong>Số năm</strong>, <strong>Số tháng</strong>, <strong>Số tuần</strong>, và <strong>Số ngày</strong>.</li>
                        <li>Nhấp vào <strong>Tính ngày dương lịch mới</strong> để tính khoảng chênh lệch giữa ngày bắt đầu và ngày kết thúc.</li>
                    </ol>
                    <h3>Trừ bớt ngày</h3>
                    <p>Để <strong>trừ bớt ngày từ các ngày dương lịch đã chọn</strong>, bạn có thể:</p>
                    <ol>
                        <li>Sử dụng thẻ <strong>Trừ bớt ngày</strong>.</li>
                        <li>Nhập vào các trường <strong>Số năm</strong>, <strong>Số tháng</strong>, <strong>Số tuần</strong>, và <strong>Số ngày</strong>.</li>
                        <li>Nhấp vào <strong>Tính ngày dương lịch mới</strong> để tính khoảng chênh lệch giữa ngày bắt đầu và ngày kết thúc.</li>
                    </ol>
                    <h2>Vì sao nên sử dụng Máy tính Số ngày giữa Hai ngày Dương lịch?</h2>
                    <p>Mặc dù bạn có thể tính số ngày giữa hai ngày dương lịch theo cách thủ công, công cụ tính ngày dương lịch này giúp bạn thực hiện công việc ấy dễ dàng và nhanh chóng hơn rất nhiều. Nếu bạn tính thời lượng giữa hai ngày dương lịch theo cách thủ công, bạn cần phải xét đến các năm nhuận. Một năm thông thường có 365 ngày, cứ bốn năm một lần lại có một năm nhuận có 366 ngày. Việc sử dụng công cụ tính ngày này sẽ giúp bạn tiết kiệm thời gian vì bạn không cần phải lo nghĩ về sự phức tạp khi tính năm dương lịch hoặc phải tính số ngày chính xác trong các tháng (cụ thể là 28, 29, 30 hoặc 31 ngày tuỳ tháng).</p>
                    <p>Với công cụ đếm ngày này, bạn có thể tính được số ngày giữa hai ngày dương lịch một cách chính xác. Bạn có thể sử dụng công cụ này để:</p>
                    <ul>
                        <li>Tổ chức các sự kiện hoặc cuộc họp.</li>
                        <li>Lên kế hoạch cho các kỳ nghỉ lễ và chuyến đi chơi.</li>
                        <li>Tính ngày cụ thể trong các dịp tặng quà.</li>
                        <li>Tính ngày sinh và tuổi tác.</li>
                    </ul>
                </article>
            </div>
        </div>
        <div class="mx-auto text-center min-w-[160px] xxl:min-w-[300px] max-h-[600px] hidden lg:block">
            <div id="adngin-sidebar_right-0"></div>
        </div>
    </main>
<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/public/includes/footer.php');
?>
<script src="/assets/js/date.js?id=34b778177a771d9a5fb6a2936481f562"></script>
</body>

</html>