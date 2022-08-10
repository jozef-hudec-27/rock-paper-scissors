function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']

    return choices[Math.floor(Math.random()*3)]
}

function playRound() {
    const userChoice = prompt('Rock, paper or scissors?').toLocaleLowerCase()

    if (!['rock', 'paper', 'scissors'].includes(userChoice)) {
        alert('Please insert a valid choice!')
        playRound()
    } else {
        const computerChoice = getComputerChoice()

        let tie = userChoice === computerChoice
        let userDidWin;
        let computerDidWin;
        let playAgain = false

        if (tie) {
            playAgain = confirm(`Computer choice was: ${computerChoice}. It's a tie! Play again?`)
        } else {
            switch(userChoice) {
                case 'rock':
                    userDidWin = computerChoice === 'scissors'
                    computerDidWin = computerChoice === 'paper'
                    break
                case 'paper':
                    userDidWin = computerChoice === 'rock'
                    computerDidWin = computerChoice === 'scissors'
                    break
                case 'scissors':
                    userDidWin = computerChoice === 'paper'
                    computerDidWin = computerChoice === 'rock'
                    break
            }

            if (userDidWin) {
                playAgain = confirm(`Computer choice was: ${computerChoice}. You win! Play again?`)
            } else {
                playAgain = confirm(`Computer choice was: ${computerChoice}. You lose! Play again?`)
            }
        }

        if (playAgain) playRound()
    }
}

playRound()