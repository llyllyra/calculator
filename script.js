
let buttonCalcValue = [
    "(",
    ")",
    "%",
    "AC",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "X",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+"
]

let main = document.querySelector("main")


let number = buttonCalcValue.length

let affichage = () =>{
    let black = document.createElement("div");
    black.classList.add("black");
    main.appendChild(black)
    for(i = 0; i < number; i++){
        console.log(buttonCalcValue[i]);
        let buttonDiv = document.createElement("div");
        buttonDiv.innerHTML= buttonCalcValue[i];
        buttonDiv.classList.add("button");
        if(buttonCalcValue[i] != "="){
            buttonDiv.setAttribute('id', buttonCalcValue[i])
        }else{
            buttonDiv.setAttribute('id', "equals")
        }
        main.appendChild(buttonDiv);
        
    }
    
}




affichage();
