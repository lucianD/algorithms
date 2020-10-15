class TreeNode {
    _value;
    _left = null;
    _right = null;

    constructor(value, left, right) {
        this._value = value;
        this._left = left;
        this._right = right;
    }

    getValue() {
        return this._value;
    }
    setValue(value) {
        return this._value = value;
    }

    getLeft() {
        return this._left
    }
    getRight() {
        return this._right
    }

    setLeft(node) {
        this._left = node;
    }
    setRight(node) {
        this._right = node;
    }

    isLeaf() {
        return !this.getLeft() && !this.getRight()
    }

}

class Tree {
    _root = null;

    constructor(root) {
        if (root instanceof TreeNode) {
            this._root = root;
        } else {
            throw "Root needs to be an instance of TreeNode";
        }
    }

    getRoot() {
        return this._root;
    }

    preOrder(node, result) {
        if (!node) {
            return '';
        }
        if (!result) {
            result = [];
        }
        // result = result ? result + ' ' + node._value : node._value;
        result.push(node._value);
        console.log(node._value);
        node._left && this.preOrder(node._left, result);
        node._right && this.preOrder(node._right, result);

        return result;
    }
    inOrder(node, result) {
        if (!node) {
            return '';
        }
        if (!result) {
            result = [];
        }
        // result = result ? result + ' ' + node._value : node._value;
        console.log(node._value);
        node._left && this.inOrder(node._left, result);
        result.push(node._value);
        node._right && this.inOrder(node._right, result);

        return result;
    }
    postOrder(node, result) {
        if (!node) {
            return '';
        }
        if (!result) {
            result = [];
        }
        // result = result ? result + ' ' + node._value : node._value;
        console.log(node._value);
        node._left && this.postOrder(node._left, result);
        node._right && this.postOrder(node._right, result);
        result.push(node._value);

        return result;
    }

    bfs(root) {
        let queue = [];
        const result = [];
        queue.push(root);

        while (queue.length > 0) {
            const node = queue.splice(0, 1)[0];
            console.log(node.getValue());
            result.push(node.getValue());

            if (node.getLeft()) {
                queue.push(node.getLeft())
            }
            if (node.getRight()) {
                queue.push(node.getRight())
            }
        }

        return result;
    }

}

class BinaryTree extends Tree {

    constructor(value) {
        super(new TreeNode(value));
    }

    insertBT(value) {
        this._insertBT(this._root, value);
    }
    removeBT(value) {
        this._removeBT(this._root, value);
    }
    _removeBT(node, value, parent) {
        if (value < node.getValue()) {
            if (node.getLeft()) {
                this._removeBT(node.getLeft(), value, node);
            } else {
                return false;
            }
        } else if (value > node.getValue()) {
            if (node.getRight()) {
                this._removeBT(node.getRight(), value, node);
            } else {
                return false;
            }
        } else {
            if (node.isLeaf()) {
                if (parent.getLeft() === node) {
                    parent.setLeft(null);
                } else {
                    parent.setRight(null);
                }
            } else if (node.getLeft() && !node.getRight()) {
                if (parent.getLeft() === node) {
                    parent.setLeft(node.getLeft())
                } else {
                    parent.setRight(node.getLeft())
                }
            } else if (!node.getLeft() && node.getRight()) {
                if (parent.getLeft() === node) {
                    parent.setLeft(node.getRight())
                } else {
                    parent.setRight(node.getRight())
                }
            } else {
                const minRightValue = findMinValue(node.getRight());
                node.setValue(minRightValue);
                this._removeBT(node.getRight(), minRightValue);
            }
        }

    }

    findNode(value) {
        return this._findNode(this._root, value);
    }

    _findNode(node, value) {
        let nodeValue = node.getValue();
        if (nodeValue > value && node.getLeft()) {
            return  this._findNode(node.getLeft(), value);
        } else if (nodeValue < value && node.getRight()) {
            return this._findNode(node.getRight(), value);
        }

        return nodeValue === value
    }

    _insertBT(node, value) {
        if (!this._root) {
            this._root = new TreeNode(value, null, null);
        } else {
            const nodeValue = node.getValue();
            if (value < nodeValue) {
                if (!node.getLeft()) {
                    node.setLeft(new TreeNode(value, null, null));
                } else {
                    this._insertBT(node.getLeft(), value);
                }
            } else {
                if (!node.getRight()) {
                    node.setRight(new TreeNode(value, null, null));
                } else {
                    this._insertBT(node.getRight(), value);
                }
            }
        }
    }

    rangeSumBST(root, L, R, sum) {
        if (!sum) {
            sum = Number(0);
        }
        if (!root) {
            return sum;
        }
        console.log(root._value);
        if (root._value < L) {
            return this.rangeSumBST(root.getRight(), L, R, sum);
        } else if (root._value > R) {
            return this.rangeSumBST(root.getLeft(), L, R, sum)
        } else {
            sum += root._value;
            console.log('sum=', sum);
            sum = this.rangeSumBST(root.getLeft(), L, R, sum)
            sum = this.rangeSumBST(root.getRight(), L, R, sum)
            // return root._value + sum;
        }
        console.log('sumFInal=', sum);

        return sum;
    };
    rangeSumBST2(root, L, R, sum) {
        if (!sum) {
            sum = Number(0);
        }
        if (!root) {
            return sum;
        }

        const val = root.getValue();
        if (val >= L && val <= R) {
            sum += val;
        }
        if (val > L && root.getLeft()) {
            sum = this.rangeSumBST2(root.getLeft(), L, R, sum);
        }
        if (val < R && root.getRight()) {
            sum = this.rangeSumBST2(root.getRight(), L, R, sum)
        }
        return sum;
    };
}

function findMinValue(node) {
    if (node.getLeft()) {
        return findMinValue(node.getLeft());
    }
    return node.getValue();
}

module.exports = { Tree, TreeNode, BinaryTree };

/*

/!**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *!/
/!**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 *!/
var rangeSumBST = function(root, L, R) {
    const arrayInOrderByRange = inOrderByRange(root, L, R, []);
    console.log(arrayInOrderByRange);
    return arrayInOrderByRange.reduce((sum, item) => sum + item)
};

var inOrderByRange = function(root, L, R, result) {
    if (!root) {
        return;
    }

    if (root.val < L) {
        return inOrderByRange(root.right, L, R, result);
    } else if (root.val > R) {
        return inOrderByRange(root.left, L, R, result)
    } else {
        inOrderByRange(root.left, L, R, result)
        result.push(root.val)
        inOrderByRange(root.right, L, R, result)
    }

    return result;
}*/
