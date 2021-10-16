/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */
 
 
const logProperties = (objectParam) => {
    for(const property in objectParam){
        console.log(`Property name: ${property}`)
    }
}


/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */

const getAllValues = (objectParam) =>{
    const values = []
    for(const key in objectParam){
        values.push(objectParam[key])
    }
    return values
}

/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */

const getAllValuesAsString = (objectParam) =>{
    const values = []
    for(const prop in objectParam){
        values.push(objectParam[prop]);
        
    }return values.join(' ');

}


/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * "{key}: {value}"
 */
 
 const propertyValueString = (objectParam) => {
 
    for(let prop in objectParam){
        console.log(`${prop}: ${objectParam[prop]}`);
    } 
 }
 