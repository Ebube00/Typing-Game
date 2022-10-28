let startBtn = document.getElementById('start')
let type = document.getElementById('type')
let select = document.getElementById('select')
let Time = document.getElementById('time')
let control = document.querySelector('.control')
let game = document.querySelector('.game')
let result = document.querySelector('.result')
let sec = document.getElementById('sec')
let displayWord = document.getElementById('current-word')
let message = document.getElementById('message')
let scoreD = document.getElementById('score')
let resultD = document.getElementById('result')


let words = [
    'biscuit',
    'television',
    'development',
    'wahala',
    'laptop',
    'minions',
    'basketball',
    'atheist',
    'olympics',
    'zephyr',
    'xylophone',   

]
let level = {
    easy: 15,
    medium: 10,
    hard: 5,
}
let time
let score = '0'
let isPlaying

startBtn.addEventListener('click', ()=>{
    control.style.zIndex = '0'
    changeLevel()
    showWord(words)
    setInterval(countdown, 1000)
    setInterval(checkStatus, 100)
    type.addEventListener('input', () =>{
        if(matchWord()){
            isPlaying = true
            showWord(words)
            time = currentLevel + 1
            type.value = ''
            score++
            scoreD.textContent = score
        }
        else{

        }
    })
})

function changeLevel(){
    if (select.value == 'easy'){
        currentLevel = level.easy
        time = currentLevel
        sec.textContent = currentLevel
    }
    else if (select.value == 'medium'){
        currentLevel = level.medium
        time = currentLevel
        sec.textContent = currentLevel
    }
    else if (select.value == 'hard'){
        currentLevel = level.hard
        time = currentLevel
        sec.textContent = currentLevel
    }
}

function showWord(words){ 
    let random = Math.floor(Math.random() * words.length) 
    displayWord.textContent = words[random]
}

function countdown(){
    if (time > 0){
        time --
    }
    else if(time == 0){
        isPlaying = false
    }
    Time.textContent = time
}

function matchWord(){
    if (type.value === displayWord.textContent){
        message.textContent = 'Correct'
        return true
    }
    else{
        message.textContent = ''
        return false
    }
}

function checkStatus(){
    if(!isPlaying && time === 0){
        message.textContent = 'Game Over'
        result.style.zIndex = '15'
        if (score < 5){
            resultD.textContent = `Sorry, you scored ${score}, which is very low. Your typing speed is poor.`
        }
        else{
            resultD.textContent = `Congratulations, you passed with a score of ${score}. Your typing speed is impressive.`
        }
    }
}