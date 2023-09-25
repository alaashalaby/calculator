let inputDisplay = document.getElementById("calculator__display");
let buttons = document.querySelectorAll("button");
let specialChar = ["*", "/", "+", "%", "=","-"];
let result = "";
buttons.forEach(button => {
    button.addEventListener("click",(e)=>calculate(e.target.dataset.value))
})

function calculate(val){
    if (val === "=" && result !== "") {
        result = eval(result.replace("%","/100"))
    } else if (val === "AC") {
        result = "";
    } else if (val === "DEL") {
        result = result.toString().slice(0, -1)
    } else {
        if (result === "" && specialChar.includes(val)) return;
        result += val;
    }
    inputDisplay.value = result;
}