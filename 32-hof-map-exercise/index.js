// ============================================
// ALL IMPLEMENTATIONS SHOULD BE WITH {map} METHOD
// ============================================

/**
 * Exercise 1
 *
 * create an arrow function {convertToPositive} which takes
 * array of numbers, convert all negatives to positives and return
 * a new array.
 */

const convertToPositive = (arNum) => {
    return arNum.map((num) =>{
            return Math.abs(num);
    });
}

/**
 * Exercise 2
 *
 * create an arrow function {getAllNames} which will take
 * an array of users(objects) as parameter and return an
 * array on names
 *
 * Ex: getAllNames([
 *   {name: 'Alex', age: 26},
 *   {name: 'John', age: 25}
 * ]) will return ['Alex', 'John']
 */

const getAllNames = (arUser) => {
    return  arUser.map((element)=>{
        return element.name;

    });
}

/**
 * Exercise 3
 *
 * create a function {greetAll} that takes array of names as a parameter
 * and return a new array of greetings "Hi, {name}!"
 */

function greetAll(arNames) {
   return  arNames.map((element)=>{
       return (`Hi, ${element}!`);
    })
}

/**
 * Exercise 4
 *
 * create a function {multiplyAllNumbers} that takes an array as a param
 * and multiply all numbers inside array by 5 and return the whole array
 * with multiplied numbers
 */

const  multiply5 = (num) =>{

    if(Number.isInteger(num)){
        return num * 5;
    }else {
        return num;
    }

}

const multiplyAllNumbers =(arPa)=> {
    return arPa.map(multiply5);
}