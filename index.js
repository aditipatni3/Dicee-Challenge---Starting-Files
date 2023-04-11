// alert("Welcome to the dice game");


// to get random number
var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=(Math.floor(randomNumber1))+1;


// to get random dice image
var randomeDiceImage= "images/dice"+randomNumber1+".png";

// targeting img
var img1=document.querySelectorAll("img")[0];

// setting img to randomNumber
img1.setAttribute("src",randomeDiceImage );






// for player 2

var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=(Math.floor(randomNumber2)+1);

var randomImg2="images/dice"+randomNumber2+".png";


var img2=document.querySelectorAll("img")[1];


img2.setAttribute("src",randomImg2 );


// -------------------------------------------------------------
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player1 wins";

}
else if(randomNumber1<randomNumber2){

    document.querySelector("h1").innerHTML="Player2 wins🚩";
}
else{
    document.querySelector("h1").innerHTML="Tie";
}