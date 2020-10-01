function fib(n, f = 1, s = 1) {
    if (n === 2) return s;
    return fib(n - 1, s, f + s);
}

console.log(fib(4));// 3
console.log(fib(10));// 55
console.log(fib(28));// 317811
console.log(fib(35));// 9227465