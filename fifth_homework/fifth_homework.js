//______________________________random card________________________________________________________________
function randomCard(){
    let max = 54;
   return Math.floor(Math.random() * max);
}
console.log(randomCard());

//________________________________revert symbol______________________________________________________________

function revertSymbol(){
    let rawLine = "Літера-перевертень Перев2ірка";
    let revertLine = [];
    for (let letter of rawLine){
        if (!isNaN(parseInt(letter))) {
            revertLine.push("_");
        } else if (letter === letter.toLowerCase()) {
            revertLine.push(letter.toUpperCase());
        } else if (letter === letter.toUpperCase()) {
            revertLine.push(letter.toLowerCase());
        } else {
            revertLine.push(letter);
        }
    }
    return revertLine.join("");
}
console.log(revertSymbol());

//___________________________________line statistics________________________________________________

function lineStatistics(){
    let rawLine = "Line-Statistics Test23";
    let lineStatistics = {
        letters: 0,
        digits: 0,
        other_symbols: 0,
    };
    for (let letter of rawLine){
        if (letter.match(/[0-9]/)) {
            lineStatistics.digits += 1;
        } else if (letter.match(/[a-zA-Z]/)) {
            lineStatistics.letters += 1;
        } else if (letter !== " "){
            lineStatistics.other_symbols += 1;
        }

    }
    return lineStatistics
}
 console.log(lineStatistics())

//_________________________________Find a Chair_____________________________________________________

function findChair(){
    const example = [['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]];
    const needChair = 5;
    const foundChair = [];

    for (let room in example){
        const countOfChairs = foundChair.reduce((sum, current) => sum + current, 0);
        if (countOfChairs === needChair) return foundChair;
        if (example[room][1] > example[room][0].length){
            let extraChairs = example[room][1] - example[room][0].length;
            if ((countOfChairs + extraChairs) > needChair){
                foundChair.push((needChair - countOfChairs))
            } else {
                foundChair.push(extraChairs)
            }
        } else {
            foundChair.push(0)
        }
    }

}
console.log(findChair())