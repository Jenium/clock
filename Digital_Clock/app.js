const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampm = document.getElementById('ampm');

const hh = document.getElementById('hh');
const mm = document.getElementById('mm');
const ss = document.getElementById('ss');

const hr_dot = document.querySelector('.hr_dot');
const min_dot = document.querySelector('.min_dot');
const sec_dot = document.querySelector('.sec_dot');

function addZero(t) {
    return t < 10 ? "0" + t : t;
}

setInterval(() => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM";

    if (h > 12) {
        h -= 12;
    }

    h = addZero(h);
    m = addZero(m);
    s = addZero(s);
    
    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m  + "<br><span>minutes</span>";
    seconds.innerHTML = s  + "<br><span>Seconds</span>";
    ampm.innerHTML = am;

    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    hr_dot.style.transform = `rotate(${h * 30}deg)`;
    min_dot.style.transform = `rotate(${m * 6}deg)`;
    sec_dot.style.transform = `rotate(${s * 6}deg)`;

}, 1000);
