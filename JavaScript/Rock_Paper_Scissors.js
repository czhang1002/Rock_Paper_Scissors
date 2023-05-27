const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

update();

function update() {
    document.querySelector('.scores').innerHTML =
     `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
    const randomNumber = Math.random();
    // 0 <= num < 1
    let computerMove;
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    }
    else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    console.log(computerMove);
    return computerMove;
}

function playGame(playerMove) {
    let computerMove = pickComputerMove();
    let result;
    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'You Tie.';
        }
        else if (computerMove === 'paper') {
            result = 'You Lose.';
        }
        else if (computerMove === 'scissors') {
            result = 'You Win.';
        }
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You Win.';
        }
        else if (computerMove === 'paper') {
            result = 'You Tie.';
        }
        else if (computerMove === 'scissors') {
            result = 'You Lose.';
        }
    }
    else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You Lose.';
        }
        else if (computerMove === 'paper') {
            result = 'You Win.';
        }
        else if (computerMove === 'scissors') {
            result = 'You Tie.';
        }
    }
    if (result === "Win.") {
        score.wins += 1;
    }
    else if (result === "Lose.") {
        score.losses += 1;
    }
    else if (result === "Tie.") {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.result').innerHTML = result;
    document.querySelector('.move').innerHTML = 
    `You: <img class="move_icon" src="images/${playerMove}-emoji.png"> || 
    Computer: <img class="move_icon" src="images/${computerMove}-emoji.png">`;                
    update();
}