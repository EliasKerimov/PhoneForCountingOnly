let count = 0;

const counter = document.getElementById("counter")
const countDownNumber = document.getElementById("countDownButton");
counter.style.color = "black";
deactiveReset()

function changeColor(){
    if (count > 0) {
    counter.style.color = "#d31818ff";
    } else if (count === 0) {
    counter.style.color = "black";
    }
}

function increaseNumber(){
    count++;
    counter.textContent = count;
    console.log("The button was clicked");
    changeColor();
    deactiveReset()
    
}

function resetButton(){
    count = 0;
    counter.textContent = count;
    changeColor();
    deactiveReset()

}

function countDown(){
    if(count > 0){
    count--;
    counter.textContent = count;
    changeColor();
    deactiveReset()
    }
}

function deactiveReset(){
    if (count === 0) {
        countDownNumber.disabled = true;
    } else {
        countDownNumber.disabled = false;
    } 
}

// Her gir jeg funksjonalitet for piler på tastaturet

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") increaseNumber();
    if (e.key === "ArrowDown") countDown();
    if (e.key === "Backspace") countDown();
    if (e.key.toLowerCase() === "r") resetButton();
});
