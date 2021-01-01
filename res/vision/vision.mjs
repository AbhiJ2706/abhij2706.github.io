var menu1 = document.getElementById("item1");
var menu2 = document.getElementById("item2");

const img1 = "vision_1.png"
const img2 = "vision_2.png"

var canvas = document.getElementById("disp")

function disp1(){
    canvas.src = img1;
    menu1.className = "item active"
    menu2.className = "item"
    canvas.style.display = "block"
    console.log("function ran")
}

function disp2(){
    canvas.src = img2;
    menu2.className = "item active"
    menu1.className = "item"
    canvas.style.display = "block"
    console.log("function ran")
}