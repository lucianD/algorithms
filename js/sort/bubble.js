function bubble(arr) {
    console.log('arr=', arr);
    let length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[i]) {
                const tmp = arr[j];
                arr[j] = arr[i];
                arr[i] = tmp;
            }
        }
    }
    console.log('arr=', arr);
    return arr;
}
function bubbleSortRecursive(arr) {
    console.log('arr=', arr);
    let length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[i]) {
                const tmp = arr[j];
                arr[j] = arr[i];
                arr[i] = tmp;
            }
        }
    }
    console.log('arr=', arr);
    return arr;
}

module.exports = {bubbleSort: bubble, bubbleSortRecursive};