const isOdd = val => val % 2 !== 0;

function someRecursive(a, isOdd) {
    if (a.length === 0) return false;
    if (isOdd(a[0])) return true;
    return someRecursive(a.slice(1), isOdd);
}

console.log(someRecursive([1, 2, 3, 4], isOdd));
console.log(someRecursive([4, 6, 9, 8], isOdd));
console.log(someRecursive([4, 6, 8], isOdd));
console.log(someRecursive([4, 6, 8], val => val > 10));