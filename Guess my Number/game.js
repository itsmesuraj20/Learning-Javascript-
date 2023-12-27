'use strict'

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent  = "Hello World 😭🎖️💯"


// var element = document.querySelector('.guess');
// element.value = 23;

// if (element.value == 23) {
//     var scoreElement = document.querySelector('.score');
//     scoreElement.textContent = 100; // Update the content of the element to show 100
// }
 
let secretNumber  = Math.trunc(Math.random() *20 )+  1;

let score = 20;
let highscore = 0;

// 

document.querySelector('.check').addEventListener
('click' , function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = '⚫No number' ; 
    }
    //When Player wins
    else if(guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉Correct Number!' ; 
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';


        if(score> highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess>secretNumber)
    {
        document.querySelector('.message').textContent = 'Too High!';
        score--;
        document.querySelector('.score').textContent = score;
    }
    else if(guess<secretNumber)
    {
        document.querySelector('.message').textContent = 'Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
    }
});

//Click for the reset button 
document.querySelector('.again').addEventListener('click' , function(){
    score = 20;
    secretNumber  = Math.trunc(Math.random() * 20 )+  1;

    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    //CSS DOM Manipulation
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';


});