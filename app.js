let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScoreCount=document.querySelector("#user-score");
const compScoreCount=document.querySelector("#comp-score");


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id"); 
        playGame(userChoice);
    });
});


const playGame=(userChoice)=>{
    const compChoice=genCompChoice();

    if (userChoice===compChoice){
        drawGame();
    }else {
        let userWin =true;

        if(userChoice ==="rock"){
            userWin = compChoice==="paper"?false:true; 
        } else if (userChoice === "paper"){
            userWin = compChoice==="scissor"?false: true; 
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin, userChoice,compChoice);
    }

};

const drawGame=()=>{
    msg.innerText="Game was Draw, you are as smart as a computer; BY LUCK"; 
    msg.style.backgroundColor="Blue";
};


const genCompChoice =()=>{
    const options=["rock","paper","scissor"];
    const randIdx =Math.floor(Math.random()*3);
    return options[randIdx];

}; 
const showWinner =(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScoreCount.innerText=userScore; 
        msg.innerText=`You win; Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
    }else{
        compScore++; 
        compScoreCount.innerText=compScore; 
        msg.innerText=`You lose; ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};




