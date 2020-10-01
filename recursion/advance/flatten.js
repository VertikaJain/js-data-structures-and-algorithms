// let a2 = [];
function flatten(arr) {
    let newArr = [];
    if (arr.length === 0) return arr;
    if (typeof arr[0] == "number")
        newArr.push(arr[0]);
    else
        newArr = newArr.concat(flatten(arr[0]));

    newArr = newArr.concat(flatten(arr.slice(1)));
    return newArr;

    /* USING LOOP with RECURSION
    for (i of a) {
        if (typeof i == "number") {
            a2.push(i);
        }
        else {
            flatten(i)
        }
    }
    return a2; */
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]