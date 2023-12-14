let userScore = 0;
let CompScore = 0;
const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        msg.innerText =`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
        userScoreP.innerText = userScore;
    }else{
        CompScore++;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "Red";
        compScorep.innerText = CompScore;
    }

};
const userScoreP  = document.querySelector("#user");
const compScorep = document.querySelector("#comp");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");


const genCompchoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = ()=>{
    msg.innerText = `Game was Draw ${userChoice},${compChoice}`;
    
};
const playGame = (userChoice)=>{
    
    const compChoice = genCompchoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin =true;
        if(userChoice ==="rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice ==="paper"){
            userWin = compChoice === "scissor" ? false : true;

        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }


};
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
      
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});