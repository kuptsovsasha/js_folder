//Area calculator
function calculateAreaOfCircle(){
    const pNumber = 3.14159265

    let inputValue = prompt("Add circle radius");
    if (inputValue <= 0 || inputValue.includes(',')) {
        return alert("You should add valid number!");
    }
    let calculatedArea = (inputValue ** 2) * pNumber;

    return alert(calculatedArea);
}

// Retire Calculator

function calculateTimeUntilRetire(){
    const retireAge = 65
    const currentYear = new Date().getFullYear();

    let inputValue = prompt("Write your current age.");
    if (inputValue <= 0) {
        return alert("You should add valid age!");
    }
    if (inputValue >= 65) {
        return alert("You already retire!");
    }
    let yearsToRetirement = retireAge - inputValue;
    let retireYear = currentYear + yearsToRetirement;

    return alert(`You will retire after ${yearsToRetirement} years in ${retireYear}`);
}

// Reverse number

function getReversedNumber(){

    let inputValue = String(prompt("Write your number. The number should be three-digit"));
    if (inputValue.length !== 3){
        return alert("The number should be three-digit");
    } else {
        return alert(inputValue.split('').reverse().join(''));
    }
}
