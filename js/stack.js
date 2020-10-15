class Node {
    _value;
    _next = null;
    _previous = null;

    constructor(value, next, previous) {
        this._value = value;
        this._next = next;
        this._previous = previous;
    }

    getNext() {
        return this._next;
    }

    setNext(next) {
        this._next = next;
    }

    setPrevious(previous) {
        this._previous = previous;
    }

    getPrevious() {
        return this._previous;
    }

    getValue() {
        return this._value;
    }

}

class Stack {
    _head = null;
    // _tail = null;
    _size = 0;

    push(value) {
        const newNode = new Node(value, null, null);
        if (this._size > 0) {
            newNode.setNext(this._head);
        }
        this._head && this._head.setPrevious(newNode);
        this._head = newNode;
        this._size++;
    }

    pop() {
        if (this._size > 0) {
            const returningHead = this._head;
            this._head = this._head.getNext();
            this._head.setPrevious(null);
            returningHead.setNext(null);
            returningHead.setPrevious(null);
            this._size--;
            return returningHead;
        }
    }

    peek(node) {
        return this._head;
    }

    toArray() {
        const returningArray = [];
        let tempNode = this._head;
        for (let i = 0; i < this._size; i++) {
            returningArray.push(tempNode.getValue());
            tempNode = tempNode.getNext();
        }
        return returningArray
    }
}

module.exports = Stack;
