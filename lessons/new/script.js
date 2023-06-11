window.addEventListener("DOMContentLoaded", (event) => {
  
});


// Первое задание
function redClick(){
let redClickTarget = document.querySelector("body");
redClickTarget.style.backgroundColor = 'red';
}
function yellowClick(){
    let yellowClickTarget = document.querySelector("body");
    yellowClickTarget.style.backgroundColor = 'yellow';
}



//Третье задание не полностью
button_Red = document.querySelector("button#btn-RED");
button_yellow = document.querySelector("button#btn-YELLOW");
button_green = document.querySelector("button#btn-GREEN");
red = document.querySelector(".redLight");
yellow = document.querySelector(".yellowLight");
green = document.querySelector(".greenLight");
function redClick(){
    red.style.background = "rgb(165, 0, 0)";
}
function yellowClick(){
    yellow.style.background = "rgb(230, 230, 0)";
}
function greenClick(){
    green.style.background = "rgb(0, 222, 0)";
}
button_Red.addEventListener("click",redClick);
button_yellow.addEventListener("click",yellowClick);
button_green.addEventListener("click",greenClick);