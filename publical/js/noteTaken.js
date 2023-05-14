//If user adds a note, add it to the localStorage
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
   else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = " ";
//   console.log(notesObj);
 showNotes();
});

// function to show elements from local storage
function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
      }
       else {
        notesObj = JSON.parse(notes);
      }
  let html = "";
  notesObj.forEach(function(element , index){
      html += `
      <div class="noteCards my-2  mx-2 card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Note title ${index + 1}</h5>
        <p class="card-text">${element}</p>
        <button id = "${index}" onclick = "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>

        </div>
    </div>

      
               `
  });
let notesElm = document.getElementById('notes');
if (notesObj.length!=0) {
    notesElm.innerHTML = html;
}
else{
    notesElm.innerHTML = ` nothing to show use "Add a note" and Add your notes `
}
}


// function to delete a note

function deleteNote(index) {
   console.log('I am Deleting') ;
   let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
   else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index,1);

  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();


}

//

let search = document.getElementById("searchText");
search.addEventListener("input", function(){
let inputVal = search.value.toLowerCase();
// console.log("input event fired", inputVal);
let noteCards = document.querySelectorAll('.noteCards');
console.log(noteCards);
Array.from(noteCards).forEach(function(element){
    let cardTxt = element.getElementsByTagName("p")[0].innerHTML;
    if (cardTxt.includes(inputVal)) {
        element.style.display = "block";
    }
    else{
        element.style.display = "none";

    }
})
});

function imp() {

let element = document.getElementById("color");
element.classList.toggle("c");
 color.style.color = "red";

}


// for dark mode

const darkModeToggle = document.querySelector("#dark-mode-toggle");
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const textarea1 = document.querySelector("textarea");
const card = document.querySelectorAll(".card");
// const toggleText = document.querySelector(".toggle-text");





darkModeToggle.addEventListener("click", function() {
  body.classList.toggle("dark-mode");
  nav.classList.toggle("dark-nav");
  textarea1.classList.toggle("dark-textarea");

  // card.classList.toggle("");
  for (let i = 0; i < card.length; i++) {
    card[i].classList.toggle("card-bg");
  }

  // hey = darkModeToggle.innerHTML ;
  // hey = darkModeToggle.innerHTML ? "Light Mode" :"Dark Mode";
  // darkModeToggle.innerHTML =hey;
  // console.log(hey);


  // if (toggleText.textContent === "Dark Mode") {
  //   toggleText.textContent = "Light Mode";
  // } else {
  //   toggleText.textContent = "Dark Mode";
  // }

});