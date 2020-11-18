var randomNumber1 = Math.floor(Math.random()*6)+1;          //Generates a random number between 1-6

var randomDice1 =  "images/dice" + randomNumber1 + ".png";   //change image 1

var dice1 = document.querySelectorAll("img")[0];

var changeDice1 = dice1.setAttribute("src",randomDice1);

var randomNumber2 = Math.floor(Math.random()*6)+1;           //Generates a random number between 1-6

var randomDice2 = "images/dice" + randomNumber2 + ".png";     //change image 2

var changeDice2 = document.querySelectorAll("img")[1].setAttribute("src",randomDice2);


// IF player 1 Wins
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";

}
