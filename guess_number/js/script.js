//alert("running external JS code!")
//Global variables
//let randomNumber = Math.floor(Math.random() * 99) + 1;

//console.log(randomNumber);
//document.querySelector("h1").style.color = "red";
//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);
//Global variables
let randomNumber;
let attempts = 0;
const maxAttempts = 7;
let wins = 0;
let losses = 0;

initializeGame();

function initializeGame() {
    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log("randomNumber: " + randomNumber);
    attempts = 0;

   //hiding the Reset button
    document.querySelector("#resetBtn").style.display = "none";
  
   //adding focus to textbox
    document.querySelector("#playerGuess").focus();

   // showing guess button
    document.querySelector("#guessBtn").style.display = "inline";
    let playerGuess = document.querySelector("#playerGuess");
    playerGuess.focus(); //adding focus to textbox
    playerGuess.value = ""; //clearing the textbox
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    //clearing previous guesses
    document.querySelector("#guesses").textContent = "";
   
}
function checkGuess (){
    let feedback = document. querySelector("#feedback");
    feedback.textContent = "";
    let guess = document. querySelector ("#playerGuess"). value;
    console.log("Player guess: " + guess);
    if (guess < 1 || guess > 99) {
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return; 
    }
    attempts++;
    console. log("Attempts:" + attempts);
    feedback.style.color = "orange";
    if (guess == randomNumber) {
        feedback.textContent = `You guessed it in ${attempts} attempts!`;
        feedback.style.color = "darkgreen";
        wins++;
        gameOver();
    }else{
        document.querySelector("#guesses").textContent += guess + " ";
        if (attempts == maxAttempts){
            feedback.textContent = `Sorry, you lost! The number was ${randomNumber}.`;
            feedback.style.color = "red";
            losses++;
            gameOver();
        }else if( guess > randomNumber){
            feedback.textContent = `Too high! You have ${maxAttempts - attempts} attempts left.`;
        }else{
            feedback.textContent = `Too low! You have ${maxAttempts - attempts} attempts left.`;
        }
    }
}
function gameOver(){
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none"; //hides Guess button
    resetBtn.style.display = "inline"; //displays Reset button
    //playerGuess.disabled = true;

    updateScoreboard();
}
function updateScoreboard() {
    document.querySelector("#scoreboard").textContent = `Wins: ${wins} | Losses: ${losses}`;
}