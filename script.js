// Changing the background image
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

// Changing the style of the button to change the background

function changeColor() {
    imgBtn.style.backgroundColor = "red";
}

function changeBack() {
    imgBtn.style.backgroundColor = "grey";
}

setInterval(changeColor,1000);
setInterval(changeBack,2000);


// Subscription box
$(document).ready(function(){
    $('.start-btn').click(function(){
      $('.modal-box').toggleClass("show-modal");
      $('.start-btn').toggleClass("show-modal");
    });
    $('.fa-times').click(function(){
      $('.modal-box').toggleClass("show-modal");
      $('.start-btn').toggleClass("show-modal");
    });
  });
