// Examples
/**
 * with Inline function callback
 *
 * const callback = () => {}
 * array.foreach(callback)
 */


/**
 * with anonymous function callback
 *
 * array.foreach(arrayItem => {})
 */

/* ======================== */
/* external callback version */
/* ======================== */

/**
 * Exercise 1
 * create an arrow function {forEachCallback} that takes
 * param and logout it.
 *
 * create a function {logAllWithExternalCallback} that will take an array
 * and with forEach log every element from your array
 * use {forEachCallback} as a callback function for forEach
 */
const forEachCallback = (callBackParam) => {
    console.log(callBackParam);
}

function logAllWithExternalCallback(arParam) {

    arParam.forEach(forEachCallback)

}

/* =========================== */
/* anonymous callbacks version */

/* =========================== */
/**
 *
 * create a function {logAllWithAnonymousCallback} which will
 * do same thing as {logAllWithExternalCallback} but with
 * anonymous callback
 */

function logAllWithAnonymousCallback(arrPa) {
    arrPa.forEach((callBackParam) => {
        console.log(callBackParam);
    });

}

/**
 * Exercise 2
 *
 * module 3
 *
 * create a arrow function {dividableBy3} that takes an array
 * of numbers as a param. With forEach, filter it and return a new
 * filtered array what will contain only numbers that dividable by 3
 * without remainder
 *
 * Ex: dividableBy3([3,7,9,11]) => return [3,9]
 */


const dividableBy3 = (arrParam) => {
    let result = [];

    arrParam.forEach((num) => {
        if (num % 3 === 0) {
            result.push(num);
        }
    })
    return result
}

/**
 * Exercise 3
 * create an arrow function {oddNumbersSum} which takes an array
 * of numbers and return sum of all odd numbers.
 *
 * Use forEach to loop through the array.
 */

const oddNumbersSum = (num) => {
    let sum = 0;
    num.forEach((element) => {
        if (element % 2 === 1) {
            sum += element
        }
    })
    return sum;
}

/**
 * Exercise 4
 * create an arrow function {totalLength} which takes an array
 * with different types. You need to get only strings and return
 * total of their lengths.
 *
 * Use forEach to loop through the array.
 *
 * Ex: ["cat", 5, "dog"] => 6
 */

const totalLength = (arType) => {
    let result = 0;
    arType.forEach((element) =>{
        if(typeof element === "string"){

            result += element.length
        }
    })
    return result;
}