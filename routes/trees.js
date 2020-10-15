const express = require('express');
const router = express.Router();
const { Tree, TreeNode, BinaryTree } = require('../js/tree');

router.get('/', async function (req, res, next) {

    const tree = initializeTree();
    const traversePreOrder = tree.preOrder(tree.getRoot());
    const traverseInOrder = tree.inOrder(tree.getRoot());
    const traversePostOrder = tree.postOrder(tree.getRoot());
    const bfs = tree.bfs(initializeBFSTree().getRoot());
    const binaryTree = initializeBTree();
    const binaryTree2 = initializeBTree2();
    const binaryTree3 = initializeBTree2();
    const binaryTree4 = initializeBTree3();
    binaryTree3.removeBT(8);
    const binaryTree3PreOrder = binaryTree3.preOrder(binaryTree3.getRoot());
    binaryTree3.removeBT(17);
    const binaryTree4PreOrder = binaryTree3.preOrder(binaryTree3.getRoot());
    binaryTree3.removeBT(15);
    const binaryTree5PreOrder = binaryTree3.preOrder(binaryTree3.getRoot());
    const binaryTree6inOrder = binaryTree4.inOrder(binaryTree4.getRoot());
    const range = binaryTree4.rangeSumBST(binaryTree4.getRoot(), 7, 15);
    const range2 = binaryTree4.rangeSumBST2(binaryTree4.getRoot(), 7, 15);

    res.render('trees', {
        title: 'Lucica',
        traversePreOrder,
        traverseInOrder,
        traversePostOrder,
        bfs,
        binaryTreePreOrder: binaryTree.preOrder(binaryTree.getRoot()),
        binaryTreeBfs: binaryTree.bfs(binaryTree.getRoot()),
        find52: binaryTree.findNode(52),
        find51: binaryTree.findNode(51),
        binaryTree2PreOrder: binaryTree2.preOrder(binaryTree2.getRoot()),
        binaryTree2Bfs: binaryTree2.bfs(binaryTree2.getRoot()),
        find15: binaryTree2.findNode(15),
        find10: binaryTree2.findNode(10),
        find8: binaryTree2.findNode(8),
        find12: binaryTree2.findNode(12),
        find20: binaryTree2.findNode(20),
        find17: binaryTree2.findNode(17),
        find25: binaryTree2.findNode(25),
        find19: binaryTree2.findNode(19),
        find0: binaryTree2.findNode(0),
        binaryTree3PreOrder,
        binaryTree4PreOrder,
        binaryTree5PreOrder,
        binaryTree6inOrder,
        range,
        interestRate1: interestRate(6800, 100, 68),
        interestRate2: interestRate(2000, 510, 4),
        interestRate3: interestRate(15000, 364, 48),
    });
});

module.exports = router;


function initializeTree() {
    const nodeA = new TreeNode('A');
    const nodeB = new TreeNode('B');
    const nodeC = new TreeNode('C');
    const nodeD = new TreeNode('D');
    const nodeE = new TreeNode('E');
    const nodeF = new TreeNode('F');

    nodeA.setLeft(nodeB);
    nodeA.setRight(nodeC);
    nodeB.setRight(nodeD);
    nodeC.setLeft(nodeE);
    nodeC.setRight(nodeF);

    return new Tree(nodeA);

}

function initializeBFSTree() {
    const node1 = new TreeNode('1');
    const node2 = new TreeNode('2');
    const node5 = new TreeNode('5');
    const node3 = new TreeNode('3');
    const node4 = new TreeNode('4');
    const node6 = new TreeNode('6');
    const node7 = new TreeNode('7');

    node1.setLeft(node2);
    node1.setRight(node5);
    node2.setLeft(node3);
    node2.setRight(node4);
    node5.setLeft(node6);
    node5.setRight(node7);

    return new Tree(node1);
}

function initializeBTree() {
    const binaryTree = new BinaryTree(50);

    binaryTree.insertBT(76);
    binaryTree.insertBT(21);
    binaryTree.insertBT(4);
    binaryTree.insertBT(32);
    binaryTree.insertBT(100);
    binaryTree.insertBT(64);
    binaryTree.insertBT(52);

    return binaryTree;
}

function initializeBTree2() {
    const binaryTree = new BinaryTree(15);

    binaryTree.insertBT(10);
    binaryTree.insertBT(8);
    binaryTree.insertBT(12);
    binaryTree.insertBT(20);
    binaryTree.insertBT(17);
    binaryTree.insertBT(25);
    binaryTree.insertBT(19);


    return binaryTree;
}
function initializeBTree3() {
    const binaryTree = new BinaryTree(10);

    // binaryTree.insertBT(10);
    binaryTree.insertBT(5);
    binaryTree.insertBT(15);
    binaryTree.insertBT(3);
    binaryTree.insertBT(7);
    // binaryTree.insertBT(null);
    binaryTree.insertBT(18);


    return binaryTree;
}

function remain(rate, price, monthPay, time) {
    while (time > 0) {
        price = price * (1 + rate) - monthPay;
        time -= 1;
    }

    return price;
}

function interestRate(price, monthPay, time) {
    let low = 0.0;
    let high = (time * monthPay - price) * 1.0 / price;

    while (Math.abs(high - low) > 1e-14) {
        let mid = low + (high - low) / 2;
        console.log('low, mid, high' , low, mid, high);
        let rmn = remain(mid, price, monthPay, time);
        console.log('r=', rmn);
        console.log('Math.abs(high - low)=', Math.abs(high - low));
        if (rmn > 0) {
            high = mid;
        } else if (rmn === 0) {
            return mid * 100 * 12;
        } else {
            low = mid;
        }
    }
    return low * 100 * 12;
}