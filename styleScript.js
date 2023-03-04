let allAlignmentOptions = document.querySelectorAll(".align-cell-content span");
let allfontChange = document.querySelectorAll(".bold-italics-underline span")
let allColorOptions = document.querySelectorAll(".cell-color-options span");
let menuBarOptions = document.querySelectorAll(".menu-bar-section div");

let fileOptions = menuBarOptions[0];

let body = document.querySelector("body");

let roboto=document.querySelector("option[value='roboto']");
let arial=document.querySelector("option[value='arial']");
let rockwell=document.querySelector("option[value='rockwell']");
let monospace=document.querySelector("option[value='monospace']");
let Calibri=document.querySelector("option[value='Calibri']");

let select=document.querySelector("#fontStyleSelect");

let bold = allfontChange[0];
let italic = allfontChange[1];
let underline = allfontChange[2];

let leftAlign = allAlignmentOptions[0];
let centerAlign = allAlignmentOptions[1];
let rightAlign = allAlignmentOptions[2];

let bgColorPicker = allColorOptions[0];
let fontColorPicker = allColorOptions[1];

select.addEventListener("change",function()
{
    setFontStyle(select.value,select.value);
})



leftAlign.addEventListener("click", function () {
  if (lastCell) {
    lastCell.style.textAlign = "left";
    let address = lastCell.getAttribute("data-address");
    dataObj[address].align = "left";
  }
});

rightAlign.addEventListener("click", function () {
  if (lastCell) {
    lastCell.style.textAlign = "right";
    let address = lastCell.getAttribute("data-address");
    dataObj[address].align = "right";
  }
});

centerAlign.addEventListener("click", function () {
  if (lastCell) {
    lastCell.style.textAlign = "center";
    let address = lastCell.getAttribute("data-address");
    dataObj[address].align = "center";
  }
});

bgColorPicker.addEventListener("click", function () {
  let colorPickerElement = document.createElement("input");
  colorPickerElement.type = "color";
  body.append(colorPickerElement);
  colorPickerElement.click();

  colorPickerElement.addEventListener("input", function (e) {
    console.log(e.currentTarget.value);
    if (lastCell) {
      lastCell.style.backgroundColor = e.currentTarget.value;
      let address = lastCell.getAttribute("data-address");
      dataObj[address].bgColor = e.currentTarget.value;
    }
  });
});

fontColorPicker.addEventListener("click", function () {
  let colorPickerElement = document.createElement("input");
  colorPickerElement.type = "color";
  body.append(colorPickerElement);
  colorPickerElement.click();

  colorPickerElement.addEventListener("input", function (e) {
    console.log(e.currentTarget.value);
    if (lastCell) {
      lastCell.style.color = e.currentTarget.value;
      let address = lastCell.getAttribute("data-address");
      dataObj[address].color = e.currentTarget.value;
    }
  });
});

fileOptions.addEventListener("click", function () {
  let isOpen = fileOptions.getAttribute("data-open");
  if (isOpen == "true") {
    fileOptions.setAttribute("data-open", "false");
    document.querySelector(".file-drop-down").remove();
  } else {
    fileOptions.setAttribute("data-open", "true");

    let dropDown = document.createElement("div");
    dropDown.innerHTML = "<p>Save</p><p>Clear</p>";

    let allOptions = dropDown.querySelectorAll("p");

    allOptions[0].addEventListener("click", function () {
      localStorage.setItem("sheet", JSON.stringify(dataObj));
    });

    allOptions[1].addEventListener("click", function () {
      localStorage.setItem("sheet", "");
    });

    dropDown.classList.add("file-drop-down");
    fileOptions.append(dropDown);
  }
});

bold.addEventListener("click",function(){
  if (lastCell) {
      
     
      let address = lastCell.getAttribute("data-address");
     
      
      if(dataObj[address].fontweight == "bold")
      {
          
          dataObj[address].fontweight = "normal" 
          lastCell.style.fontWeight ="normal";
      }
      else
      {
          dataObj[address].fontweight = "bold" 
          lastCell.style.fontWeight ="bold";
      }
      
  }   
})
italic.addEventListener("click",function(){
  if (lastCell) {
     


      let address = lastCell.getAttribute("data-address");
     
      
      if(dataObj[address].fontstyle == "italic")
      {
          
          dataObj[address].fontstyle = "normal" 
          lastCell.style.fontStyle ="normal";
      }
      else
      {
          dataObj[address].fontstyle = "italic" 
      lastCell.style.fontStyle ="italic";
      }



      
  }   
})
underline.addEventListener("click",function(){
  if (lastCell) {
      
      let address = lastCell.getAttribute("data-address");
     
      
      if(dataObj[address].textdecoration == "underline")
      {
          
          dataObj[address].textdecoration = "none" 
          lastCell.style.textDecoration ="none";
      }
      else
      {
          dataObj[address].textdecoration = "underline" 
      lastCell.style.textDecoration ="underline";
      }    
      
      // lastCell.style.textDecoration ="underline";
      // let address = lastCell.getAttribute("data-address");
      // dataObj[address].underline = "underline";
  }   
});