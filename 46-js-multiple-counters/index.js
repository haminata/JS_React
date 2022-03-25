
const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");
const addTimerBtn = document.getElementById('new_timer');


// USE THIS VARIABLE TO COUNT TIMERS
let timersCount = 0;


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

const createTimerEl = () => {
    const parentDiv = document.querySelector('.timers');

    const divTimerTimer = document.createElement('div');
    divTimerTimer.dataset.seconds = '0';
    divTimerTimer.dataset.tens = '0';

    divTimerTimer.classList.add("timer");
    divTimerTimer.classList.add(`timer_${timersCount +1}`);

    const divRemove = document.createElement('div');
    divRemove.classList.add("remove");

    const h3 = document.createElement('h3');
    h3.innerHTML = '0';
    const spanEl = document.createElement('span');
    spanEl.innerHTML = ' 00';
    h3.appendChild(spanEl);


    const divBtn = document.createElement('div');
    divBtn.classList.add("btn");

    const resetBtn = document.createElement('button');
    resetBtn.classList.add("reset");
    resetBtn.innerHTML = 'Reset';

    const stoptBtn = document.createElement('button');
    stoptBtn.classList.add("stop");
    stoptBtn.innerHTML = 'Stop';

    divBtn.appendChild(resetBtn);
    divBtn.appendChild(stoptBtn);

    parentDiv.appendChild(divTimerTimer);
    divTimerTimer.appendChild(divRemove);
    divTimerTimer.appendChild(h3);

    divTimerTimer.appendChild(divBtn);

    stoptBtn.addEventListener('click', e => {
        console.log('stop button applied');
        stop(divTimerTimer);

    })

    resetBtn.addEventListener('click', e => {
        console.log('reset button applied');
        stopResetBtn('reset');
        //interval = setInterval(startCount, 10);
    })

    divRemove.addEventListener('click', e => {
        console.log('x button applied');
        divTimerTimer.remove();

    })

    return divTimerTimer;

}


/**
 * Event listener for the add timer button
 */

addTimerBtn.addEventListener('click', ev => {

    if(timersCount < 5){

        console.log(`add timer button was clicked ${timersCount} times`);

        let newDivTimerTimerElem = createTimerEl();

        stopResetBtn('start', newDivTimerTimerElem);

    }
    timersCount++;
})


/**
 * Create a method that when click the buttons stop and reset it'll reset the
 * timer or stop the timer.
 */


const stopResetBtn = (stopResetAction = 'start', target) => {

    if(stopResetAction === 'reset'){
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
        // clearInterval(interval);
        let interval = setInterval(() => {
            startCount(target);
        }, 10);

        target.dataset.interval = String(interval);
    }
}

/**
 * Create a method that counts up
 */

const startCount = (target) => {

    let outputTens = target.querySelector('h3');
    let seconds = parseInt(target.dataset.seconds);
    let tens = parseInt(target.dataset.tens);
    //console.log('Current time:', seconds, tens);

    const content = `
    ${seconds < 10 ? '0' + seconds : seconds}
    <span>${tens < 10 ? '0' + tens : tens}</span>
    `;

    tens++;
    // if(tens <= 9){
    //
    //     outputTens.innerHTML = '0' + tens;
    // }
    //
    // if(tens > 9){
    //     outputTens.innerHTML = tens;
    // }

    if(tens > 59){
        seconds++;
        // outputSeconds.innerHTML = '0' + seconds;
        tens = 0

        // outputTens.innerHTML = '0' + tens;
        target.dataset.seconds = String(seconds);
    }

    outputTens.innerHTML = content;

    // if(seconds > 9){
    //     outputSeconds.innerHTML = seconds;
    // }
    target.dataset.tens = String(tens);
}

/**
 * Method to stop timer
 */

const stop = (target) => {
    let interval = parseInt(target.dataset.interval)
    clearInterval(interval);

    target.dataset.interval = '';
};