// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {createDOMElement} which takes a tag name
 * as an argument and returns a new DOM element.
 *
 * NOTE: we will use this function for other exercises.
 */

const createDOMElement = (tagName) => {

    return document.createElement(tagName);

}


/**
 * Exercise 2
 *
 * create a function {addPTag} which takes some text as an argument,
 * create a "p" tag which displays the text and appends it to
 * the body of the document
 */

const addPTag = (text) => {
    const pTag = createDOMElement('p');
    pTag.textContent = pTag.innerText = text;
    document.body.appendChild(pTag);
}

/**
 * Exercise 3
 *
 * create a function {addElementWithClass} which takes tag name,
 * text and class name as arguments. It should create an element
 * which displays the text and has the class and appends
 * the element to the body
 */

const addElementWithClass = (tagName, text, className) => {

    const newTag = createDOMElement(tagName);
    newTag.innerText = text;
    newTag.classList.add(className);

    document.body.appendChild(newTag);

}
addElementWithClass('h1', 'HAMINATA CAMARA','test');

/**
 * Exercise 4
 *
 * create a function {addElementWithMultipleClasses} which takes tag name,
 * text and an array of classes. Create an element which displays the
 * text, has the array of classes and append it to the body
 */

const classArgs = ["list_item", "list_item", "list_item"]
const addElementWithMultipleClasses = (tagName, text, arrClasses) => {

    const newTag = createDOMElement(tagName);
    newTag.innerText = newTag.textContent = text;

    for (const className of arrClasses) {
        newTag.classList.add(className);
    }
    document.body.appendChild(newTag);
}
addElementWithMultipleClasses('h4',"EXPERIENCE", classArgs);

/**
 * Exercise 5
 *
 * create a function {buildAList} which takes a few arguments
 * 1 - list type ("ul" or "ol")
 * 2 - a class for the list element
 * 3 - a number of li elements that need to be created
 *
 * Each li should have the text "Item $" (where $ is it's position)
 * Add the list element to the body
 */

const buildAList = (listType, listClass, numOfLi) => {

    const listTypeTag = document.createElement(listType);
    listTypeTag.classList.add(listClass);


    for (let i = 0; i < numOfLi; i++) {

        let liTag = document.createElement('li');
        liTag.innerText =  liTag.textContent = `Item ${i}`;
        listTypeTag.appendChild(liTag);
    }

    document.body.appendChild(listTypeTag);
}

buildAList("ul","Item", 4);


/**
 * Exercise 6
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {prependLiToList} which takes some text and
 * a class as arguments.
 *
 * Create a new li element which displays the text and has the class.
 *
 * Add that li to the list in your page, but the new li must be the
 * FIRST item in the list.
 *
 */

const prependLiToList = (text, classArg) => {

    const ul = document.getElementsByTagName('ul')[0];
    const liTag = document.createElement('li');
    liTag.innerText = text;
    liTag.classList.add(classArg);

    ul.prepend(liTag);

    document.body.appendChild(ul);

}
prependLiToList("first li", "liClass");

/**
 * Exercise 7
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {pushToSelectedPosition} which takes some text,
 * a class and a position (index).
 *
 * Create an li with the text and class.
 *
 * Add the li into the list at the position passed to this function.
 *
 */

const pushToSelectedPosition = (text, className, indexPos) => {
    const li = document.createElement('li');
    li.innerText = text;
    li.classList.add(className);

    const ulElem = document.querySelector('ul')
    const refElem = ulElem.children[indexPos];

    ulElem.insertBefore(li, refElem);

}

/**
 * Exercise 8
 *
 * create a function {deleteChildrenElements} which takes
 * a parent selector and an element selector
 *
 * Find the parent element, then remove any ancestors of that
 * element which match the element selector
 *
 */

const  deleteSelectedElements = (parentSelemets, elemSelec) => {

    const pElement = document.querySelector(parentSelemets);
    const childElems = pElement.querySelectorAll(elemSelec)

    for (const parentSeleElement of childElems) {
            parentSeleElement.remove();
    }

}
deleteSelectedElements('ul');