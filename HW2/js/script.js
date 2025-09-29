document.querySelector("#playBtn").addEventListener("click",spin);
document.querySelector("#resetBtn").addEventListener("click",resetGame)

const symbols = [
  "img/bar.jpeg",
  "img/cherries.jpg",
  "img/seven.jpeg",
];

let credits = 10;

function getRandomSymbol() {
  const index = Math.floor(Math.random() * symbols.length);
  return symbols[index];
}

function setReelImage(reelId, symbol) {
  const reel = document.getElementById(reelId);
  reel.src = symbol;
}

function updateReels(symbol1, symbol2, symbol3) {
  setReelImage("reel1", symbol1);
  setReelImage("reel2", symbol2);
  setReelImage("reel3", symbol3);
}

function showMessage(text) {
  const msg = document.getElementById("message");
  msg.textContent = text;
}

function updateCredits() {
  const creditDisplay = document.getElementById("credits");
  creditDisplay.textContent = "Credits: " + credits;
}

function jackpot(symbol1, symbol2, symbol3) {
  return symbol1 === symbol2 && symbol2 === symbol3;
}

function smallWin(symbol1, symbol2, symbol3) {
  return symbol1 === symbol2 || symbol2 === symbol3 || symbol1 === symbol3;
}

function handleJackpot() {
  credits = credits + 10;
  showMessage("JACKPOT! +10 credits!");
}

function handleSmallWin() {
  credits = credits + 3;
  showMessage("Small win! +3 credits!");
}

function handleLoss() {
    credits = credits - 20;
  showMessage("No win. Try again!");
}

function spin() {
  if (credits <= 0) {
    showMessage("No credits left. Reset the game.");
    return;
  }

  credits = credits - 1;

  const s1 = getRandomSymbol();
  const s2 = getRandomSymbol();
  const s3 = getRandomSymbol();

  updateReels(s1, s2, s3);

  if (jackpot(s1, s2, s3)) {
    handleJackpot();
  } else if (smallWin(s1, s2, s3)) {
    handleSmallWin();
  } else {
    handleLoss();
  }

  updateCredits();
}

function resetGame() {
  credits = 10;
  showMessage("Game reset.");
  updateCredits();
}

window.onload = function() {
  updateCredits();
};