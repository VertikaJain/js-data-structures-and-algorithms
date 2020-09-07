countUniqueValues = arr => {
    let i = 0, j = i + 1;
    if (arr.length === 0) return 0;
    while (j < arr.length) {
        if (arr[i] === arr[j]) j++;
        else {
            i++;
            arr[i] = arr[j];
            j++;
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1, 2, 3, 3, 3, 3, 4, 6, 6]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 4]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 8]));