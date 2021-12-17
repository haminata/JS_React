/* ex: multipliedEvenNumbers([4,3,6,8,5,7])
* result: [24, 3, 48, 16, 5, 7]
*/

const input = [6,5,7,10,12,9]

let arrayMultiplication = (inputArray) => {
    console.log("Running function:", inputArray);
    let result =[];

    for(let i = 0; i <inputArray.length; i++){
        let elementA = inputArray[i];
        if(elementA % 2 ==0){
           let b = findNextEven(inputArray, i+1);
            result.push(elementA * (b || 2));
        }else{
            result.push(elementA);
        }
    }

    return result;

}

function findNextEven(arrIn, inAdd ){
    for(let j = inAdd; j < arrIn.length; j++){
        if(arrIn[j] % 2 ==0){
           return arrIn[j];

            break;
        }
    }

}

console.log("running script ...", arrayMultiplication(input));