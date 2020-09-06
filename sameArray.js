same = (a1, a2) => {
    if (a1.length !== a2.length) return false;
    // Method 1: Using nested loop.
    /* for (let i of a1) {
        for (let j of a2) {
            // console.log(`i: ${i}, j: ${j}`);
            if (i ** 2 === j) {
                a2.splice(a2.indexOf(j), 1);
                // console.log('a2 after splice: ' + a2);
            }
        }
    } 
    if (a2.length === 0) return true;
    else return false;
    */

    // Method 2: Using single loop but with built-in methods (indirectly increasing time).
    /* for (let i of a1) {
        let correctIndex = a2.indexOf(i ** 2);
        if (correctIndex === -1) return false;
        a2.splice(correctIndex, 1);
    }
    return true; */

    // Method 3: Using 3 single loops; O(n)
    let freqCount1 = {}, freqCount2 = {};
    for (let item of a1) freqCount1[item] = (freqCount1[item] || 0) + 1;
    for (let item of a2) freqCount2[item] = (freqCount2[item] || 0) + 1;
    for (let key in freqCount1) {
        if (!(key ** 2 in freqCount2)) return false; // if square of item in FC1 is not present in FC2.
        if (freqCount1[key] !== freqCount2[key ** 2]) return false; // if there count is not equal.
    }
    console.log(freqCount1);
    console.log(freqCount2);
    return true;
}

console.log(same([5, 2, 3], [4, 25, 9]));
console.log(same([5, 2, 3], [1, 9]));
console.log(same([1, 2, 2, 3], [9, 1, 4, 4]));
console.log(same([1, 2, 3], [4, 1, 4]));
