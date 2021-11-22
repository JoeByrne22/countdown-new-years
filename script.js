const days = document.getElementById('days-number');
const hours = document.getElementById('hours-number');
const minutes = document.getElementById('minutes-number');
const seconds = document.getElementById('seconds-number');

const newYears = "1 Jan 2022";


function everyTime() {
    const newYearsDate = new Date(newYears);
    const tDate = new Date;

    const totalSeconds = (newYearsDate - tDate) / 1000;

    let daysTime = Math.floor(totalSeconds / 3600 / 24)
    let hoursTime = tDate.getHours();
    let minutesTime = tDate.getMinutes();
    let secondsTime = tDate.getSeconds();

    days.innerHTML = daysTime;
    hours.innerHTML = 24 - hoursTime;
    minutes.innerHTML = 60 - minutesTime;
    seconds.innerHTML = 60 - secondsTime;  
}

var myInterval = setInterval(everyTime, 1000);