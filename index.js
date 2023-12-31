let randomNumber1 = Math.floor(Math.random()*((6-1)+1))+1;
let randomDice = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomDice);


let randomNumber2 = Math.floor(Math.random()*((6-1)+1))+1;
let randomDice1 = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomDice1);


if (randomNumber1>randomNumber2) {

    document.querySelector("h1").textContent = "Player 1 Wins";
    
}

else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Draw!";

}

else {
    document.querySelector("h1").textContent = "Player 2 Wins";

}