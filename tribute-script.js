let userName = document.getElementById("userName");
let catName = document.getElementById("catName");
let text = document.getElementById("text");
let submitBtn = document.getElementById("submitBtn");

let tribute = document.getElementsByClassName("tribute");

let catImage = document.getElementById("image");



submitBtn.addEventListener("click", addTribute);

function addTribute(e) {
    //Checking if user input is empty
    if (checkIfEmpty() === true)
    return;
    // Creating the tribute section from the user's input
    else {
    let tributeTitle = document.createElement("h1");
    let image = document.createElement("img");
    let tributeText = document.createElement("p");
    tributeTitle.textContent = "A tribute made for "+ catName.value+ " by "+ userName.value;     
    tribute[0].appendChild(tributeTitle);
    image.src = "./img/drawing.jpg";
    tribute[0].appendChild(image);
    tributeText.textContent = text.value;
    tributeText.style.fontSize = 25+"px";
    tributeText.style.color = "#550000";
    tribute[0].appendChild(tributeText);
    e.preventDefault();}  
}

function checkIfEmpty() {
    if (userName.value.length === 0) {
        alert("You forgot to write your name!");
        return true;
    }
    if (catName.value.length === 0) {
        alert("You forgot to write your cat's name!");
        return true;
    }
    if (text.value.length === 0) {
        alert("You forgot to write a text about your cat!");
        return true;
    }
}


image.addEventListener("mouseover", function() {
    image.src = "./img/heart.jpg";    
})

image.addEventListener("mouseout", function() {
    image.src = "./img/05.jpg";
})

