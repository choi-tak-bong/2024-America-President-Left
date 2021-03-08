
function check_date() {
    let nowDate = new Date();
    
    if (DEATH_DATE > nowDate) {
        let dif = DEATH_DATE - nowDate;
        let difDay = Math.floor(dif / 86400000);
        let difHour = Math.floor(dif % 86400000 / 3600000);
        let difMin = Math.floor(dif % 86400000 % 3600000 / 60000);
        let difSec = Math.floor(dif % 86400000 % 3600000 % 60000 / 1000);
        // let difMilSec = Math.floor(dif % 86400000 % 3600000 % 60000 % 1000);

        let timer_elem = document.querySelector("div#timer a#logo");
        timer_elem.innerHTML = difDay + "일 " + difHour + "시간 " + difMin + "분 " + difSec + "초 남았습니다.";
    }
}

setInterval(check_date, 50);