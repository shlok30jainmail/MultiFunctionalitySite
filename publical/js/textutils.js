const text = document.querySelector('.my-box');


const btn = document.querySelector('.btn-Upper');
btn.addEventListener('click', function(e) {
  console.log('Button clicked!');
//   let newText = text.select();

  newText = text.value;
     newText = newText.toUpperCase();
text.value = newText;
  console.log(newText);
});

const btn1 = document.querySelector('.btn-Lower');
btn1.addEventListener('click', function(e) {
  console.log('Button clicked!');
//   let newText = text.select();

  newText = text.value;
     newText = newText.toLowerCase();
text.value = newText;
  console.log(newText);
});


const btn2 = document.querySelector('.btn-Clear');
btn2.addEventListener('click', function(e) {
  console.log('Button clicked!');
//   let newText = text.select();

  newText = text.value;
     newText = "";
text.value = newText;
  console.log(newText);
});

const btn3 = document.querySelector('.btn-Space');
btn3.addEventListener('click', function(e) {
  console.log('Button clicked!');
//   let newText = text.select();

  newText = text.value;
     newText = newText.split(/[ ]+/).join(" ");
text.value = newText;
  console.log(newText);
});

const btn4 = document.querySelector('.btn-Copy');
btn4.addEventListener('click', function(e) {
  console.log('Button clicked!');
//   let newText = text.select();

  newText = text.value;
    //  newText = newText.replace(/(\r\n|\n|\r)/gm,"")(" ");
     text.select();
     navigator.clipboard.writeText(newText);
     // setText(newText);
     document.getSelection().removeAllRanges();
text.value = newText;
  console.log(newText);
});

const btn5 = document.querySelector('.btn-Line');
btn5.addEventListener('click', function(e) {
  console.log('Button clicked!');
//   let newText = text.select();

  newText = text.value;
    //  newText = newText.replace(/(\r\n|\n|\r)/gm,"")(" ");
    //  text.select();
    //  navigator.clipboard.writeText(newText);
     // setText(newText);
    //  document.getSelection().removeAllRanges();
    newText = newText.replace(/(\r\n|\n|\r)/gm," ");
text.value = newText;
  console.log(newText);
});



// Preview----

const preview = document.querySelector('.preview');
// preview.innerHTML = text.value;
newText = text.value;
// {newText.length > 0 ? newText : "Nothing to preview here " }
if (newText.length > 0) {
    viewText = preview.innerHTML;
    preview.innerHTML = newText;
console.log(preview.innerHTML);

}


const textarea = document.querySelector('textarea');
const element = document.querySelector('.preview');
const element2 = document.querySelector('.wordCounter');
const element3 = document.querySelector('.reading');


// Add an event listener for the 'input' event
textarea.addEventListener('input', function() {
    // Code to run when the text area value is changed
    // console.log('Text area value changed:', textarea.value);
    // Get the element you want to update

// Update the text content without changing the line
element.innerHTML = textarea.value;
newText = text.value;
// textLen = newText.length;
wordCount = newText.split(" ").filter((element)=>{return element.length!==0}).length ;
 count = newText.replace(/\s/g, '').length;// only character count

element2.innerHTML= ` ${wordCount} words , ${newText.length - count} space , ${count} characters`;
element3.innerHTML = ` ${0.008*wordCount} Minutes read`;
  });


// for dark mode

const darkModeToggle = document.querySelector("#dark-mode-toggle");
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const textarea1 = document.querySelector("textarea");



darkModeToggle.addEventListener("click", function() {
  body.classList.toggle("dark-mode");
  nav.classList.toggle("dark-nav");
  textarea1.classList.toggle("dark-textarea");

 darkModeToggle.innerHTML ? "Light Mode" :"Dark Mode";

});

