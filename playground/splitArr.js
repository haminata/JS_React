

const splitArr = (arr) => {
    let sumAr = 0
    let maxNum = Math.max(arr);
    for (let i = 0; i < arr.length; i++) {
        sumAr += arr[i];
    }


    return sumAr;
    return maxNum;
}

const ar =[1,1,3,4,5]
console.log(splitArr(ar));