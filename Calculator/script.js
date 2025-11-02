let display = document.querySelector("#display");
let button = document.querySelectorAll("button");
let expression = "";

button.forEach((button)=>{
    button.addEventListener("click",()=>{
        let value = button.textContent;

        if(value==="C"){
            display.textContent = 0;
        }

        else if(value === "="){
            display.textContent = eval(expression);
            expression = "";
        }

        else{
            expression += value;
            display.textContent = expression;
        }

        
    });
});

