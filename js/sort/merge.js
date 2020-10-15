// function merge(list1, list2) {
//     let mergedList = [];
//     while (list1.length > 0 && list2.length > 0) {
//         if (list1[0] < list2[0]) {
//             mergedList.push(list1.splice(0, 1)[0])
//         } else {
//             mergedList.push(list2.splice(0, 1)[0])
//         }
//     }
//     if (list1.length) {
//         mergedList = mergedList.concat(list1)
//     }
//     if (list2.length) {
//         mergedList = mergedList.concat(list2)
//     }
//     return mergedList;
// }

function merge(arr) {
    // console.log('arr=', arr);
    const length = arr.length;
    if (length <= 1) {
        return arr
    }

    const middleIndex = Math.ceil((length - 1) / 2);
    let list1 = arr.slice(0, middleIndex);
    let list2 = arr.slice(middleIndex);
    list1 = merge(list1);
    list2 = merge(list2);

    // console.log('arr=', merged);
    return merge(list1, list2);
}

module.exports = merge;
