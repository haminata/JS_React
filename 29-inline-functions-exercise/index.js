/* ================ */
/* INLINE FUNCTIONS */
/* ================ */

/**
 * Exercise 1
 *
 * create an inline function {reverseArray} that takes array as a param
 * and return reversed array. If you don't pass any param,
 * use default value "[]", is you pass any other type than array
 * return a string "Please, pass correct type".
 */

function reverseArray( arrayParam = [])  {
    if(!Array.isArray(arrayParam)){
        return "Please, pass correct type"
    }else{
        return arrayParam.reverse();
    }


}

/**
 * Exercise 2
 *
 * create an inline function {nextOddNum} that takes number as a param
 * and return next odd number.
 */

function nextOddNum(numParam =2){
    if(numParam % 2 ==0){
        numParam += 1;
    }else{
        numParam += 2;
    }
    return numParam;


}

/**
 * Exercise 3
 *
 * create an inline function {isLessThan100} which should take
 * 2 numbers as a param.
 * Given two numbers, return true if the sum of both numbers is
 * less than 100. Otherwise return false.
 */

function isLessThan100(num1 = 0, num2 =0) {
    let total = num1 + num2;
    if(total <100){
        return true;
    }else{
        return false;
    }
}

/**
 * Exercise 4
 * create an inline function {incrementBy5} which takes
 * a number as a param, add 5 and return the result.
 */

function incrementBy5 (num = 0){
   const total = num +5;
   return total;
}

/**
 * Exercise 5
 * create a function {incrementAllBy5} which takes array
 * of numbers as a first param and a incrementor function as a second param.
 * Then apply incrementor function to each element in your array and
 * return the result
 */

const incrementAllBy5 = (arrayParam = [], incrementBy5) =>{
    let result= [];
    for(element of arrayParam){
        result.push(incrementBy5(element));
    }
    return result;
}
