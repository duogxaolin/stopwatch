// Map of country codes to city names
var cities = {
    "America/New_York": "New York",
    "America/Chicago": "Chicago",
    "Europe/London": "London",
    "Asia/Tokyo": "Tokyo",
    "Asia/Bangkok": "Bangkok",
    "Asia/Jakarta": "Jakarta",
    "Asia/Hong_Kong": "Hong Kong",
    "Asia/Dubai": "Dubai",
    "Asia/Singapore": "Singapore",
    "Asia/Seoul": "Seoul",
    "Europe/Berlin": "Berlin",
    "Europe/Moscow": "Berlin",
    "America/Argentina/Buenos_Aires": "Argentina",

};
// LẤY TẠI : http://worldtimeapi.org/api/timezone

// Function to map English day names to Vietnamese
function mapDayOfWeek(day) {
    switch (day) {
        case 'Sunday':
            return 'Chủ Nhật';
        case 'Monday':
            return 'Thứ Hai';
        case 'Tuesday':
            return 'Thứ Ba';
        case 'Wednesday':
            return 'Thứ Tư';
        case 'Thursday':
            return 'Thứ Năm';
        case 'Friday':
            return 'Thứ Sáu';
        case 'Saturday':
            return 'Thứ Bảy';
        default:
            return day;
    }
}

function mapDayOfWeekLite(day) {
    switch (day) {
        case 'Sunday':
            return 'CN';
        case 'Monday':
            return 'T2';
        case 'Tuesday':
            return 'T3';
        case 'Wednesday':
            return 'T4';
        case 'Thursday':
            return 'T5';
        case 'Friday':
            return 'T6';
        case 'Saturday':
            return '7';
        default:
            return day;
    }
}

// Function to update time
function updateTime() {
    $('#clocks').empty(); // Clear the clocks div
    for (const country in cities) {
        var now = moment().tz(country);
        var dayOfWeek = mapDayOfWeekLite(now.format('dddd')); // Lấy tên của thứ và ánh xạ sang tiếng Việt
        var dayOfMonth = now.format('D'); // Lấy ngày trong tháng
        var month = now.format('MM');
        var year = now.format('YYYY');
        var timePart = now.format('HH:mm:ss');
        var cityName = cities[country];
        $('#clocks').append(`
        <div class="w-100 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
                        <div class="p-4">
                        <div class="city link link-hover">
                        <div class="city-name font-bold text-lg max-w-[7.5rem] truncate" title="🇻🇳 Hà Nội">${cityName}</div>
                        <div class="city-time text-base opacity-60" data-tz="Asia/Ho_Chi_Minh">${dayOfWeek} - ${timePart}</div>
                    </div>
                        </div>
                    </div>
    
        `);
    }
}

// Function to show large clock with custom location
function updateCustomLocation(timeZone, cityName) {
    NameCity = cityName;
    var userTime = moment().tz(timeZone).format('HH:mm:ss');
    var userDayOfWeek = mapDayOfWeek(moment().tz(timeZone).format('dddd'));
    var userDayOfMonth = moment().tz(timeZone).format('D');
    var userMonth = moment().tz(timeZone).format('MM');
    var userYear = moment().tz(timeZone).format('YYYY');

    $('#large-clock').html(`
    <div class="text-2xl">${userDayOfWeek}, ${userDayOfMonth} tháng ${userMonth} năm ${userYear}</div>
                    <div class="fullscreen-two">
                        <div  class="text-7xl xs:text-[5rem] sm:text-8xl md:text-9xl mt-6 local-time"  >${userTime}</div>
                        <div class=" mt-6 text-center text-2xl font-semibold link link-hover" >${NameCity}</div>
                    </div>
    `);

    // Update time every second for the large clock
    setInterval(function() {
        var now = moment().tz(timeZone);
        var timePart = now.format('HH:mm:ss');
        $('#large-clock .local-time').text(timePart);
    }, 1000);
}
// Update time every second for the small clocks
setInterval(updateTime, 1000);
// Show large clock with default location
updateCustomLocation('Asia/Ho_Chi_Minh', 'Hà Nội');