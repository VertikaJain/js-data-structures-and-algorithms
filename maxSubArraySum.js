maxSubArraySum = (arr, n) => {
    if (n > arr.length) return null;

    // Complexity -> O(n^2)
    /* let max = -Infinity, sum = 0; 
    for (let i = 0; i <= arr.length - n; i++) {
        for (let j = 0; j < n; j++) sum += arr[i + j];
        if (max < sum) max = sum;
        sum = 0;
    }
    return max; */

    // Complexity -> O(n) => SLIDING WINDOW PATTERN
    let max = -Infinity, sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    max = sum;
    for (let i = n; i < arr.length; i++) {
        sum = sum - arr[i - n] + arr[i];
        max = Math.max(max, sum);
    }
    return max;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log(maxSubArraySum([4, 2, 1, 6], 1)); //6
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); //13
console.log(maxSubArraySum([], 4)); //null