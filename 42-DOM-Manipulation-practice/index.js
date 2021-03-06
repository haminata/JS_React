/**
 * Exercise 1
 * create a function {createAList}
 *
 * Requirements:
 * 1. create an unordered list with class "list" and add it to the DOM
 * 2. with 1 second interval add list item to ".list" element
 * 3. you should add only 5 list items.
 * 4. list item text should be "Item $"($ - position in the list)
 */

const createAList = () => {
  const ulEl = document.createElement("ul");
  ulEl.className = "list";
  document.body.appendChild(ulEl);

  for (let index = 1; index <= 5; index++) {
    const liEl = document.createElement("li");
    liEl.innerText = `Item ${index}`;

    setTimeout(() => {
      console.log("setTimeout");
      ulEl.appendChild(liEl);
    }, 1000 * index);
  }
};

/**
 * Exercise 2
 *
 * create a function {styleElement}
 *
 * Requirements:
 * 1. select the third list item from "".myList"
 * 2. set background to "green" color
 * 3. set color to "white"
 * 4. set font size to 2em
 */

const styleElement = () => {
  const thirdLi = document.querySelector('.myList li:nth-child(3)');

  thirdLi.style.backgroundColor = 'green';
  thirdLi.style.color = 'white';
  thirdLi.style.fontSize = '2em';
}


/**
 * Exercise 3
 *
 * create a function {removeLastChild}
 * Requirements:
 * 1. select last element from the ".myList"
 * 2. wait 2 seconds and remove the element from the list
 */

const removeLastChild = () => {
  const thirdLi = document.querySelector('.myList li:nth-last-child(1)');
  setTimeout(() => {
    console.log("setTimeout");
    thirdLi.remove();
  }, 2000);
}

/**
 * Exercise 4
 *
 * create a function {createAMessage} which takes a message as parameter
 *
 * Requirements:
 * 1. create p element with class "message"
 * 2. text should be your {message}
 * 2. add it to the DOM
 * 4. after 3s add class "visible"
 * 5. after another 3s add class "hide"
 * 6. after another 2s remove from DOM
 *
 * NOTE: check css file to see how we toggle styles
 * based on class "visible"
 */

const createAMessage = (message) => {
  const pElem = document.createElement('p');
  pElem.classList.add('message');
  pElem.textContent =  pElem.innerText = message;

  document.body.appendChild(pElem);

  setTimeout(() => {
    console.log("setTimeout visible");
    pElem.classList.add('visible');

    // hide
    setTimeout(() => {
      console.log("setTimeout hide");
      pElem.classList.add('hide');

      // remove
      setTimeout(() => {
        console.log("setTimeout DOM");
        pElem.remove();
      }, 2000);

      }, 3000);

  }, 3000);



}