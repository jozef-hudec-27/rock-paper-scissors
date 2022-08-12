const CHOICES = ['rock', 'paper', 'scissors'];
const [ROCK, PAPER, SCISSORS] = CHOICES;

const clickingSoundPlayer = document.getElementById('click-audio-player');
clickingSoundPlayer.volume = 0.5;

function chooseChoice(choice) {
    if (!gameOverMessage) { 
        clickingSoundPlayer.currentTime = 0;
        clickingSoundPlayer.play();
    
        playRound(choice);
    }
};

const choiceNodes = document.getElementsByClassName('choice');
Array.from(choiceNodes).forEach(node => {
    node.addEventListener('mouseover', () => node.classList.add('hovering'));
    node.addEventListener('mouseout', () => node.classList.remove('hovering'));
    node.addEventListener('click', e => chooseChoice(e.target.parentNode.dataset.choice));
});

const gameOverModal = document.getElementById('game-over-modal')
const playAgainBtn = document.querySelector('.play-again-btn')

playAgainBtn.addEventListener('click', () => {
    window.location.href = ''
})

let userHP = 5;
let computerHP = 5;
let roundCounter = 1;
let gameOverMessage = '';

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random()*3)];
};

function didUserWinRound(userChoice, computerChoice) {
    switch (userChoice) {
        case ROCK:
            return computerChoice === SCISSORS
        case PAPER:
            return computerChoice === ROCK
        case SCISSORS:
            return computerChoice === PAPER
    };


};

function playRound(userChoice) {
    const computerChoice = getComputerChoice();

    const roundMsgNode = document.querySelector('.round-msg')

    const roundCounterNode = document.querySelector('.round-counter')
    roundCounterNode.textContent = `ROUND ${++roundCounter}`

    if (computerChoice === userChoice) {
        roundMsgNode.innerHTML = `The computer chose ${computerChoice}. <strong>It's a tie!</strong>`
    } else {
        let userWon = didUserWinRound(userChoice, computerChoice);

        if (userWon) {
            roundMsgNode.innerHTML = `The computer chose ${computerChoice}. <strong>You win!</strong>`

            computerHP--;
            computerHPContainer = document.querySelector('.computer-hp')
            for (node of computerHPContainer.children) {
                if (node.textContent === '❤️') {
                    node.textContent = '🖤'
                    break
                }
            }

            if (computerHP === 0) { // if we won
                gameOverMessage = 'You won 5 times. You win the game! Good job!'
            }
        } else {
            roundMsgNode.innerHTML = `The computer chose ${computerChoice}. <strong>You lose!</strong>`

            userHP--;
            userHPContainer = document.querySelector('.user-hp')
            for (node of userHPContainer.children) {
                if (node.textContent === '❤️') {
                    node.textContent = '🖤'
                    break
                } 
            }

            if (userHP === 0) { // if we lost
                gameOverMessage = 'The computer won 5 times. You lose the game! Better luck next time!'
            }
        }

        if (gameOverMessage) {
            setTimeout(() => {
                document.querySelector('.modal-body-text').textContent = gameOverMessage
                gameOverModal.style.display = 'block'
            }, 300);
        }
    }
};


