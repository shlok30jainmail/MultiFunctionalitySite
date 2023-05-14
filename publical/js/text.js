const textarea = document.querySelector("textarea"),
fileNmaeinput= document.querySelector(".text-file-name input"),
selectMenu = document.querySelector(".text-save-as select"),
saveBtn = document.querySelector(".text-save-btn");


selectMenu.addEventListener("change", () =>{
    let selectOption = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerHTML = `Save As ${selectOption.split(" ")[0]} File`;
    // console.log(selectOption.split(" ")[0]);
})




saveBtn.addEventListener("click", () =>{
    const blob = new Blob([textarea.value], {type: selectMenu.value});
    const fileUrl = URL.createObjectURL(blob);
    console.log(fileUrl);
    const link = document.createElement("a");
    link.download = fileNmaeinput.value;
    link.href = fileUrl;
    link.click();
})

