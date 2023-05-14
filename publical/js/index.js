let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".navbar");
let body = document.querySelector("body");


menuBtn.onclick = function(){
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvent = "none";
    navBar.classList.add("active");
    body.style.overflow = "hidden";
}


cancelBtn.onclick = function(){
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvent = "auto";
    navBar.classList.remove("active");
    body.style.overflow = "auto";


}

// sticky navigation menu 
let nav = document.querySelector("nav");
let val;
window.onscroll = function(){
if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
}
else{
    nav.classList.remove("sticky");

}
}

// Side Navigation Menu Closed When Navigation Link clicked
let navLinks = document.querySelectorAll(".menu li a");
for (let index = 0; index < navLinks.length; index++) {
    navLinks[index].addEventListener("click", function(){
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvent = "auto";
        navBar.classList.remove("active");
        body.style.overflow = "auto";
    })
    
}