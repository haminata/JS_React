passArr = [4,3,6,8,5,7];

const findB = (inArray, iAtFirstLoop) => {
    for(let i = iAtFirstLoop; i <inArray.length; i++) {
        if (inArray[i] % 2 == 0) {
            return inArray[i];
            break;
        }
    }
}

const arrayMultiplication = (inputArray) => {
    console.log("Running function:", inputArray);
    let result = [];
    for(let i = 0; i <inputArray.length; i++){
        let outputA = inputArray[i];
        let outputB = null
        if(outputA % 2 === 0){
            outputB = findB(inputArray, i+1)
            if(outputB == null){
                outputB = 2;
            }
            result.push(outputA * outputB);
        }else{
            result.push(outputA);
        }
    }
    return result;
};


console.log("running script ...", arrayMultiplication(passArr));


function findBx (inArray, iAtFirstLoop){
    for(let i = iAtFirstLoop; i <inArray.length; i++){
        if(inArray[i] % 2 ==0){
            return inArray[i];
            break;
        }
    }
}