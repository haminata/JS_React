// OPEN index.html IN YOUR BROWSER
// OPEN DEV TOOLS, OPEN THE CONSOLE TAB
// CALL YOUR FUNCTIONS IN THE CONSOLE TO
// TEST YOUR CHANGES

/**
 * Exercise 1
 * create a function {setTitle} which takes a string as an argument
 * and displays it in the h1
 */


const setTitle = (h1String) => {
    const h1 =  document.getElementsByTagName('h1')[0];
    h1.innerText = h1String
    return h1;
}



/**
 * Exercise 2
 * create a function {appendToTitle} which takes a string as an argument
 * and appends it to existing h1 text
 */

const appendToTitle = (h1StringArg) => {
    const h1 = document.getElementsByTagName('h1')[0];
    h1.innerText =  h1.innerText + h1StringArg;

}


/**
 * Exercise 3
 * create a function {prependToTitle} which takes a string as an argument
 * and prepends it to existing h1 element text
 */

const prependToTitle = (h1StringArg) => {
    const h1 = document.getElementsByTagName('h1')[0];
    h1.innerText = h1StringArg + h1.innerText;


}

/**
 * Exercise 4
 * create a function {setInnerHTMLForDiv} which takes a tag name and text as
 * arguments and uses innerHTML to replace the element inside the div, and the
 * text is displayed inside that element. The element should be the tag name
 * passed into the function
 */

const setInnerHTMLForDiv = (tagName, text) => {
    //grabs the second div element in the html
    const div = document.querySelector('div');

    //creates new tag that's been passed into the function
    const newTag = document.createElement(tagName);

    //that tag it's then applied to the text passed into the function
    newTag.textContent = text;

    //innerHTML only displays the text in between/ outterHTML displays the entire HTML
    div.innerHTML = newTag.outerHTML;

    return newTag;

}

/**
 * Exercise 5
 * create a function {pushPtoDivWithText} which takes a string as an argument
 * and uses innerHTML to add a p tag containing the text into the div
 */

let pushPtoDivWithText = (stringArg) => {
    const div = document.getElementsByTagName('div')[0];

    const pTag = document.createElement('p');
    pTag.textContent = stringArg;
     div.innerHTML =  div.innerHTML + pTag.outerHTML;

}

/**
 * Exercise 6
 *
 * create a function {setSrcToImage} which takes a url and image description
 * as arguments and set it as a src and alt attributes values
 * for existing img
 */

const setSrcToImage = (stringURL, imgDesc) => {
    const img = document.getElementsByTagName('img')[0];

    img.src = stringURL;
    img.alt = imgDesc;
}

/**
 * Exercise 7
 *
 * create a function {setCodersInHoodsLink} which takes 2 arguments, a URL
 * and some text
 *
 * Find the a tag in the page, set the href to the URL and display the text
 *
 * Also add an attribute that opens your page in a new tab
 */

const setCodersInHoodsLink = (stringURL, text) => {
    const aTag = document.getElementsByTagName('a')[0];
    aTag.href = stringURL;
    aTag.innerText = text;

    //the target attribute controls where the link opens - in this case in a new blank tab
    aTag.target = '_blank';

}

/**
 * Exercise 8
 *
 * create a function {disableResetBtn} which will disable button
 * with class "reset"
 */

const disableResetBtn = () => document.getElementsByClassName('reset')[0].disabled = true;


/**
 * Exercise 9
 *
 * create a function {disableBtns} which takes class name as an argument
 * and disable all buttons with this class name
 */

const disableBtns = (className) => {
   const btns =  document.getElementsByClassName(className);

    for (const btn of btns) {
        btn.disabled = true;
    }
}

/**
 * Exercise 10
 *
 * create a function {addClassToLi} which adds the class
 * "list_item_$" (where $ is a position in a list) to each li
 * that is inside the ul with the class "list"
 *
 * NOTE: We've added some CSS so when your classes are added,
 * you will see a difference
 */

const addClassToLi = () => {
    const listOfLi = document.querySelectorAll('ul.list li');

    for (let i = 0; i < listOfLi.length; i++) {
        listOfLi[i].classList.add(`list_item_${i}`);
    }
}

/**
 * Exercise 11
 *
 *  create a function {removeListItemClass} which removes the class
 * "list_item" from all li elements with this class
 */

const removeListItemClass = () => {
    const listOfLi = document.querySelectorAll('li');

    for (let i = 0; i < listOfLi.length; i++) {
        listOfLi[i].classList.remove('list_item');
    }
}

/**
 * Exercise 12
 *
 *  create a function {addId} which takes 2 arguments: an id and
 * a CSS selector. Use to selector to find an element, then add
 * the id to the element
 */

const addId = (idArg, cssSelector) => {
    const elem = document.querySelector(cssSelector);
    elem.id = idArg;
}


/**
 * Exercise 13
 *
 *  create a function {setStyles} which takes 3 arguments
 * 1 - a CSS property name,
 * 2 - property value,
 * 3 - a CSS selector
 *
 * use the selector to find all the elements which match, then
 * set the CSS property to the value
 */

const setStyles = (cssName, prpVal, cssSlect) => {

    const elems = document.querySelectorAll(cssSlect);
    for (const elem of elems) {
        elem.style[cssName] = prpVal;
    }
}
