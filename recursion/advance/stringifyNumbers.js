function stringifyNumbers(obj) {
    let obj2 = {};
    Object.assign(obj2, obj)
    for (let key of Object.keys(obj2)) {
        if (typeof obj2[key] === "object" && !Array.isArray(obj[key])) {
            obj2[key] = stringifyNumbers(obj2[key])
        } else {
            if (typeof obj2[key] === "number") {
                obj2[key] = obj2[key].toString();
            }
        }
    }
    return obj2;
}
let obj = {
    num: 1, test: [1, 2, 3], data: { val: 4, info: { isRight: true, random: 66 } }
}
console.log(stringifyNumbers(obj));