const hours = document.getElementById('hours-number');
const minutes = document.getElementById('minutes-number');
const seconds = document.getElementById('seconds-number');

console.log('jpours', hours);


function everyTime() {
    const tDate = new Date;


    let hoursTime = tDate.getHours();
    let minutesTime = tDate.getMinutes();
    let secondsTime = tDate.getSeconds();

    hours.innerHTML = 24 - hoursTime;
    minutes.innerHTML = 60 - minutesTime;
    seconds.innerHTML = 60 - secondsTime;  
}

var myInterval = setInterval(everyTime, 1000);