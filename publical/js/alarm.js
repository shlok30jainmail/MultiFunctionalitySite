let select_menu = document.querySelectorAll("select");
let column = document.getElementsByClassName('column');
let current = document.querySelector('h1');
let setAlarmBtn = document.querySelector('button');
let content = document.querySelector('.content');

let alarmTime, isAlarm = false,
ringtone = new Audio("ringtone.mp3");

// let option = column.innerHtml;
// console.log(column);   
for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" +i : i ;
 option = `<option value= ${i}>${i}</option>` ;
select_menu[0].firstElementChild.insertAdjacentHTML('afterend', option);

// console.log(option);   
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" +i : i ;
    option = `<option value= ${i}>${i}</option>` ;

   select_menu[1].firstElementChild.insertAdjacentHTML('afterend', option);
   
   // console.log(option);   
   }

   for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM"  : "PM" ;
 option = `<option value= ${ampm }>${ampm}</option>` ;
select_menu[0].firstElementChild.insertAdjacentHTML('afterend', option);

// console.log(option);   
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
      
    if (h >= 12){

        h = h- 12;
            ampm = "PM";

    }
    h = h == 0 ? h = 12 : h;
    // adding 0 before h, m , s , if this value is less than 10
    h = h < 10 ? "0" +h : h ;
    m = m < 10 ? "0" +m : m ;
    s = s < 10 ? "0" +s : s ;

//    let p = console.log(`${h}:${m}:${s}`);
current.innerText = `${h}:${m}:${s}  ${ampm}`;
// current.innerHTML = `<h1>${h}:${m}:${s}  ${ampm}</h1>`;
if (alarmTime == `${h}:${m} ${ampm}`) {
    // console.log("alarm is ring");
    ringtone.play();
    ringtone.loop = true;
    
}

}, 1000);


function setAlarm(){
    if (isAlarm) {
        alarmTime = "";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerText = "Set Alarm";
        return isAlarm = false;

        
    }
let time = `${select_menu[0].value}:${select_menu[1].value} ${select_menu[2].value}`;
content.classList.add("disable");
isAlarm = true;
console.log(time);
setAlarmBtn.innerText = "Clear Alarm";
alarmTime = time;
}
setAlarmBtn.addEventListener('click',setAlarm);




