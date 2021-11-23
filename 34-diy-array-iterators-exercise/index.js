// 
/**
 * !!! IMPORTANT !!!
 * 
 *
 */

/**
 * Exercise #1
 *
 * create a function forEach(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is
 * passed each element and the index.
 *
 */

const forEach = (array, callback) => {
    for (let i = 0; i < array.length ; i++) {
        callback(array[i], i);

    }
}

/**
 * Exercise #2
 *
 * create a function map(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * whatever was returned from each
 * time the callback was invoked.
 *
 */
const map = (array, callback) => {
    let result =[];
    for (let i = 0; i < array.length; i++) {
       result.push(callback(array[i], i)) ;
    }
    return result;
}

/**
 * Exercise #3
 *
 * create a function filter(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * _only_ the elements for which the
 * callback returned a truthy value.
 *
 */

const filter = (array, callback) => {
    let result = [];
    for (let i = 0; i < array.length ; i++) {
       let truthy = callback(array[i], i);
        if(truthy){
            result.push(array[i]);
        }
    }
    return result;

}

/**
 * Exercise #4
 *
 * create a function find(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _first element_
 * for which the callback returns a
 * truthy value.
 *
 */

const find = (array, callback) => {
    for (let i = 0; i <array.length ; i++) {
        let truthy =  callback(array[i], i);
        if(truthy){
            return array[i];
        }
    }
}

/**
 * Exercise #5
 *
 * findIndex(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _index of
 * the first element_ for which the
 * callback returns a truthy value.
 *
 */

const findIndex = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        let truthy =  callback(array[i], i);
        if(truthy){
            return i;
        }
    }
}

/**
 * Exercise #6
 *
 * every(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if every time the
 * callback was invoked it returned
 * a truthy value.
 *
 */

const every = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
         truthy = callback(array[i], i);
        if(!truthy){
            return false;
        }
    }
    return true
}

/**
 * Exercise #7
 *
 * some(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if _any_ time the
 * callback was invoked it returned
 * a truthy value.
 *
 */

const some = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        truthy = callback(array[i], i);
        if(truthy){
            return true;
        }
    }
    return false;
}

/**
 * Exercise #8
 *
 * reduce(array, callback, initialValue)
 *
 * Reduce is often used for combining
 * values together.
 *
 * `reduce` should take 3 arguments:
 * `array`, `callback` and `initialValue`.
 *
 * The callback is invoked for every
 * element in the array and is passed
 * **the current cumulative value**,
 * each element and the index. Whatever
 * the callback returns is the new
 * cumulative value. The function
 * should return the final cumulative
 * value.
 *
 */

const reduce = (array, callback, initialValue=0) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
        result = callback(result, array[i], i);
    }

    return result;
}