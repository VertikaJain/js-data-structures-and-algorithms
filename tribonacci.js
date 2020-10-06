/* USING OPTIONAL PARAMETERS
tribonacci = (n, f = 0, s = 1, t = 1) => {
    if (n === 2) return t;
    return tribonacci(n - 1, s, t, f + s + t);
}; */

tribonacci = n => {
    /* USING LOOP
    let t0 = 0, t1 = 1, t2 = 1, t3 = 1;
    for (let i = 0; i < n - 2; i++) {
        t3 = t0 + t1 + t2
        t0 = t1
        t1 = t2
        t2 = t3
    }
    return t3 */

    /* USING RECURSION
    if (n == 0) return n;
    if (n == 1 || n == 2) return 1;
    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3) */

    // USING DYNAMIC PROGRAMMING F[n+3] = F[n] + F[n+1] + F[n+2]
    if (n == 0) return n;
    let a = [];
    a[0] = 0, a[1] = 1, a[2] = 1;
    for (let i = 0; i <= n - 3; i++) {
        a.push(a[i] + a[i + 1] + a[i + 2])
    }
    return a[a.length - 1];
}

console.log(tribonacci(4));
console.log(tribonacci(25));
console.log(tribonacci(2));
console.log(tribonacci(1));
console.log(tribonacci(0));