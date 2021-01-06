var menu1 = document.getElementById("item1");
var menu3 = document.getElementById("item3");
var menu4 = document.getElementById("item4");

const img1 = "tutscreen1.png"
const img3 = "tutscreen3.png"
const img4 = "tutscreen4.png"

var canvas = document.getElementById("disp")

function disp1(){
    canvas.src = img1;
    menu1.className = "item active"
    menu3.className = "item"
    menu4.className = "item"
    canvas.style.display = "block"
    console.log("function ran")
}

function disp3(){
    canvas.src = img3;
    menu3.className = "item active"
    menu1.className = "item"
    menu4.className = "item"
    canvas.style.display = "block"
    console.log("function ran")
}

function disp4(){
    canvas.src = img4;
    menu3.className = "item"
    menu1.className = "item"
    menu4.className = "item active"
    canvas.style.display = "block"
    console.log("function ran")
}