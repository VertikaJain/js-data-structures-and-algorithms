function capitalizedWords(a) {
    let newArr = [];
    if (a.length === 0) return a;
    a[0] = a[0].toUpperCase();
    newArr.push(a[0]);
    return newArr.concat(capitalizedWords(a.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']