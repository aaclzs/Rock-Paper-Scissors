const computerChoiceDisplay = document.getElementById('computerChoice')
const computerChoiceIcon = document.getElementById('computerChoiceIcon')
const userChoiceDisplay = document.getElementById('userChoice')
const userChoiceIcon = document.getElementById('userChoiceIcon')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.choice-icon')
const clickSound = document.getElementById('clickSound')

let userChoice
let computerChoice
let result


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    updateUserChoiceIcon(userChoice)  
    generateComputerChoice()
    getResult()
    clickSound.play()  
}))


function updateUserChoiceIcon(choice) {
    if (choice === 'rock') {
        userChoiceIcon.src = "assets/user/user-rock.png"
    } else if (choice === 'paper') {
        userChoiceIcon.src = "assets/user/user-paper.png"
    } else {
        userChoiceIcon.src = "assets/user/user-scissors.png"
    }
}

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 0) {
        computerChoice = 'rock'
        computerChoiceIcon.src = "assets/computer/computer-rock.png"
    } else if (randomNumber === 1) {
        computerChoice = 'paper'
        computerChoiceIcon.src = "assets/computer/computer-paper.png"
    } else {
        computerChoice = 'scissors'
        computerChoiceIcon.src = "assets/computer/computer-scissors.png"
    }
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'It\'s a draw!'
    } else if (computerChoice === 'rock' && userChoice === "paper" ||
               computerChoice === 'paper' && userChoice === "scissors" ||
               computerChoice === 'scissors' && userChoice === "rock") {
        result = 'You win! ˶ᵔ ᵕ ᵔ˶'
    } else {
        result = 'You lose! :P'
    }
    resultDisplay.innerHTML = result
}

const backgrounds = [
    'url("assets/background/background-1.jpg")',
    'url("assets/background/background-2.jpg")',
    'url("assets/background/background-3.jpg")'
]

const backgroundDiv = document.getElementById('background')
let currentBackgroundIndex = 0

function changeBackground() {
    backgroundDiv.style.backgroundImage = backgrounds[currentBackgroundIndex]
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length
}

setInterval(changeBackground, 2000)
changeBackground()  