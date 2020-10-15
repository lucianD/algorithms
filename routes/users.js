const express = require('express');
const router = express.Router();
const DynamicArray = require('../js/dynamic-array');
const Stack = require('../js/stack');
const selectionSort = require('../js/sort/selection');
const mergeSort = require('../js/sort/merge');
const quickSort = require('../js/sort/quick');
const { bubbleSort, bubbleSortRecursive} = require('../js/sort/bubble');
const binarySearch = require('../js/search/binary');

/* GET users listing. */
router.get('/', async function(req, res, next) {
    const users = getUsers();
    const shrinkedUsers = getUsers();
    await shrinkedUsers.removeAt(2);

    const stackedUsers = getStackedUsers();
    const stackedUsersShrinked = getStackedUsers();
    stackedUsersShrinked.pop();
    stackedUsersShrinked.pop();
    let originalArray = generateArray();

    res.render('users', {
        users: users.toArray(),
        shrinkedUsers: shrinkedUsers.toArray(),
        stackedUsers: stackedUsers.toArray(),
        stackedUsersShrinked: stackedUsersShrinked.toArray(),
        // bubbleSortRecursive: testSortReturnDelta(bubbleSortRecursive, originalArray.slice()),
        // bubbleSort: testSortReturnDelta(bubbleSort, originalArray.slice()),
        // mergeSort: testSortReturnDelta(mergeSort, originalArray.slice()),
        // selectionSort: testSortReturnDelta(selectionSort, originalArray.slice()),
        quickSort: testSortReturnDelta(quickSort, originalArray),
        find51: binarySearch(51, quickSort(originalArray)),
    });
});

module.exports = router;

function getUsers() {
    const users = new DynamicArray(1);
    users.add({name: 'Lucian Doghi', age: 33});
    users.add({name: 'Crenguta Doghi', age: 30});
    users.add({name: 'Filip Doghi', age: 1});
    users.add({name: 'Oscar Doghi', age: 4});

    return users;
}

function getStackedUsers() {
    const stack = new Stack();
    stack.push({name: 'Lucian Doghi', age: 33});
    stack.push({name: 'Crenguta Doghi', age: 30});
    stack.push({name: 'Filip Doghi', age: 1});
    stack.push({name: 'Oscar Doghi', age: 4});

    return stack;
}

function testSortReturnDelta(fn, array) {
    const before = new Date();
    fn(array);
    const after = new Date();
    return (after.getTime() - before.getTime())/1000;
}

function generateArray() {
    // let length = Math.round(Math.random() * 100000);
    let length = 1000;
    let array = new Array(length);
    // for (let i = 0; i < length; i++) {
    //     array[i] =  Math.floor(Math.random() * 2001) - 1000;
    // }
    console.log('generated= ', array);
    // return array
    return [3, 1, 5]
}