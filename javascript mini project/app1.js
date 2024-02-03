let gameSeq = [];
let userSeq = [];
let btns = ['red', 'yellow', 'green', 'purple']
let started = false;
let level = 0;
let highScore = 0;
let h2 = document.querySelector('h2')
let scoreDisplay = document.querySelector('#highScore')
document.addEventListener('keypress', function () {
    if (started == false) {
        started = true;
        console.log('game is started');
        levelup();
    }
})
function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(() => {
        btn.classList.remove('flash')
    }, 250);
}
function userFlash(btn) {
    btn.classList.add('userflash');
    setTimeout(() => {
        btn.classList.remove('userflash')
    }, 250);
}



function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    // random btn choose
    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx]
    let randombtn = document.querySelector(`.${randomColor}`)
    gameFlash(randombtn);
    // console.log(randomColor);
    // console.log(randomIdx);
    // console.log(randombtn);
    gameSeq.push(randomColor)
    console.log(gameSeq);
}
function checkAns(idx) {

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelup, 1000)
        }
    } else {
        h2.innerHTML = `game over your score was <b>${level}</b> <br> press any key`;
        if(level>highScore){
            highScore=level
            scoreDisplay.innerText=`High Score ${highScore}`
        }
        document.querySelector('body').style.backgroundColor = 'red'
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = 'white'
        }, 150)
        reset();
    }
}
function btnPress() {
    let btn = this;
    userFlash(btn)
    userColor = btn.getAttribute('id')
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll('.btn')
for (btn of allBtns) {
    btn.addEventListener('click', btnPress)
}

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}