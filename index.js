console.log('I\'m Sailor Moon');

const options = ["rock", "paper", "scissors"];
let playerWins = 0;
let playerLoses = 0;
let playerTies = 0;

function getComputerChoice(){
    const choice = options[Math.floor((Math.random() * options.length))];
    return choice;
}

function getPlayerChoice(num){
    const outcomeDiv = document.querySelector('.outcome');
    const p = document.createElement('p');
    let computerChoice = getComputerChoice();
    switch (num){
        case 0:
            console.log("You picked rock!");
            if (computerChoice == "rock")
            {
                p.innerText = `It's a tie!`;
                playerTies++;
                document.getElementById("ties").innerHTML=playerTies;
                outcomeDiv.appendChild(p);
            }
            else if (computerChoice == "paper"){
                p.innerText = `You lose! Paper beats rock!`;
                playerLoses++;
                document.getElementById("loses").innerHTML=playerLoses;
                outcomeDiv.appendChild(p);
            }
            else {
                p.innerText = `You win! Rock beats scissors!`;
                playerWins++;
                document.getElementById("wins").innerHTML=playerWins;
                outcomeDiv.appendChild(p);
            }
            return "rock";
            break;
        case 1:
            console.log("You picked paper!");
            if (computerChoice == "rock")
            {
                p.innerText = `You win! Paper beats rock!`;
                playerWins++;
                document.getElementById("wins").innerHTML=playerWins;
                outcomeDiv.appendChild(p);
            }
            else if (computerChoice == "paper"){
                p.innerText = `It's a tie!`;
                playerTies++;
                document.getElementById("ties").innerHTML=playerTies;
                outcomeDiv.appendChild(p);
            }
            else {
                p.innerText = `You lose! Scissors beats paper!`;
                playerLoses++;
                document.getElementById("loses").innerHTML=playerLoses;
                outcomeDiv.appendChild(p);
            }
            return "paper";
            break;
        case 2:
            console.log("You picked scissors!");
            if (computerChoice == "rock")
            {
                p.innerText = `You lose! Rock beats scissors!`;
                playerLoses++;
                document.getElementById("loses").innerHTML=playerLoses;
                outcomeDiv.appendChild(p);
            }
            else if (computerChoice == "paper"){
                p.innerText = `You win! Scissors beats paper!`;
                playerWins++;
                document.getElementById("wins").innerHTML=playerWins;
                outcomeDiv.appendChild(p);
            }
            else {
                p.innerText = `It's a tie!`;
                playerTies++;
                document.getElementById("ties").innerHTML=playerTies;
                outcomeDiv.appendChild(p);
            }
            return "scissors";
            break;
    }
}