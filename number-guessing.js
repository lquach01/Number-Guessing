const randomNumber = Math.floor(Math.random() * (500 - 1)) + 1;
document.getElementById("ans").innerHTML = randomNumber;


const givenNum = document.getElementById("input-number");


givenNum.addEventListener('submit', compNums(givenNum));


function compNums(num) {
    if (num < randomNumber) {
        document.getElementById("result").innerHTML = "needs to be higher";
    } else if (num > randomNumber) {
        document.getElementById("result").innerHTML = "needs to be lower";
    } else {
        document.getElementById("result").innerHTML = "slay yay";
    }
}