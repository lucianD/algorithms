class DynamicArray {
    _arr = [];
    _len = 0;
    _capacity = 0;

    constructor(capacity) {
        this._capacity = capacity || 16;
        this._arr = new Array(this._capacity);
        console.log('Dynamic Array was created: ', this._arr);
        console.log('Dynamic Array capacity is: ', this._capacity)
    }

    get arr() {
        return this._arr
    }

    add(user) {
        if (this._len + 1 >= this._capacity) {
            this._capacity = this._capacity * 2;
            const newArray = new Array(this._capacity);
            this._arr.forEach((item, index) => newArray[index] = item);
            this._arr = newArray;
        }
        this._arr[this._len++] = user;
    }

    async removeAt(removingIndex) {
        const newArray = new Array(this._len - 1);
        await this._arr.forEach(async (item, idx) => {
            if (idx < removingIndex) {
                newArray[idx] = item;
            } else {
                if (idx > removingIndex) {
                    newArray[idx - 1] = item
                }
            }
        });
        this._arr = newArray;
        this._len--;
    }

    toArray() {
        const returningArray = [];
        for (let i = 0; i < this._len; i++) {
            returningArray.push(this._arr[i])
        }
        return returningArray
    }
}

module.exports = DynamicArray;
