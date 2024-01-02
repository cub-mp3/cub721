'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number') .textContent = '?'
let score = 20
let highscore = 0
const displayMessgage = function(message) {document.querySelector('.message').textContent = message}

const numberWidth = function(number) {document.querySelector('.number').style.width = number}

document.querySelector('.check').addEventListener 
('click', function (){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess){
        displayMessgage('no number');

    }else if (guess === secretNumber){
        displayMessgage('yessir');
        document.querySelector('body').style.backgroundColor = '#FF0000';
        numberWidth('50rem')

        document.querySelector('.number') .textContent = secretNumber
        
        if (score > highscore){
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
       
    }

    else{
        // score--;
        // document.querySelector('.message').textContent = guess > secretNumber ? 'too high': 'too low';
        
        displayMessgage(guess > secretNumber ? 'too high': 'too low');
        document.querySelector('.score').textContent = score;
        

    }

})

//AGAIN

document.querySelector('.again').addEventListener('click', function(){
    score = 20

    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor =  '#222';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

   

})

