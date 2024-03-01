let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  // rock, paper, scissors
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};  

const drawGame = () => {
  msg.innerText = "Game was draw. Play again";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;

    msg.innerHTML = `You Win!  Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;

    compScorePara.innerText = compScore;
    msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    userWin = true;
    if (userChoice == "rock") {
      if (compChoice === "paper") {
        userWin = false;
      } else {
        userWin = true;
      }
    } else if (userChoice == "paper") {
      if (compChoice === "scissors") {
        userWin = false;
      } else {
        userWin = true;
      }
    } else {
      if (compChoice === "rock") {
        userWin = false;
      } else {
        userWin = true;
      }
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
