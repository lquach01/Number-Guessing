var randomNumber;
function newGame() {
    randomNumber = Math.floor(Math.random() * (500 - 1)) + 1;
    document.getElementById("ans").innerHTML = randomNumber;
}

function compNums() {
    var x = document.getElementById("input-number");
    var givenNum = x.value; 
    var prevGuesses = document.getElementById("previous-guesses").innerHTML;

    if (givenNum < randomNumber) {
        document.getElementById("result").innerHTML = "needs to be higher";
        document.getElementById("previous-guesses").innerHTML = prevGuesses + " " + givenNum;
    } else if (givenNum > randomNumber) {
        document.getElementById("result").innerHTML = "needs to be lower";
        document.getElementById("previous-guesses").innerHTML = prevGuesses + " " + givenNum;
    } else {
        document.getElementById("result").innerHTML = "slay yay";
    }

}

