let arr = [1, 2, 3, 4];


function findMinMax(array) {
    let result = {min: array[0], max: array[0]}

    for (let i = 0; i < array.length; i++) {
        if (array[i] > result.max) {
            result.max = array[i];
        } else if (array[i] < result.min) {
            result.min = array[i];
        }
    }

    return result;
}

console.log(findMinMax(arr));
