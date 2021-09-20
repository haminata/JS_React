/**
 * Exercise 1
 *
 * create a function "isOdd" which takes a number as a parameter
 * and return a string "Is odd" if it's odd or "Not odd" if it's
 * anything else
 */
const value = 1;
 function isOdd(value){
    if(value%2 !== 0)
        return "Is odd"
    else
        return "Not odd";
    
 
}
/**
 * Exercise 2
 *
 * create a function "isEven" which takes a number as a parameter
 * and return a string "Is even" if it's even or "Not even" if it's
 * anything else
 */

 
 function isEven(value){
    if(value%2 == 0)
        return "Is even"
    else
        return "Not even";
    
 
}
/**
 * Exercise 3
 *
 * create a function "oddOrEven" which takes a number as a parameter
 * and return a string "Is odd" if it's odd or "Is even" if it's even
 */


 function oddOrEven(value){
    if(value%2 == 0)
        return "Is even"
    else
        return "Is odd";
    
 
}

/**
 * Exercise 4
 *
 * create function "roundedNumber" which takes a fraction as a parameter
 * and return rounded integer
 */

const frac = 32.65;
 function roundedNumber(frac){
    return Math.round(frac);
    
 
}

/**
 * Exercise 5
 *
 * create function "roundToLowerInteger" which takes a fraction as a parameter
 * and returns the largest integer less than or equal to a given number
 */


 function roundToLowerInteger(frac){
    return Math.trunc(frac);
    
 
}
/**
 * Exercise 6
 *
 * create function "roundToLargerInteger" which takes a fraction as a parameter
 * and returns rounded number up to the next largest integer
 */


 function roundToLargerInteger(frac){
    return Math.ceil(frac);
    
 
}
/**
 * Exercise 7
 *
 * create function "convertToPositive" which takes a negative number as a parameter
 * and returns same number but positive
 */

 const negtive = -32;
 function convertToPositive(negative){
    return Math.abs(negative);
    
 
}
/**
 * Exercise 8
 *
 * create function "findMaxNumber" which takes a few numbers(at least 4 numbers) as a parameters
 * and returns the maximum number
 */

 const num1 = 2;
 const num2 = 1;
 const num3 = 6;
 const num4 = 8;

function findMaxNumber(num1, num2, num3, num4){

    return Math.max(num1, num2, num3, num4);
    
 
}
/**
 * Exercise 9
 *
 * create function "findMinNumber" which takes a few numbers(at least 4 numbers) as a parameters
 * and returns the minimum number
 */


 function findMinNumber(num1, num2, num3, num4){
    return Math.min(num1, num2, num3, num4);;
    
 
}