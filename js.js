const CHOICES = ['rock', 'paper', 'scissors']
const [ROCK, PAPER, SCISSORS] = CHOICES


function getComputerChoice() {
    const choices = CHOICES

    return choices[Math.floor(Math.random()*3)]
}

function playRoundAndGetWinner() {
    const userChoice = prompt('Rock, paper or scissors?')?.toLowerCase()

    if (!CHOICES.includes(userChoice)) {
        alert('Please insert a valid choice!')
        return playRoundAndGetWinner()
    } else {
        const computerChoice = getComputerChoice()

        let tie = userChoice === computerChoice
        let userDidWin;
        let computerDidWin;

        if (tie) {
            alert(`Computer choice was: ${computerChoice}. It's a tie!`)
            return 'tie'
        } else {
            switch(userChoice) {
                case ROCK:
                    userDidWin = computerChoice === SCISSORS
                    computerDidWin = computerChoice === PAPER
                    break
                case PAPER:
                    userDidWin = computerChoice === ROCK
                    computerDidWin = computerChoice === SCISSORS
                    break
                case SCISSORS:
                    userDidWin = computerChoice === PAPER
                    computerDidWin = computerChoice === ROCK
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

        console.log(`*** YOU ${3-computerLives} | COMPUTER ${3-userLives}`)
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

game()