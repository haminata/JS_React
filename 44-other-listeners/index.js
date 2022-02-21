/**
 * Exercise 1
 *
 * create an event listener which will show
 * a popup(add class "open" to "popup")
 * when you double click on ".trigger"
 */

const selectFrom = document.getElementsByClassName('trigger')[0];
const popup = document.querySelectorAll('.popup')[0];


selectFrom.addEventListener('dblclick', e => {
    popup.classList.add('open');
})



/**
 * Exercise 2
 *
 * create an event listener which will toggle
 * zoom class on image when you double click on
 * image container(".img")
 */
const imageDiv = document.getElementsByClassName('img')[0];
const cat = imageDiv.querySelector('img');


imageDiv.addEventListener('dblclick', e => {
    cat.classList.toggle('zoom');
})


/**
 * Exercise 3
 *
 * create an event listener which will stop/start music player
 * when you switch tab/come back to the tab in the browser.
 * 
 * NOTE: to test please interact with the page, and switch tabs
 */

const playerDiv = document.querySelectorAll('.player')[0];
const srcPlayer = playerDiv.querySelector('source');

document.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState === "visible") {
        srcPlayer.onplaying;
        console.log("tab is active");
    } else {
        srcPlayer.onpause;
        console.log("tab is inactive");
    }
});