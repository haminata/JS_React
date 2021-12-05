// install and  import "readline-sync" npm package before you do exercises
const readlineSync = require('readline-sync');
/**
 * Exercise 1
 *
 * ask user for a name and assign a response to variable {name}
 */
 let name = readlineSync.question('May I have your first name, please?: ');
//===== DO NOT TOUCH THIS BLOCK =====
console.log(`Hi ${name}!`);
console.log("=====================");
console.log(`Let me do math for you!`);
console.log("=====================");
//===================================

/**
 * Exercise 2
 *
 * offer user to do some math, ask to provide a math symbol and
 * offer a few options: +, -, * or /
 * Save response to {selectedSymbol} variable.
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get correct symbol
 */
let selectedSymbol = readlineSync.question('Provide a math symbol, here a few options: +, -, * or /: ');

const symbols =[ '+', '-', '*' ,'/'];

while(!symbols.includes(selectedSymbol)){

  selectedSymbol = readlineSync.question('Please provide a math symbol:');
}

/**
 * Exercise 3
 *
 * ask user for the first number and assign response to a variable {number1}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */

let number1 = readlineSync.question('Please provide first number: ')

while(!Number.isInteger(parseInt(number1))){
    number1 = readlineSync.question('Must be a number: ');
}
/**
 * Exercise 4
 *
 * ask user for the second number and assign response to a variable {number2}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */

let number2 = readlineSync.question('Please provide second number: ')

while(!Number.isInteger(parseInt(number2))) {
    number2 = readlineSync.question('Must be a number: ');
}
/**
 * Exercise 5
 *
 * take numbers that user provided to you and do math based on user
 * selected symbol.
 *
 * show the result to the user
 */

if(selectedSymbol.includes('-')){
    result= number1 - number2;
}else if(selectedSymbol.includes('+')){
    result= number1 + number2;
}else  if(selectedSymbol.includes('*')){
    result= number1 * number2;
}else if(selectedSymbol.includes('/')){
    result= number1 / number2;
}

console.log("=====================");
console.log(`Here you go, the result is ${result}`);
