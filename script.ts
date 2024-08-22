

function clock() {
    let months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
    ];
    let days = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];

    let hrs: HTMLElement = document.getElementById("hours")!;
    let min: HTMLElement = document.getElementById("minutes")!;
    let sec: HTMLElement = document.getElementById("seconds")!;
    let per: HTMLElement = document.getElementById("ampm")!;
    let date: HTMLElement = document.getElementById("ddmmyy")!;
    let day: HTMLElement = document.getElementById("dd")!;

    let time = new Date();

    let h: number | string = time.getHours();
    let m: number | string = time.getMinutes();
    let s: number | string = time.getSeconds();
    let d: number = time.getDay();
    let dd: number | string = time.getDate();
    let mm: number = time.getMonth();
    let yy: number = time.getFullYear();

    let ampm = h >= 12 ? 'PM' : 'AM';

    if (h > 12) {
        h = h - 12;
    } else if (h === 0) {
        h = 12;
    }

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    hrs.innerHTML = h.toString();
    min.innerHTML = m.toString();
    sec.innerHTML = s.toString();
    per.innerHTML = ampm;
    day.innerHTML = days[d];
    date.innerHTML = `${months[mm]} ${dd}, ${yy}`;
}

setInterval(clock, 1000);
