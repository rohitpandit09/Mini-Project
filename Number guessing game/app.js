let screen = document.querySelector("#screen");
let box = document.querySelector("#box");
let enterBtn = document.querySelector("#enter");
let resetBtn = document.querySelector("#reset");
let attempts = 0;
let computerGuess=  Math.floor(Math.random()*100);

console.log(computerGuess);


enterBtn.addEventListener("click",()=>{
    let userGuess = Number(document.querySelector("#inputNumber").value);
    if(userGuess===computerGuess){
        screen.textContent = `You Win and took ${attempts} attempts`;
        // location.reload();  
        
    }

    else if(userGuess>computerGuess){
        // alert(`Please guess number less than ${userGuess}`);
        screen.textContent = `Please guess number less than ${userGuess}` ;
        attempts++;
        
        
    }

    else if(userGuess<computerGuess){
        // alert(`Please guess number greater than ${userGuess}`);
        screen.textContent = `Please guess number greater than ${userGuess}` ;
        attempts++;
        
    }

    else{
        alert("Please Enter a number :(" );
        
    }
});



resetBtn.addEventListener("click",()=>{
    location.reload();
});

