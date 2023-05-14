let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

// for making random background function

// let shlok = document.getElementsByClassName(".calculator");
// // let dark = documet.getElementById("dark_mode");
// // console.log(dark)
// dark.onclick = function(){
//    alert("hi");
// }
btn.onclick = function(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    random_bg_color(); // on click bg color should be change
    change(); // on click heading inner html  should be change
    btn.style.color = 'black'; // for styling button on click
    btn.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
 }

 w = document.querySelector(".w");
 r = document.querySelector(".r");
 d= document.querySelector(".d");
 b= document.querySelector(".b");


 cal= document.querySelector(".calculator");
 body = document.querySelector("body"); 
 butoon = document.querySelector("button"); 


 w.addEventListener("click",()=>{
   cal.classList.toggle('r');
   body.classList.toggle('d');
   butoon.classList.toggle('b');
 })