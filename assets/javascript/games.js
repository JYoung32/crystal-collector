// 1- when page loads get random number for 'Points Needed:' ; value 19 - 120;
// 2- when page loads have each crystal get an individual random number; value 1 - 12; keep value hidden from user
// 3- when a crystal is clicked, add the random number to 'Current points"
// 4- if user score is the same as random number; user wins; if score goes above random number, user loses.
// 5- when win/loss, game restarts. on restart, load new random number to achieve and randomize 4 crystal values

$(document).ready(function(){
    //variable to store data onto html page
    let randomNumber, currentNumber, crystalOne, crystalTwo, crystalThree, crystalFour ;
    let wins = 0; 
    let loses = 0;

    intialize = () => {
        randomNumber = randomNum(19,120);
        currentNumber = 0;
        crystalOne = crystalNum();
        crystalTwo = crystalNum();
        crystalThree = crystalNum();
        crystalFour = crystalNum(); 

        $("#currentPoints").html(currentNumber);
        $("#randomNumber").html(randomNumber);
    };

    //make a function to generate random number between 19 - 120
    randomNum = (min, max) => {
        return randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    };

    $("#randomNumber").html(randomNumber);

    //make a function to generate a random number for crystals; value 1-12
    crystalNum = () => {
        return Math.floor(Math.random() * 12) + 1;
    };

    //win function
    win = () => {
        wins++;
        alert("Congratulations! You Win!");
        $("#wins").html("Wins: " + wins);
        intialize();
    };

    //lose function
    lose = () => {
        loses++;
        alert("Maybe next time.");
        $("#loses").html("Loses: " + loses);
        intialize();
    };

    comparePoints = () => {
        if (currentNumber === randomNumber) {
            win();
        } else if (currentNumber > randomNumber) {
            lose();
        };
    };

    //click events for each crystal
    $("#crystalOne").on("click", function(){
        currentNumber += crystalOne; 
        $("#currentPoints").html(currentNumber);
        comparePoints();
    });

    $("#crystalTwo").on("click", function(){
        currentNumber += crystalTwo;
        $("#currentPoints").html(currentNumber);
        comparePoints();
    });

    $("#crystalThree").on("click", function(){
        currentNumber += crystalThree;
        $("#currentPoints").html(currentNumber);
        comparePoints();
    });

    $("#crystalFour").on("click", function(){
        currentNumber += crystalFour;
        $("#currentPoints").html(currentNumber);
        comparePoints();
    });

    intialize();

});