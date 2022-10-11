var randomNumber1 = (Math.floor(Math.random() * 6)) + 1;
var randomImage1Name = "dice" + randomNumber1 + ".png";
var randomImage1Source = "images/" + randomImage1Name;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage1Source);

var randomNumber2 = (Math.floor(Math.random() * 6)) + 1;
var randomImage2Name = "dice" + randomNumber2 + ".png";
var randomImage2Source = "images/" + randomImage2Name;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2Source);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}