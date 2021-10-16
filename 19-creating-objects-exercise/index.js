/**
 * Exercise 1
 *
 * create an object {user}, which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */
 
 const user ={
    firstName: 'Nura',
    lastName: 'Janner',
    age:30
 }

console.log(user);
/**
 * Exercise 2
 *
 * create an object {allTypes} with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */

const allTypes = {
    string : '" "',
    number: 9,
    array: ['[]'],
    object:{},
    function: function(){} ,
    boolean:false
}

console.log(allTypes);

/**
 * Exercise 3
 *
 * create a function {createMovieObject} which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */
 


const createMovieObject =(name, rating, ticketPrice) =>{
    const movieInfo = {
        name: name,
        rating: rating,
        ticketPrice: ticketPrice
    };
    
    
    return movieInfo
    

}
const movie = createMovieObject('Titanic', 5, '£10')
console.log(movie)