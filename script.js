let backImg = document.getElementById("backImg");
let imgBtn = document.getElementById("imgBtn");

let backImages = [
    "background-image: url(./img/01.jpg);",
    "background-image: url(./img/02.jpg);",
    "background-image: url(./img/03.jpg);",
    "background-image: url(./img/04.jpg);",
    "background-image: url(./img/05.jpg);",
    "background-image: url(./img/06.jpg);",
    "background-image: url(./img/07.jpg);",
]

imgBtn.addEventListener("click", changeBackground);

function changeBackground() {
    backImg.style = backImages[Math.floor(Math.random()*backImages.length)];    
}