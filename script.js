let buttonCalcValue = [
    "(",
    ")",
    "%",
    "AC",
    7,
    8,
    9,
    "/",
    4,
    5,
    6,
    "X",
    1,
    2,
    3,
    "-",
    0,
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
        let buttonDiv = document.createElement("button");
        buttonDiv.innerHTML= buttonCalcValue[i];
        buttonDiv.classList.add("button");
        buttonDiv.setAttribute('class', "buttonCal")
        if(buttonCalcValue[i] != "="){
            buttonDiv.setAttribute('id', buttonCalcValue[i])
        
        }else{
            buttonDiv.setAttribute('id', "equals")
        }
        main.appendChild(buttonDiv);   
    }   
}
affichage();
let buttons = document.querySelectorAll(".buttonCal");
let results = document.querySelector(".black")  
let equal = document.getElementById("equals");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.id != "equals"){
            results.textContent += e.target.id;
        }
      
    });
  });
 
  let clear = document.getElementById("AC")
  clear.addEventListener("click", ()=> {
    results.textContent = ""
  })

  function computeResult(str) {
    return Function("return " + str)();
  }
  
  equal.addEventListener("click", () => {
    results.textContent = computeResult(results.textContent);
  });
  


