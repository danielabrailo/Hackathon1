let userName = document.getElementById("userName");
let catName = document.getElementById("catName");
let text = document.getElementById("text");
let submitBtn = document.getElementById("submitBtn");
let cardTitles = document.getElementsByClassName("card-title");

submitBtn.addEventListener("click", addCard);

function addCard(e) {
    let nameInput = document.createTextNode("Human's name is " +userName.value+ " and the cat's name is " + catName.value);
    cardTitles[0].textContent = nameInput.textContent;
    e.preventDefault();
}
