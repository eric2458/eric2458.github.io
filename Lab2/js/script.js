//Event listeners
document.querySelector("#guessBtn").addEventListener("click",guess)
//Global variables
let randomNumber = Math.floor(Math.random()*99)+ 1;
function guess(){
    
    let userGuess = document.querySelector("#guessbox").value;
        //alert(userGuess);
        //document.querySelector("#answers").textContent += userGuess + ", ";
        document.querySelector("#answers").textContent += ` ${userGuess} `;
        
}