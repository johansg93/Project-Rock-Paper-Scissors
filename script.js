console.log("Hello World");

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

console.log(getComputerChoice());