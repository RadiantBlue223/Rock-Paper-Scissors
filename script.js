//todo:  Variables
const rock = 0;
var rock1 = document.getElementById("zRock");
const paper = 1;
var paper1 = document.getElementById("zPaper");
const scissor = 2;
var scissor1 = document.getElementById("zScissor");
var rNumber = Math.floor(Math.random() * 3);

//?  If Statements
if (rNumber == 0) {
    console.log("The Computer Chose Rock");
}
if (rNumber == 1) {
    console.log("The Computer Chose Paper");
}
if (rNumber == 2) {
    console.log("The Computer Chose Scissors");
}

//*  Functions
function shoot() {
    
    if (rNumber == 0) {
        document.getElementById('zHead').innerHTML = "Computer Chose Rock, It's a Tie!"
    }
    if (rNumber == 1) {
        document.getElementById('zHead').innerHTML = "Computer Chose Paper, You Lose!"
    }
    if (rNumber == 2) {
        document.getElementById('zHead').innerHTML = "Computer Chose Scissors, You Win!"
    }


}
function shoot2() {
    
    if (rNumber == 0) {
        document.getElementById('zHead').innerHTML = "Computer Chose Rock, You Win!"
    }
    if (rNumber == 1) {
        document.getElementById('zHead').innerHTML = "Computer Chose Paper, It's a Tie!"
    }
    if (rNumber == 2) {
        document.getElementById('zHead').innerHTML = "Computer Chose Scissors, You Lose!"
    }


}
function shoot3() {
    
    if (rNumber == 0) {
        document.getElementById('zHead').innerHTML = "Computer Chose Rock, You Lose!"
    }
    if (rNumber == 1) {
        document.getElementById('zHead').innerHTML = "Computer Chose Paper, You Win!"
    }
    if (rNumber == 2) {
        document.getElementById('zHead').innerHTML = "Computer Chose Scissors, It's a Tie!"
    }


}

//!  Console Logs
console.log(rNumber);
