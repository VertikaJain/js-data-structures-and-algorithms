function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    let fCount = {};
    for (let str of str1) fCount[str] = (fCount[str] || 0) + 1;
    for (let str of str2) {
        if (!fCount[str]) return false;
        fCount[str]--;
    }
    return true;
    /* let freqCount1 = {}, freqCount2 = {};
    for (let str of str1) freqCount1[str] = (freqCount1[str] || 0) + 1;
    for (let str of str2) freqCount2[str] = (freqCount2[str] || 0) + 1;
    for (let key in freqCount1) {
        if (!(key in freqCount2)) return false; //checking key i.e. character
        if (freqCount1[key] !== freqCount2[key]) return false; //checking value i.e. character Count.
    }
    // console.log(freqCount1);
    // console.log(freqCount2);
    return true; */
}

console.log(validAnagram("", ""));
console.log(validAnagram("abc", "abcde"));
console.log(validAnagram("anagram", "nagrmaa"));
console.log(validAnagram("querty", "qurzty"));
console.log(validAnagram("cinema", "iceman"));
console.log(validAnagram("rat", "car"));