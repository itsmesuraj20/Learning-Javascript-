'use strict';


const score0El = document.querySelector('#score--0');
const score1El  = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');


const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); 


const scores = [0,0];
let currentScore = 0;
let activePlayer = 0; 

btnRoll.addEventListener('click' , function (){
    const dice = Math.trunc(Math.random()*6 ) + 1;
    console.log(dice);

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if(dice !== 1){
        //add dice to cureent score;
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        current0El.textContent = currentScore;  

    }
    else{
        //Switch to next player[]
        document.getElementById(`current--${activePlayer}`).textContent = 0;

         
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0 ;
    }
})