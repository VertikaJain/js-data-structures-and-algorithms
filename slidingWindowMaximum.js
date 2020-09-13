// LeetCode solution (problem 239)

var maxSlidingWindow = function (a, k) {
    if (k === 1) return a;
    let i = 0, j = 1, max = a[i], tA = [], c = 1;
    while (j < a.length) {
        if (c < k) {
            max = Math.max(max, a[j]);
            c++;
            j++;
        }
        if (c === k) {
            tA.push(max);
            i++;
            max = a[i];
            j = i + 1;
            c = 1;
        }
    }
    return tA;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1], 1));
console.log(maxSlidingWindow([1, -1], 1));