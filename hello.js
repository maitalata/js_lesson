function findInArray(x, item) {
    for (i = 0; i < x.length; i++) {
        if (x[i] == item) {
            return true
        }
    }

    return false;
}

console.log("Hello World");
console.log(findInArray([2, 6, 12, 7, 2, 8, 27, 18, 172], 9));