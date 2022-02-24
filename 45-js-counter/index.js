let step = 0;
let counter = 0;

/**
 * Exercise 1
 *
 * create a function {action} which will take a {symbol} param: "+" or "-".
 * increment {counter} by {step} if you pass "+", or
 * decrement {counter} by {step} if you pass "-"
 *
 * NOTE: ".counter_value" should always represent the current value of {counter}
 */

const action =(symbol) => {
    const countervAL = document.querySelector('.counter_value');

    if(symbol === '-'){
        counter -= step;

    }else if (symbol === '+'){
        counter += step;

    }else{
        console.log('symbol not recognised');
    }
    countervAL.textContent = counter;
    countervAL.innerText = counter;
}

/**
 * Exercise 2
 *
 * When the user clicks on "Set step" button, you need to:
 * 1. set {step} to the current value of input.
 * 2. reset value of input field to 1
 * 3. update value of ".step_value" to value of {step}
 *
 * NOTE: {step} should be an integer
 *
 */

const setStepForm = document.querySelector('form');
const setStepBtn = document.querySelector('form button');
const input = document.querySelector('form input');
const stepVal = document.querySelector('.step_value');


setStepForm.addEventListener('submit', e => {
    step = parseInt(input.value);
    input.value = 1;
   stepVal.innerText = parseInt(step);
} )



/**
 * Exercise 3
 *
 * handle click on "#decrement" button and
 * decrement counter by {step}
 *
 * NOTE: remember to use your {action} function
 */

const decrBtn = document.getElementById('decrement');
decrBtn.addEventListener('click', ev => {
    action('-');
})
/**
 * Exercise 4
 *
 * handle click on "#increment" button and
 * increment counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
const incrBtn = document.getElementById('increment');
incrBtn.addEventListener('click', ev => {
    action('+');
})
/**
 * Exercise 5
 *
 * when the user clicks on "#auto_decrement",
 * {counter} should be decremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */

const autoDecre = document.getElementById('auto_decrement');
let runningInterval = null;

const stopInterval = () => {
    if(runningInterval !== null){
        clearInterval(runningInterval);
        console.log("cleared interval: ", runningInterval);
        runningInterval = null;
    }
}

autoDecre.addEventListener("click", ev => {

    stopInterval()

    runningInterval = setInterval(() => {
        action('-');
    },1000)
})

/**
 * Exercise 6
 *
 * when the user clicks on "#auto_increment",
 * {counter} should be incremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */

const autoIncr = document.getElementById('auto_increment');
autoIncr.addEventListener("click", ev => {

    stopInterval();

    runningInterval = setInterval(() => {
        action('+')
    },1000)

})

/**
 * Exercise 7
 *
 * when the user clicks on "#stop_auto",
 * the auto counter should stop
 */

const stopAuto = document.getElementById('stop_auto');
stopAuto.onclick = stopInterval