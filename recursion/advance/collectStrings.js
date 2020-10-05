function collectStrings(obj) {
    let a = [];
    for (let value of Object.values(obj)) {
        if (typeof value === "string") a.push(value)
        if (typeof value === "object") a = a.concat(collectStrings(value))
    }
    return a;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])