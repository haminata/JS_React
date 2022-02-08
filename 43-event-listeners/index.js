// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {clickTheButton} which listens for a click
 * on a button inside div with class "click", and
 * logs a message in the console when a click occurs
 */

const clickTheButton = () => {
    const btn = document.querySelector('.click');
    btn.addEventListener('click', event => {
        console.log('Btn value' + btn.value);
    })

}

/**
 * Exercise 2
 *
 * create a function {hoverOver} which listens for a hover over an
 * "a" tag inside div with class "mouseover" and logs a message in the console
 */
var enterEventCount = 0;
const hoverOver = () => {
    const div = document.querySelector('.mouseover');
    const aTag = div.querySelector('a');

    aTag.addEventListener('mouseover', e => {
        enterEventCount++;
        console.log('Mouseover listener '+ enterEventCount);
    })
}

/**
 * Exercise 3
 *
 * create a function {handleLeave} which listens for when the
 * cursor leaves the "a" tag inside div with class "mouseover"
 * and log a message in the console
 */

var leaveEventCount = 0;
const handleLeave = () => {
    const div = document.querySelector('.mouseover');
    const aTag = div.querySelector('a');

    aTag.addEventListener('mouseout', e => {
        leaveEventCount++;
        console.log('Leave mouseover '+ leaveEventCount);
    })
}

/**
 * Exercise 4
 *
 * create a function {focusOnMe} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 */

const focusOnMe = () => {
    const divIn = document.querySelector('.input');
    const input = divIn.querySelector('input');

    input.addEventListener('focus', e => {
        console.log('focus listener');
    })
}

/**
 * Exercise 5
 *
 * create a function {clickElsewhere} which will log a message in the console
 * when first you focus on input which is inside 'div' with class 'input'
 * and then click on anything else
 */


/**
 * Exercise 6
 *
 * create a function {pressAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key
 */

/**
 * Exercise 7
 *
 * create a function {releaseAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */

/**
 * Exercise 8
 *
 * create a function {inputToUpperCase} which will convert value of input
 * to uppercase when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */

/**
 * Exercise 9
 *
 * create a function {handleSelectChange} which will log selected option value
 * in console when you select an option in "select" with id "items"
 */

/**
 * Exercise 10
 *
 * create a function {submitFormHandler} which will get values from form inputs
 * on submit, build an object where property names will be input names,
 * and values, input values and log it in the console
 */

/**
 * Exercise 11
 *
 * create a function {handleScroll} which will get window vertical scroll position
 * on scroll, and log it in the console
 */
