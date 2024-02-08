let arr = [1,-2,3,4,5,6,-7,8,9,10,11,-12,13,60,14,15];

function maxNumber(arr) {
    let value = arr[0];
    let max_value = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > value) {
            value = arr[i];
            max_value = value;
        }
    }
    return max_value;
}

function sumPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0)
            sum = sum + arr[i]
        }
        return sum
}


function negativyNumbers(arr) {
    let result_array = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            result_array.push(arr[i])
        }
    }
    return result_array
}

console.log(maxNumber(arr))
console.log(sumPositiveNumbers(arr))
console.log(negativyNumbers(arr))
