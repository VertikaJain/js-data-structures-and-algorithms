areThereDuplicates = (...args) => {
    if (args.length === 0) return false;

    // using frequency count method
    /* let freqCount = {};
    for (let item of args) {
        freqCount[item] = (freqCount[item] || 0) + 1;
        if (freqCount[item] > 1) return true;
    }
    return false; */

    // using multiple pointer method
    let i = 0, j = i + 1;
    while (j < args.length) {
        if (args[i] === args[j]) return true;
        // j++;
        if (j++ === args.length - 1) {
            i++;
            j = i + 1;
        }
    }
    return false;

    // one liner solution
    // return new Set(args).size !== args.length;

}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
console.log(areThereDuplicates('a', 'b', 'c', 'd', 'e'));
console.log(areThereDuplicates());