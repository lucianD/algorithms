function binary(value, list) {
    let middleIndex = Math.floor(list.length / 2);
    const middle = list[middleIndex];
    if (list.length > 1) {
        if (value < middle) {
            return binary(value, list.slice(0, middleIndex));
        } else if (value > middle) {
            return binary(value, list.slice(middleIndex, list.length));
        }
    }

    return value === middle;
}

module.exports = binary;

