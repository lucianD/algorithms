function selection(arr) {
    console.log('merge sort: arr=', arr);
    let length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        let index = i;
        let min = arr[i];

        for (let j = i + 1; j < length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                index = j;
            }
        }
        if (index !== i) {
            arr[index] = arr[i];
            arr[i] = min;
        }

    }
    console.log('arr=', arr);

    return arr;
}

module.exports = selection;