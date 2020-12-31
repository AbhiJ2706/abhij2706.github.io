var menu1 = document.getElementById("item1");
var menu2 = document.getElementById("item2");
var menu3 = document.getElementById("item3");

const img1 = "paint_server_1.png"
const img2 = "paint_server_2.png"
const img3 = "paint_server_3.png"

var canvas = document.getElementById("disp")

function disp1(){
    canvas.src = img1;
    menu1.className = "item active"
    menu2.className = "item"
    menu3.className = "item"
    canvas.style.display = "block"
    console.log("function ran")
}

function disp2(){
    canvas.src = img2;
    menu2.className = "item active"
    menu1.className = "item"
    menu3.className = "item"
    canvas.style.display = "block"
    console.log("function ran")
}

function disp3(){
    canvas.src = img3;
    menu3.className = "item active"
    menu2.className = "item"
    menu1.className = "item"
    canvas.style.display = "block"
    console.log("function ran")
}