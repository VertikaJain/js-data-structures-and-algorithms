function capitalizeFirst(a) {
    let newArr = [];
    if (a.length === 0) return a;
    a[0] = a[0].replace(a[0][0], a[0][0].toUpperCase());
    newArr.push(a[0]);
    return newArr.concat(capitalizeFirst(a.slice(1)));
}

console.log(capitalizeFirst(["cat", "dog", "mouse"]));