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

function playRound(human, computer){
    if (human === computer) {
        return "Draw!";
    }

    if (
        (human === "rock" && computer === "Scissors") ||
        (human === "scissors" && computer === "Paper") ||
        (human === "paper" && computer === "Rock")
        ){
            console.log("You won!" + human + "beats " + computer + "!");
            return "human"; 

    } else {
        "You lost..." + computer + "beats " + human + "...";
        return "computer";
    }



}

function playGame (rounds){
    let humanScore = 0;
    let computerScore = 0;
    let draws = 0; 

    for (let i = 0; i<=rounds;i++){
        alert('Round ${i} of ${rounds}');
        
        let userChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        alert ('You chose: ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} computer chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}');

        let result = playRound(userChoice, computerChoice);

        if (result === )


    }
}



console.log(getComputerChoice());
console.log(getHumanChoice());