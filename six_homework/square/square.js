const tbody = document.querySelector('tbody');
const cellsNums = [];

let timer;
for(let i=0; i<10; i++){
    const tr = document.createElement('tr');
    for(let j=0; j<10; j++){
        const td = document.createElement('td');
        tr.append(td);
        cellsNums.push(String(i) + String(j));
    }
    tbody.append(tr);
}

document.getElementById("button").addEventListener('click', start);

function start(){
    document.getElementById("button").hidden = true;
    timer = setInterval(createSquare, 1000);
}

function createSquare(){
    let cellNum = Math.floor(Math.random()*cellsNums.length);

    let x = cellsNums[cellNum][0];
    let y = cellsNums[cellNum][1];
    let currentCell = tbody.rows[y].cells[x];
    currentCell.style.backgroundColor = getSomeColor();
    cellsNums.splice(cellNum,1);

    if (cellsNums.length === 0) {
        clearInterval(timer);
        say('Заповнення завершено');
    }

}

function getSomeColor(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}

function say(str){
    const h2 = document.createElement('h2');
    h2.innerText = str;
    document.body.append(h2);
}
