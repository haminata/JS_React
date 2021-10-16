/* ===================================== */
/* For these exercises use "for of" loop */
/* ===================================== */

const user = {
    type: "admin",
    firstName: "Alex",
    lastName: "Smith",
    password: "12345",
    age: 26,
    favoriteMovies: ["Interstellar", "The Wolf of Wall Street"],
    parents: {
      mother: {
        firstName: "Julia",
        lastName: "Smith",
      },
      father: {
        firstName: "John",
        lastName: "Smith",
      },
    },
  };

const passingArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18, "panda"];
/**
 * Exercise 1
 *
 * create a function {getIntegersOnly} which takes an array
 * as a param, get all integers from this array and return
 * a new array with these integers. If there is no integers it should return
 * empty array.
 */

const getIntegersOnly = (arrayParam) => {

    let newArray = []
    for(const item of arrayParam){
        if(Number.isInteger(item)){
            newArray.push(item);    
        }
        
    }return newArray;
   
}
getIntegersOnly(passingArray);

/**
 * Exercise 2
 * create a function {getEvenNumbers}, which takes an array of integers
 * and returns a new array with even numbers only, if there is no even
 * integers it should return an empty array
 */

const getEvenNumbers = (arrayParam) => {
    let newArray = [];
    for(const element of arrayParam){
        if(element % 2 === 0){
            newArray.push(element);
        }
    } return newArray;

}

/**
 * Exercise 3
 *
 * create a function {getEvenNumbersFromMixedArray},
 * which takes an array of values with different types and returns
 * a new array with even numbers only, if there is no even integers it
 * should return an empty array
 */

const getEvenNumbersFromMixedArray = (arrayParam) => {
    let newArray = [];
    for(const item of arrayParam){
        if(Number.isInteger(item) && item % 2 === 0){
            newArray.push(item);
        }
    }return newArray

}


/**
 * Exercise 4
 * create a function {getOddNumbers}, which takes an array of integers
 * and returns a new array with odd numbers only, if there is no odd
 * integers it should return an empty array
 */

const getOddNumbers = (arrayParam) => {
    let newArray = [];
    for(const item of arrayParam){
        if(item % 2 === 1){
            newArray.push(item);
        }
    }
    return newArray;
}

/**
 * Exercise 5
 * create a function {evenOddTransform} which takes
 * array of integers as a param. Take each integer
 * and if it's odd add 1, if it's even subtract 1
 *
 * If your param is [1,2,3,4,5] the result should be
 * [2,1,4,3,6]
 */


const evenOddTransform = (arrayParam) => {
    let newArray =[];
    for(const item of arrayParam){
        //check if is odd number
        if(item % 2 === 1 ){
            newArray.push(item +1);
        }else if(item % 2 ===0){
            newArray.push(item - 1);
        }
    }return newArray;
    
}