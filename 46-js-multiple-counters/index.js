
const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");

// USE THIS VARIABLE TO COUNT TIMERS
let timersCount = 0;
let interval = 0;
var seconds = 0;
var tens = 0;


const addTimerBtn = document.getElementById('new_timer');


/**
 * Exercise 1
 *
 * create a function {createTimerEl} which takes a number
 * and creates a div which matches the HTML structure you can find
 * in the README
 *
 * NOTE: each timer should have additional class with unique number(as you
 * can see in example - timer_$)
 */

const createTimerEl = (numberOfTimerBox) => {

}

/**
 * Event listener for the add timer button
 */

addTimerBtn.addEventListener('click', ev => {
    if(timersCount < 5){
        console.log(`add timer button was clicked ${timersCount} times`);
    }
    timersCount++;
})


/**
 * Create a method that when click the buttons stop and reset it'll reset the
 * timer or stop the timer.
 */


const stopResetBtn = (stopResetAction = 'start') => {

    if(stopResetAction === 'stop'){
        for(const stopDiv of stopDivs){
            stopDiv.addEventListener('click', e => {
                console.log('stop button applied');
                stop();

            })
        }
    }else if(stopResetAction === 'reset'){
        for(const resetDiv of resetDivs){
            resetDiv.addEventListener('click', e => {
                console.log('reset button applied');
                stop();
                tens = '00';
                seconds= '0';
                outputSeconds.innerHTML = seconds;
                outputTens.innerHTML = tens;

                interval = setInterval(startCount, 10);
            })
        }
    }else if(stopResetAction === 'start'){
        clearInterval(interval);
        interval = setInterval(startCount, 10);
    }
}

/**
 * Create a method that counts up
 */

const startCount = () => {
    tens++;
    if(tens <= 9){
        outputTens.innerHTML = '0' + tens;
    }

    if(tens > 9){
        outputTens.innerHTML = tens;
    }

    if(tens > 99){
        seconds++;
        outputSeconds.innerHTML = '0' + seconds;
        tens = 0;
        outputTens.innerHTML = '0' + tens;
    }

    if(seconds > 9){
        outputSeconds.innerHTML = seconds;
    }

}

/**
 * Method to stop timer
 */

const stop = () => clearInterval(interval);