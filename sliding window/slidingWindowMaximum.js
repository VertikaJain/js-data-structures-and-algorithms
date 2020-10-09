// LeetCode solution (problem 239)

var maxSlidingWindow = function (a, k) {
    /* let i = 0, j = k - 1, m = a[j], aT = [];
    while (j < a.length) {
        m = Math.max(m, a[i]);
        i++;
        if (i === j) {
            aT.push(m);
            j++;
            i = j - k + 1;
            m = a[j];
        }
    }
    return aT; */
    if (k === 1) return a;
    let l = 0, r = 1, front = rear = -1, queue = [], maxArr = [];
    if (queue.length === 0) {
        queue.push(a[l]);
        front++;
        rear++;
    }
    while (r < a.length) {
        while (a[r] > queue[rear]) {
            queue[rear] = a[r];
            if (rear > front && queue[rear - 1] < a[r])
                rear--;
        }
        if (a[r] < queue[rear] || a[r] === a[r + 1]) {
            queue[++rear] = a[r];
        }
        r++;
        if (r - l === k || r === a.length) {
            maxArr.push(queue[front]);
            if (a[l] === queue[front])
                front++;
            l++;
        }
    }
    return maxArr;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1, 3, 3, -1, -3, 5, 5, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3));
console.log(maxSlidingWindow([1, -9, 8, -6, 6, 4, 0, 5], 4));
console.log(maxSlidingWindow([1], 1));
console.log(maxSlidingWindow([1, -1], 1));