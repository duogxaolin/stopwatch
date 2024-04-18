<?php
$title = "Đếm Ngược Ngày";
require_once($_SERVER['DOCUMENT_ROOT'] . '/public/includes/header.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/public/includes/navbar.php');
?>

<main id="main" data-module="countdown" class="w-screen flex">
        <div class="mx-auto text-center min-w-[160px] xxl:min-w-[300px] max-h-[600px] hidden lg:block">
            <div id="adngin-sidebar_left-0"></div>
        </div>
        <div class="w-full max-w-3xl mx-auto p-5">
            <div class="w-full block sm:hidden mx-auto text-center mb-5 min-h-[50px]">
                <div id="adngin-top_leaderboard-0"></div>
            </div>
            <div id="countdown-set-container">
                <div class="datepicker-container">
                    <h2 id="datetime-heading" class="font-semibold text-xl mb-3">Tạo một đồng hồ đếm ngược</h2>
                    <div class="columns-1"><input id="datetime" aria-labelledby="datetime-heading" type="text" class="input input-bordered w-full" /></div>
                </div>
                <div class="mt-6 grid grid-rows-2 grid-flow-col place-content-between gap-4">
                    <div data-countdown="00:00" data-title="Ngày mới" class="link link-primary link-hover flex items-center gap-2 timer-set"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 md:h-4 md:w-4 hidden sm:inline-flex">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                        </svg><span>Ngày mới</span></div>
                    <div data-countdown="2024-05-12T00:00" data-title="Ngày của Mẹ" class="link link-primary link-hover flex items-center gap-2 timer-set"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 md:h-4 md:w-4 hidden sm:inline-flex">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                        </svg><span>Ngày của Mẹ</span></div>
                    <div data-countdown="2024-06-16T00:00" data-title="Ngày của Cha" class="link link-primary link-hover flex items-center gap-2 timer-set"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 md:h-4 md:w-4 hidden sm:inline-flex">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                        </svg><span>Ngày của Cha</span></div>
                    <div data-countdown="2024-12-25T00:00" data-title="Lễ Giáng Sinh" class="link link-primary link-hover flex items-center gap-2 timer-set"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 md:h-4 md:w-4 hidden sm:inline-flex">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                        </svg><span>Lễ Giáng Sinh</span></div>
                    <div data-countdown="2025-01-01T00:00" data-title="Tết Dương lịch" class="link link-primary link-hover flex items-center gap-2 timer-set"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 md:h-4 md:w-4 hidden sm:inline-flex">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                        </svg><span>Tết Dương lịch</span></div>
                    <div data-countdown="2025-02-14T00:00" data-title="Ngày Valentine" class="link link-primary link-hover flex items-center gap-2 timer-set"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 md:h-4 md:w-4 hidden sm:inline-flex">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                        </svg><span>Ngày Valentine</span></div>
                </div>
                <div class="mt-6">
                    <h2 id="alarm-title-heading" class="font-semibold text-xl mb-3">Tên đồng hồ đếm ngược</h2>
                    <div class="columns-1"><input id="alarm-title" aria-labelledby="alarm-title-heading" type="text" value="Đếm ngược" class="input input-bordered w-full" /></div>
                </div>
            </div>
            <div class="fullscreen hidden" id="countdown-remaining-container">
                <h2 id="remaining-title" class="countdown-title"></h2>
                <div class="countdown-container">
                    <div class="flex flex-col"><span id="days" class="countdown-value">00</span><span class="countdown-heading">Số ngày</span></div>
                    <div class="flex flex-col"><span id="hours" class="countdown-value">00</span><span class="countdown-heading">Số giờ</span></div>
                    <div class="flex flex-col"><span id="minutes" class="countdown-value">00</span><span class="countdown-heading">Số phút</span></div>
                    <div class="flex flex-col"><span id="seconds" class="countdown-value">00</span><span class="countdown-heading">Số giây</span></div>
                </div>
            </div>
            <div class="mt-6 flex flex-wrap justify-center gap-4"><button id="start" class="btn btn-primary grow">Bắt đầu</button><button id="stop" class="btn btn-error hidden grow">Dừng</button></div>
            <div class="w-full block mx-auto text-center my-6 min-h-[50px]">
                <div id="adngin-incontent_1-0"></div>
            </div>
            <div class="mx-auto" id="holiday-container">
                <h2 class="divider text-center text-lg sm:text-2xl font-bold mt-10 mb-8"><span class="mr-1">🗓️</span>Các ngày lễ trong năm 2024</h2>
                <div class="overflow-x-auto my-0">
                    <table class="table table-sm w-full text-sm">
                        <thead>
                            <tr>
                                <th class="text-left">#</th>
                                <th class="text-left">Ngày lễ</th>
                                <th class="text-right">Ngày</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="bg-base-200 text-left">1.</td>
                                <td class="bg-base-200 text-left max-w-[10rem] sm:max-w-full whitespace-pre-line link link-hover link-primary timer-set" data-countdown="2024-01-01T00:00" data-title="Tết Dương lịch">Tết Dương lịch</td>
                                <td class="bg-base-200 text-right">1 tháng 1 năm 2024</td>
                            </tr>
                            <tr>
                                <td class="bg-base-200 text-left">2.</td>
                                <td class="bg-base-200 text-left max-w-[10rem] sm:max-w-full whitespace-pre-line link link-hover link-primary timer-set" data-countdown="2024-02-08T00:00" data-title="Nghỉ Tết Nguyên đán">Nghỉ Tết Nguyên đán</td>
                                <td class="bg-base-200 text-right">8 tháng 2 năm 2024</td>
                            </tr>
                            <tr>
                                <td class="bg-base-200 text-left">3.</td>
                                <td class="bg-base-200 text-left max-w-[10rem] sm:max-w-full whitespace-pre-line link link-hover link-primary timer-set" data-countdown="2024-02-09T00:00" data-title="Đêm Tết Nguyên Đán">Đêm Tết Nguyên Đán</td>
                                <td class="bg-base-200 text-right">9 tháng 2 năm 2024</td>
                            </tr>
                            <tr>
                                <td class="bg-base-200 text-left">4.</td>
                                <td class="bg-base-200 text-left max-w-[10rem] sm:max-w-full whitespace-pre-line link link-hover link-primary timer-set" data-countdown="2024-02-10T00:00" data-title="Tết Nguyên Đán">Tết Nguyên Đán</td>
                                <td class="bg-base-200 text-right">10 tháng 2 năm 2024</td>
                            </tr>
                            <tr>
                                <td class="bg-base-200 text-left">5.</td>
                                <td class="bg-base-200 text-left max-w-[10rem] sm:max-w-full whitespace-pre-line link link-hover link-primary timer-set" data-countdown="2024-02-11T00:00" data-title="Nghỉ Tết Nguyên đán">Nghỉ Tết Nguyên đán</td>
                                <td class="bg-base-200 text-right">11 tháng 2 năm 2024</td>
                            </tr>
                            <tr>
                                <td class="bg-base-200 text-left">6.</td>
                                <td class="bg-base-200 text-left max-w-[10rem] sm:max-w-full whitespace-pre-line link link-hover link-primary timer-set" data-countdown="2024-02-12T00:00" data-title="Nghỉ Tết Nguyên đán">Nghỉ Tết Nguyên đán</td>
                                <td class="bg-base-200 text-right">12 tháng 2 năm 2024</td>
                            </tr>
                            <tr>
                                <td class="bg-base-200 text-left">7.</td>
                                <td class="bg-base-200 text-left max-w-[10rem] sm:max-w-full whitespace-pre-line link link-hover link-primary timer-set" data-countdown="2024-02-13T00:00" data-title="Nghỉ Tết Nguyên đán">Nghỉ Tết Nguyên đán</td>
                                <td class="bg-base-200 text-right">13 tháng 2 năm 2024</td>
                            </tr>
                            <tr>
                                <td class="bg-base-200 text-left">8.</td>
                                <td class="bg-base-200 text-left max-w-[10rem] sm:max-w-full whitespace-pre-line link link-hover link-primary timer-set" data-countdown="2024-02-14T00:00" data-title="Nghỉ Tết Nguyên đán">Nghỉ Tết Nguyên đán</td>
                                <td class="bg-base-200 text-right">14 tháng 2 năm 2024</td>
                            </tr>
                            <tr>
                                <td class="bg-base-200 text-left">9.</td>
                                <td class="bg-base-200 text-left max-w-[10rem] sm:max-w-full whitespace-pre-line link link-hover link-primary timer-set" data-countdown="2024-04-18T00:00" data-title="Giỗ Tổ Hùng Vương">Giỗ Tổ Hùng Vương</td>
                                <td class="bg-base-200 text-right">18 tháng 4 năm 2024</td>
                            </tr>
                            <tr>
                                <td class="bg-base-200 text-left">10.</td>
                                <td class="bg-base-200 text-left max-w-[10rem] sm:max-w-full whitespace-pre-line link link-hover link-primary timer-set" data-countdown="2024-04-30T00:00" data-title="Ngày Thống nhất">Ngày Thống nhất</td>
                                <td class="bg-base-200 text-right">30 tháng 4 năm 2024</td>
                            </tr>
                            <tr>
                                <td class="bg-base-200 text-left">11.</td>
                                <td class="bg-base-200 text-left max-w-[10rem] sm:max-w-full whitespace-pre-line link link-hover link-primary timer-set" data-countdown="2024-05-01T00:00" data-title="Ngày Quốc tế Lao động">Ngày Quốc tế Lao động</td>
                                <td class="bg-base-200 text-right">1 tháng 5 năm 2024</td>
                            </tr>
                            <tr>
                                <td class="bg-base-200 text-left">12.</td>
                                <td class="bg-base-200 text-left max-w-[10rem] sm:max-w-full whitespace-pre-line link link-hover link-primary timer-set" data-countdown="2024-09-02T00:00" data-title="Ngày Quốc khánh Việt Nam">Ngày Quốc khánh Việt Nam</td>
                                <td class="bg-base-200 text-right">2 tháng 9 năm 2024</td>
                            </tr>
                            <tr>
                                <td class="bg-base-200 text-left">13.</td>
                                <td class="bg-base-200 text-left max-w-[10rem] sm:max-w-full whitespace-pre-line link link-hover link-primary timer-set" data-countdown="2024-09-03T00:00" data-title="Ngày nghỉ bù Ngày Quốc khánh Việt Nam">Ngày nghỉ bù Ngày Quốc khánh Việt Nam</td>
                                <td class="bg-base-200 text-right">3 tháng 9 năm 2024</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="divider mb-0"></div>
            </div>
            <div class="my-10" id="content">
                <article class="prose max-w-full">
                    <h2>Đếm ngược là gì?</h2>
                    <p>Đếm ngược là trình tự đếm lùi cho đến thời gian bắt đầu của một sự kiện cụ thể. Khi sử dụng công cụ đếm ngược, bạn có thể theo dõi số ngày trôi qua cho đến khi một sự kiện quan trọng như ngày sinh nhật, kì nghỉ lễ, hoặc năm mới bắt đầu.</p>
                    <h2>Đồng hồ Hẹn giờ Đếm ngược theo Ngày là gì?</h2>
                    <p><a href="/timer">Đồng hồ hẹn giờ</a> đếm ngược theo ngày là một công cụ trực tuyến miễn phí và dễ sử dụng. Công cụ này cho phép bạn tạo một đồng hồ hẹn giờ đếm ngược có khả năng hiển thị số thời gian còn lại tính đến một ngày nào đó trong tương lai. Nó hoạt động tương tự như một <a href="/date">công cụ tính ngày</a>, cho phép bạn xem số ngày/giờ còn lại cho đến thời điểm diễn ra một sự kiện nhất định nào đó hay số ngày còn lại tính đến thời điểm ấy.</p>
                    <h2>Làm thế nào để sử dụng Đồng hồ Hẹn giờ Đếm ngược?</h2>
                    <p>Để thiết lập một lịch đếm ngược một cách dễ dàng và nhanh chóng, bạn có thể:</p>
                    <ol>
                        <li>Đặt ngày và giờ, hoặc chọn một sự kiện định sẵn từ danh sách mặc định, ví dụ Ngày đầu năm mới.</li>
                        <li>Đặt tên cho đồng hồ đếm ngược của bạn.</li>
                        <li>Nhấn vào nút <strong>Bắt đầu.</strong></li>
                        <li>Để dừng đồng hồ đếm ngược, nhấn nút <strong>Dừng.</strong></li>
                    </ol>
                    <p>Sau khi thiết lập xong đồng hồ đếm ngược, bạn có thể xem số ngày, giờ, phút và giây cho đến thời điểm sự kiện đã chọn bắt đầu. Khi thời gian còn lại trôi qua hết và đến đúng thời điểm ngày giờ của sự kiện đã chọn, một âm thanh <strong>báo động</strong> sẽ phát ra để thông báo cho bạn biết.</p>
                    <p>Cuối cùng, khi bạn cập nhật ngày đếm ngược, liên kết URL dùng để truy cập đồng hồ đếm ngược của bạn cũng sẽ được cập nhật. Bạn có thể chia sẻ liên kết này với bạn bè và gia đình, hoặc sử dụng nó để tiếp tục theo dõi thời gian đếm ngược đến các sự kiện sắp tới theo lựa chọn của bạn.</p>
                    <h2>Làm thế nào để thêm một đồng hồ đếm ngược ngày vào trang web của tôi?</h2>
                    <p>Bạn có thể thêm một <a href="/world">đồng hồ</a> đếm ngược vào trang web theo các bước sau đây:</p>
                    <ul>
                        <li>Nhấn vào biểu tượng "&lt;/>" ở góc trái của trang này.</li>
                        <li>Chọn năm, tháng, ngày, giờ, phút và giây.</li>
                        <li>Chọn một múi giờ từ danh sách các múi giờ trên thế giới.</li>
                        <li>Sao chép mã nhúng và tích hợp vào trang web của bạn.</li>
                    </ul>
                    <h2>Vì sao bạn nên sử dụng Đồng hồ Đếm ngược?</h2>
                    <p>Đồng hồ đếm ngược là một công cụ tuyệt vời đối với bất cứ nhà sáng tạo nội dung nào muốn cho người theo dõi của họ quan sát quá trình đếm ngược đến thời điểm diễn ra một sự kiện. Thời gian hiển thị có thể mang đến một cảm giác hồi hộp khi chờ đợi một sự kiện đặc biệt sắp diễn ra. Thời gian chờ đợi ấy cũng góp phần hình thành sự quan tâm gắn kết của khán giả, khiến họ cảm nhận được tầm quan trọng của sự kiện sắp diễn ra trong sự mong đợi của họ.</p>
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
<script src="/assets/js/countdown.js?id=34b778177a771d9a5fb6a2936481f562"></script>
</body>

</html>