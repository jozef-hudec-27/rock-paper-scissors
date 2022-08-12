const CHOICES = ['rock', 'paper', 'scissors'];
const [ROCK, PAPER, SCISSORS] = CHOICES;

const clickingSoundPlayer = document.getElementById('click-audio-player');
clickingSoundPlayer.volume = 0.5;

function chooseChoice() {
    clickingSoundPlayer.currentTime = 0;
    clickingSoundPlayer.play();
};

const choiceNodes = document.getElementsByClassName('choice');
Array.from(choiceNodes).forEach(node => {
    node.addEventListener('mouseover', () => node.classList.add('hovering'));
    node.addEventListener('mouseout', () => node.classList.remove('hovering'));
    node.addEventListener('click', chooseChoice);
});


function getComputerChoice() {
    return CHOICES[Math.floor(Math.random()*3)];
};

function playRoundAndGetWinner() {
    const userChoice = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`)?.toLowerCase()

    if (!CHOICES.includes(userChoice)) {
        alert('Please insert a valid choice!')
        return playRoundAndGetWinner()
    } else {
        const computerChoice = getComputerChoice()

        let tie = userChoice === computerChoice
        let userDidWin;

        if (tie) {
            alert(`Computer choice was: ${computerChoice}. It's a tie!`)
            return 'tie'
        } else {
            switch(userChoice) {
                case ROCK:
                    userDidWin = computerChoice === SCISSORS
                    break
                case PAPER:
                    userDidWin = computerChoice === ROCK
                    break
                case SCISSORS:
                    userDidWin = computerChoice === PAPER
                    break
            }

            if (userDidWin) {
                alert(`Computer choice was: ${computerChoice}. You win!`)
                return 'user'
            } else {
                alert(`Computer choice was: ${computerChoice}. You lose!`)
                return 'computer'
            }
        }
    }
}

function game() {
    let userLives = 3
    let computerLives = 3

    while (userLives > 0 && computerLives > 0) {
        let winner = playRoundAndGetWinner()

        if (winner === 'user') {
            computerLives--
        } else if (winner === 'computer') {
            userLives--
        } 

        console.log(`*** YOU ${3-computerLives} | COMPUTER ${3-userLives} ***`)
    }

    if (userLives === 0) { // the user lost
        alert('The computer won 3 times. You lose the game.')
    } else { // the computer lost
        alert('You won 3 times. You win the game.')
    }

    let playNewGame = confirm('Want to play a new game?')

    if (playNewGame) {
        game()
    }
}

// const playBtn = document.querySelector('button')
// playBtn.addEventListener('click', game)
