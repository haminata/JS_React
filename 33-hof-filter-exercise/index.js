/**
 * Exercise 1
 *
 * create a function {noStrings} that takes an array
 * as a parameter and return an array but without strings
 */
function checkAdult(num) {
    return typeof num !== "string";
}
const noStrings = (arParam) => {
  return arParam.filter(checkAdult);
}

/**
 * Exercise 2
 *
 * create a function {justStrings} that takes an array
 * as a parameter and return an array of strings by removing
 * every other type
 */

const justStrings = (arParam) => {
    return arParam.filter((num)=>{
        return typeof num == "string"
    })

}

/**
 * Exercise 3
 *
 * create a function {justStringsLongerThan5} that takes
 * an array as a parameter and return an array of strings
 * that are longer than 5 characters
 */

const justStringsLongerThan5 = (arPar) => {
   return arPar.filter((num)=>{
        return typeof num =="string" && num.length >5;
    })

}

/**
 * Exercise 4
 *
 * create a function {numbersMoreThan13} that takes
 * an array as a parameter and return an array of numbers
 * that are more than 13
 */

const numbersMoreThan13 = (arPar) => {
    return arPar.filter((num)=>{
        return Number.isInteger(num) && num > 13;
    });

}

/**
 * Exercise 5
 *
 * create a function {objectsOnly} that takes
 * an array as a parameter and return an array of objects
 */

const objectsOnly = (arPar) => {
  return arPar.filter((num)=>{
      return typeof num == 'object';
  })
}

/**
 * Exercise 6
 *
 * create a function {truthyOnly} that takes
 * an array as a parameter and return an array of truthy values.
 * IMPORTANT: You still need to keep number 0.
 */

const truthyOnly = (arPar) => {
  return arPar.filter((num)=>{
      return num || num === 0 ;
  })
}