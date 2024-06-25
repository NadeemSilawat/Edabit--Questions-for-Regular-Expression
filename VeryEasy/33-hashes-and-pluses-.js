// https://edabit.com/challenge/ydBcGvv3n447nbxCy

function hashPlusCount(str) {
    let hash = (str.match(/#/g) || []).length;
    let plus = (str.match(/\+/g) || []).length;
    return [hash, plus];
}

console.log(hashPlusCount("####")) //, [4, 0])
console.log(hashPlusCount("#")) //, [1, 0])
console.log(hashPlusCount("+++++++"))//, [0, 7])
console.log(hashPlusCount("++")) //, [0, 2])
console.log(hashPlusCount("#+#+")) //, [2, 2])
console.log(hashPlusCount("###+")) //, [3, 1])
console.log(hashPlusCount("##+++#")) //, [3, 3])
console.log(hashPlusCount("#+++#+#++#")) //, [4, 6])
console.log(hashPlusCount("")) //, [0, 0])