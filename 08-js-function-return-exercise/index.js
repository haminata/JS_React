/**
 * Exercise 1
 *
 * Create a function `greet` which takes your name as a parameter
 * and return "Hello 'your_name'!"
 */

 const name = "Haminata"

 function greet(name){
  return  "Hello " + name + "!";
 } 
/**
 * Exercise 2
 *
 * Create a function `loginValidation` which takes age(number)
 * and returns "Welcome!" if the age is 18+ and "Sorry, not allowed."
 * if the age is less than 18
 */

let age = 31;
function loginValidation(age){
    if(age >= 18){
        return "Welcome!";
    }else{
        return "Sorry, not allowed.";
    }
}
/**
 * Exercise 3
 *
 * Create a function `minNumber` which takes 2 numbers as params
 * and return the least one.
 */

 const a = 5;
 const b = 10; 

function minNumber(a,b){
    if(a > b){
        return b;
    } else{
        return a; 
    }
}

/**
 * Exercise 4
 *
 * Create a function `randomNumber` which returns an integer between
 * 1 and 10, fraction should be rounded to lower integer
 */
 var theRandomNumber;

 function randomNumber(theRandomNumber){
    return  theRandomNumber = Math.floor(Math.random() * 10) + 1;
}

/**
 * Exercise 5
 *
 * Create a function `getOppositeNumber` that takes a number as a param and
 * returns an opposite number
 */

 const num = 5
 function getOppositeNumber(){
    return -num ;
}