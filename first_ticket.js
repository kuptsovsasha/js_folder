function calculateAreaOfCircle(){
    const pNumber = 3.14159265

    // let inputValue = document.getElementById("myInput").value;
    let inputValue = prompt("Add circle radius");

    let calculatedArea = (inputValue ** 2) * pNumber

    alert(calculatedArea);
}