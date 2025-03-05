console.log("Hello World");


/*
Math.random() genererar ett tal mellan 0 och 0.999....
Math.random() * 3 skalar upp det till ett tal mellan 0 och 2.999....
Math.floor() gör om det till ett heltal: 0, 1 eller 2.
+1 gör att vi får siffrorna 1, 2 eller 3. (ist för 0, 1,2)
switch-satsen returnerar rätt sträng beroende på siffran.
Så om den slumpmässiga siffran är:

1 → "Rock"
2 → "Scissors"
3 → "Paper"
*/
function getComputerChoice() {
    let nummer = Math.floor(Math.random() * 3) + 1;

    switch (nummer) {
        case 1:
            return "Rock";
        case 2:
            return "Scissors";
        case 3:
            return "Paper";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose: Rock - Paper - Scissors.").toLowerCase();

    return humanChoice;
}
let humanScore = 0;
let computerScore = 0;

console.log(getComputerChoice());
console.log(getHumanChoice());