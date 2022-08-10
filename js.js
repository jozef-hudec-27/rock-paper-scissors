function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']

    return choices[Math.floor(Math.random()*3)]
}


const userChoice = prompt('Rock, paper or scissors?').toLocaleLowerCase()

if (!['rock', 'paper', 'scissors'].includes(userChoice)) {
    alert('Invalid choice!')
} else {
    const computerChoice = getComputerChoice()

    let tie = userChoice === computerChoice
    let userDidWin;
    let computerDidWin;

    if (tie) {
        alert(`Computer choice was: ${computerChoice}. It's a tie!`)
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
            alert(`Computer choice was: ${computerChoice}. You win!`)
        } else {
            alert(`Computer choice was: ${computerChoice}. You lose!`)
        }
    }
}