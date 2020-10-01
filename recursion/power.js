power = (base, expo) => {
    if (expo === 0) return 1;
    return base * power(base, --expo);
}

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));