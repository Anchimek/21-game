const playBtn = document.querySelector('.play')
const resetBtn = document.querySelector('.reset')
const startBtn = document.querySelector('.start')
const p1score = document.querySelector('.game--card--scores-player1')
const p2score = document.querySelector('.game--card--scores-player2')
const move = document.querySelector('.game--card--move')
const gameView = document.querySelector('.game--card')
const gameStart = document.querySelector('.game--start')
const dice = document.querySelector('.dice')
const svg = document.querySelector('svg')
let player1Active = true
let player1Score = 0
let player2Score = 0

function rollTurn(){
    let whichPlayer = Math.floor(Math.random() * 2)
    if (whichPlayer === 0) {
        player1Active = true
        p1score.classList.add('active')
        move.innerHTML = `<h1>Player 1 move</h1>`
    }   else {
        player1Active = false
        p2score.classList.add('active')
        move.innerHTML = `<h1>Player 2 move</h1>`
    } 
    console.log(player1Active)
}

function win() {
    move.classList.add ('active')
    playBtn.style.display = "none"
    resetBtn.style.display = "block"
    dice.style.display = "none"
    svg.style.display = "block"
}
startBtn.addEventListener('click', ()=>{
    gameView.style.display = "block"
    gameStart.style.display = "none"
    rollTurn()
})

playBtn.addEventListener('click', ()=> {
    const number = Math.floor(Math.random() * 6 + 1)
    dice.classList.toggle ('active')
    dice.innerHTML = ""

    for (let i = 0; i < number; i++) {        
        dice.innerHTML += `<span></span>`
    }
    
    if(player1Active == true) {
        move.innerHTML = `<h1>Player 2 move</h1>`
        player1Score += number
        p1score.classList.remove('active')
        p2score.classList.add('active')
        p1score.innerHTML = `Player1 score: ${player1Score}`
    } else if (player1Active == false) {
        move.innerHTML = `<h1>Player 1 move</h1>`
        player2Score += number
        p1score.classList.add('active')
        p2score.classList.remove('active')
        p2score.innerHTML = `Player2 score: ${player2Score}`
    }   

    if (player1Score >= 21) {
        move.innerHTML = `<h1>Player 1 win!!</h1>`
        win()
    } else if (player2Score >= 21) {
        move.innerHTML = `<h1>Player 2 win!!</h1>`
        win()
    }

    player1Active = !player1Active

}) 

resetBtn.addEventListener('click', ()=> {
    player1Score = 0
    player2Score = 0
    p1score.innerHTML = `Player1 score: ${player1Score}`
    p2score.innerHTML = `Player2 score: ${player2Score}`
    p1score.classList.remove('active')
    p2score.classList.remove('active')
    move.innerHTML = `<h1>Player 1 move</h1>`
    move.classList.remove ('active')
    dice.style.display = "flex"
    dice.classList.toggle ('active')
    svg.style.display = "none"
    resetBtn.style.display = "none"
    playBtn.style.display = "block"
    rollTurn()
})