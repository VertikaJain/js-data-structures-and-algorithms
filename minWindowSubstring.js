minWindowSubstring = (str, subStr) => {
    let left = 0, right = 0, itemNeeded = {}, itemFound = {}, missing = 0, minWindowLength = Infinity;
    for (item of subStr) {
        itemNeeded[item] = (itemNeeded[item] || 0) + 1;
        itemFound[item] = 0;
        missing++;
    }
    while (right < str.length) {
        if (str[right] in itemNeeded) {
            itemFound[str[right]]++;
            if (itemNeeded[str[right]] >= itemFound[str[right]]) {
                missing--;

            }
            if (missing === 0) {
                minWindowLength = Math.min(minWindowLength, right - left + 1);
                while (left < right) {
                    if (itemNeeded[str[left]]) {
                        itemFound[str[left]]--;
                        if (itemFound[str[left]] < itemNeeded[str[left]]) {
                            missing++;
                            left++;
                            break;
                        }
                    }
                    left++;
                    minWindowLength = Math.min(minWindowLength, right - left + 1);
                }
            }
        }
        right++;
    } if (minWindowLength === Infinity) return 0;
    else return minWindowLength;
}

console.log(minWindowSubstring('azjrskfzts', 'sz'));
console.log(minWindowSubstring('aabc', 'abc'));
console.log(minWindowSubstring('aaab', 'b'));
console.log(minWindowSubstring('aaab', 'c'));
console.log(minWindowSubstring('abcde', 'abcde'));
console.log(minWindowSubstring('aa', 'aa'));
console.log(minWindowSubstring("cabwefgewcwaefgcf", 'cae'));
console.log(minWindowSubstring("bba", 'ab'));