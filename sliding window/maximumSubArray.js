// Leetcode
maxSubArray = a => {
    let maxSum = a[0], i = 0, j = 1, sum = a[i];
    while (j < a.length) {
        sum += a[j];
        if (sum <= a[j]) {
            i = j;
            sum = a[i];
        }
        maxSum = Math.max(maxSum, sum);
        j++;
    }
    return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([0]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([-2, 1]));