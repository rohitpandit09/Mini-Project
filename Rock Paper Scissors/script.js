let userChoice ;
let computerChoice;
let n;
let i =1;
let j =1;
let userScore = document.querySelector("#userScore");
let computerScore = document.querySelector("#computerScore");
let choiceArray = ["rock","paper","scissors"];

function randomChoice(){
    n = Math.floor(Math.random()*3);
    return choiceArray[n];
}

let choices = document.querySelectorAll("img");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        
        userChoice = choice.getAttribute("alt");
        computerChoice = randomChoice();

        if((userChoice==="rock"&&computerChoice==="scissors")||(userChoice==="paper"&&computerChoice==="rock")||(userChoice==="scissors"&&computerChoice==="paper")){
            alert(`You won!! user choosed :- ${userChoice} & computer choosed :- ${computerChoice}`);
            userScore.textContent = i++;
        }

        else if(userChoice===computerChoice){
            alert(`Its Draw!! Both choosed same `);
        }

        else{
            alert(`You lost user choosed :- ${userChoice} & computer choosed :- ${computerChoice}`);
            computerScore.textContent = j++;
        }
    });
});

let restart = document.querySelector("#restartBtn");

restart.addEventListener("click",()=>{
    location.reload();
});
