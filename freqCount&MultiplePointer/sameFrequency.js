sameFrequency = (n1, n2) => {
    // O(n)
    let tempArr1 = [];
    while (n1 > 0) {
        tempArr1.push(n1 % 10);
        n1 = Math.floor(n1 / 10);
    }
    let tempArr2 = [];
    while (n2 > 0) {
        tempArr2.push(n2 % 10);
        n2 = Math.floor(n2 / 10);
    }
    if (tempArr1.length !== tempArr2.length) return false;
    let fCount1 = {};
    for (let digit of tempArr1) fCount1[digit] = (fCount1[digit] || 0) + 1;
    for (let key of tempArr2) {
        if (!(fCount1[key])) return false;
        fCount1[key]--;
    }
    return true;
}

console.log(sameFrequency(182, 821));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(123456, 654321));
console.log(sameFrequency(22, 222));