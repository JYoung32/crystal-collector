// 1- when page loads get random number for 'Points Needed:' ; value 19 - 120;
// 2- when page loads have each crystal get an individual random number; value 1 - 12; keep value hidden from user
// 3- when a crystal is clicked, add the random number to 'Current points"
// 4- if user score is the same as random number; user wins; if score goes above random number, user loses.
// 5- when win/loss, game restarts. on restart, load new random number to achieve and randomize 4 crystal values
$(document).ready(function(){
//variable to store data onto html page
var randomNumber = randomNum(19, 120);
var currentNumber = 0;
var wins = 0;
var loses = 0;
var crystalOne = crystalNum();
var crystalTwo = crystalNum();
var crystalThree = crystalNum();
var crystalFour = crystalNum();

function intialize(){
    randomNumber = randomNum(19,120);
    currentNumber = 0;
    crystalOne = crystalNum();
    crystalTwo = crystalNum();
    crystalThree = crystalNum();
    crystalFour = crystalNum(); 

    $("#currentPoints").html(currentNumber);
    $("#randomNumber").html(randomNumber);

    console.log(randomNumber);
    console.log(crystalOne);
    console.log(crystalTwo);
    console.log(crystalThree);
    console.log(crystalFour);
}

//make a function to generate random number between 19 - 120
function randomNum(min, max){
    return randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(randomNumber);

$("#randomNumber").html(randomNumber);
//make a function to generate a random number for crystals; value 1-12
function crystalNum(){
    return Math.floor(Math.random() * 12) + 1;
}

console.log(crystalOne);
console.log(crystalTwo);
console.log(crystalThree);
console.log(crystalFour);

//click events for each crystal
$("#crystalOne").on("click", function(){
    currentNumber += crystalOne; 
    $("#currentPoints").html(currentNumber);

    if (currentNumber === randomNumber){
        wins++;
        $("#wins").html("Wins: " + wins);
        intialize();
    } else if (currentNumber > randomNumber){
        loses++;
        $("#loses").html("Loses: " + loses);
        intialize();
    };
});

$("#crystalTwo").on("click", function(){
    currentNumber += crystalTwo;
    $("#currentPoints").html(currentNumber);

    if (currentNumber === randomNumber){
        wins++;
        $("#wins").html("Wins: " + wins);
        intialize();
    } else if (currentNumber > randomNumber){
        loses++;
        $("#loses").html("Loses: " + loses);
        intialize();
    };
});

$("#crystalThree").on("click", function(){
    currentNumber += crystalThree;
    $("#currentPoints").html(currentNumber);

    if (currentNumber === randomNumber){
        wins++;
        $("#wins").html("Wins: " + wins);
        intialize();
    } else if (currentNumber > randomNumber){
        loses++;
        $("#loses").html("Loses: " + loses);
        intialize();
    };
});

$("#crystalFour").on("click", function(){
    currentNumber += crystalFour;
    $("#currentPoints").html(currentNumber);

    if (currentNumber === randomNumber){
        wins++;
        $("#wins").html("Wins: " + wins);
        intialize();
    } else if (currentNumber > randomNumber){
        loses++;
        $("#loses").html("Loses: " + loses);
        intialize();
    };
});

//win and loss condition
if (currentNumber === randomNumber){
    wins++;
    randomNum(19, 120);
    crystalNum();
    $("#wins").html("Wins: " + wins);
} else if (currentNumber > randomNumber){
    loses++;
    randomNum(19, 120);
    crystalNum();
    $("#loses").html("Loses: " + loses);
};

});