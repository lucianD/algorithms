function quick(arr) {
    // console.log('arr=', arr);
    const length = arr.length;
    if (length <= 1) {
        return arr
    }

    const pivot = arr.splice(0, 1);
    let list1 = arr.filter(item => item < pivot);
    let list2 = arr.filter(item => item >= pivot);
    list1 = quick(list1);
    list2 = quick(list2);

    // console.log('arr=', merged);
    return list1.concat(pivot).concat(list2);
}

module.exports = quick;