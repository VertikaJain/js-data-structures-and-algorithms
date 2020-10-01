function reverse(str) {
    if (str.length === 0) return str;
    return str[str.length - 1].concat(reverse(str.substring(0, str.length - 1)));
}

console.log(reverse("awesome"));
console.log(reverse("rithmschool"));