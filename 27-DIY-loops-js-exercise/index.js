const dataTypes = [
  4,
  "hello",
  "2",
  { name: "Alex" },
  54,
  "random",
  23,
  "kitten",
  13.21,
  [1, 2, 3, 4],
  { type: "boolean" },
  [32, 52],
  43.1,
];

/**
 * Exercise 1
 *
 * create a function {sortedData} which will take data as param
 * (you can use){dataTypes} and sort it by type:
 * 1. strings,
 * 2. integers,
 * 3. floats,
 * 4. arrays,
 * 5. objects
 *
 * and return object with property names equals types, and values should be
 * arrays with  corespondent data
 *
 * Ex: const data = [5, 'kitten', 3.12, 12]
 *
 * result:
 * {
 *  integers: [5, 12],
 *  strings: ['kitten'],
 *  floats: [3.12]
 * }
 */

const sortedData = (dataParam) =>{
  let dataSorted = {};
  
  for(const item of dataParam){
  
    if(Number.isInteger(item)){
      if(dataSorted.integers){
        dataSorted.integers.push(item);
      }else{
        dataSorted.integers =[item];
      }

      
    }else if(typeof item == 'string'){
      if(dataSorted.strings) {
        dataSorted.strings.push(item);
      }else{
        dataSorted.strings = [item];
      }

      
    }else if(typeof  item == 'number'){
      if(dataSorted.floats){
        dataSorted.floats.push(item);
      }else {
        dataSorted.floats =[item];
      }

      
    }else if(Array.isArray(item)){
      if(dataSorted.arrays){
        dataSorted.arrays.push(item);
      }else{
        dataSorted.arrays = [item];
      }

     
    }else if(typeof item == 'object'){
      if(dataSorted.objects){
        dataSorted.objects.push(item);
      }else{
        dataSorted.objects = [item];
      }
    }
  }
  return dataSorted;

}
console.log(sortedData(dataTypes));



/**
 * Exercise 2
 *
 * create a function {multipliedByNextNumber} which takes
 * an array of numbers and returns a new array where number equals
 * multiplication of number from passed array and the following number.
 * Presume that the following number for the last one is 1.
 *
 * Ex: pass [3,2,6]
 * result: [6, 12, 6]
 */
const passingArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18, "panda"];
const multipliedByNextNumber = (arraParam) =>{

  let newArray = [];
  let tempArray = [];
  for(let i = 0; i <arraParam.length; i++){

  }

}


/**
 * Exercise 3
 *
 * create a function {multipliedEvenNumbers} which multiply
 * even number from passed array with following even number.
 * If there is no following even numbers, multiply by 2.
 *
 * return new numbers as new array
 *
 * ex: multipliedEvenNumbers([4,3,6,8,5,7])
 * result: [24, 3, 48, 16, 5, 7]
 */
 const multipliedEvenNumbers = () =>{}
/**
 * Exercise 4
 *
 * create a function {multipliedOddNumbers} which multiply
 * even number from passed array with following even number.
 * If there is no following even numbers, multiply by 1.
 *
 * return new numbers as new array
 *
 * ex: multipliedEvenNumbers([4,3,6,8,5,7])
 * result: [4, 15, 6, 8, 35, 7]
 */
 const multipliedOddNumbers = () =>{}
/**
 * Exercise 5
 *
 * create a function {multipliedEvenOddNumbers} which will take
 * an array and type "even" or "odd".
 *
 * If you pass "even" do the same what you have for exercise 3
 * if you pass "odd" do the same what you have for exercise 4
 * else return original array.
 */

 const multipliedEvenOddNumbers = () =>{}