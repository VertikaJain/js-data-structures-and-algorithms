function isPalindrome(str) {
    if (str.length === 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    // return true || str.substring(1, str.length - 1); // without recursion
    return isPalindrome(str.substring(1, str.length - 1)); // with recursion
}

console.log(isPalindrome('awesome'));
console.log(isPalindrome('foobar'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('amanaplanacanalpanama'));
console.log(isPalindrome('amanaplanacanalpandemonium'));