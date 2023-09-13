var randomNumber;
var numGuesses;
const subButton = document.getElementById('submit-button');

function newGame() {
    randomNumber = Math.floor(Math.random() * (500 - 1)) + 1;
    document.getElementById("ans").innerHTML = randomNumber;
    document.getElementById("result").innerHTML = "";
    numGuesses = 0;
    resetPrevGuesses();
}


function resetPrevGuesses(){
    document.getElementById('try1').innerHTML = "";
    document.getElementById("try2").innerHTML = "";
    document.getElementById("try3").innerHTML = "";
    document.getElementById("try4").innerHTML = "";
    document.getElementById("try5").innerHTML = "";
    document.getElementById("try6").innerHTML = "";
    document.getElementById("try7").innerHTML = "";
    
    document.getElementById('try1').className = "attempt";
    document.getElementById("try2").className = "attempt";
    document.getElementById("try3").className = "attempt";
    document.getElementById("try4").className = "attempt";
    document.getElementById("try5").className = "attempt";
    document.getElementById("try6").className = "attempt";
    document.getElementById("try7").className = "attempt";
}


function compNums() {
    var x = document.getElementById("input-number");
    var givenNum = x.value; 
    numGuesses++;

    if (givenNum < randomNumber) {
        // if too low
        document.getElementById("result").innerHTML = "needs to be higher";
        
        changePrevGuesses(givenNum);

    } else if (givenNum > randomNumber) {
        // if too high
        document.getElementById("result").innerHTML = "needs to be lower";

        changePrevGuesses(givenNum);
        

    } else {
        //winner!!

        document.getElementById("result").innerHTML = "slay yay";
        changePrevGuesses(givenNum);
    }

}

function changePrevGuesses(givenNum){
    if (numGuesses == 1){
        document.getElementById("try1").innerHTML = givenNum;

        if (givenNum < randomNumber) {
            document.getElementById('try1').className = 'too-low-attempt';
        } else if (givenNum > randomNumber) {
            document.getElementById('try1').className = 'too-high-attempt';
        } else {
            document.getElementById('try1').className = 'win-attempt';
            alert("winner!!!!!");
        }

    } else if (numGuesses == 2) {
        document.getElementById("try2").innerHTML = givenNum;

        if (givenNum < randomNumber) {
            document.getElementById('try2').className = 'too-low-attempt';
        } else if (givenNum > randomNumber) {
            document.getElementById('try2').className = 'too-high-attempt';
        } else {
            document.getElementById('try2').className = 'win-attempt';
        }

    } else if (numGuesses == 3) {
        document.getElementById("try3").innerHTML = givenNum;

        if (givenNum < randomNumber) {
            document.getElementById('try3').className = 'too-low-attempt';
        } else if (givenNum > randomNumber) {
            document.getElementById('try3').className = 'too-high-attempt';
        } else {
            document.getElementById('try3').className = 'win-attempt';
        }

    } else if (numGuesses == 4) {
        document.getElementById("try4").innerHTML = givenNum;

        if (givenNum < randomNumber) {
            document.getElementById('try4').className = 'too-low-attempt';
        } else if (givenNum > randomNumber) {
            document.getElementById('try4').className = 'too-high-attempt';
        } else {
            document.getElementById('try4').className = 'win-attempt';
        }
    } else if (numGuesses == 5) {
        document.getElementById("try5").innerHTML = givenNum;

        if (givenNum < randomNumber) {
            document.getElementById('try5').className = 'too-low-attempt';
        } else if (givenNum > randomNumber) {
            document.getElementById('try5').className = 'too-high-attempt';
        } else {
            document.getElementById('try5').className = 'win-attempt';
        }

    } else if (numGuesses == 6) {
        document.getElementById("try6").innerHTML = givenNum;

        if (givenNum < randomNumber) {
            document.getElementById('try6').className = 'too-low-attempt';
        } else if (givenNum > randomNumber) {
            document.getElementById('try6').className = 'too-high-attempt';
        } else {
            document.getElementById('try6').className = 'win-attempt';
        }
    } else {
        document.getElementById("try7").innerHTML = givenNum;

        if (givenNum < randomNumber) {
            document.getElementById('try7').className = 'too-low-attempt';
            alert('loserrrrr');
            document.getElementById("ans").innerHTML = 'Answer: ' + randomNumber;
        } else if (givenNum > randomNumber) {
            document.getElementById('try7').className = 'too-high-attempt';
            alert('loserrrrr');
            document.getElementById("ans").innerHTML = 'Answer: ' + randomNumber;

        } else {
            document.getElementById('try7').className = 'win-attempt';
            
        }

    
    }
}

