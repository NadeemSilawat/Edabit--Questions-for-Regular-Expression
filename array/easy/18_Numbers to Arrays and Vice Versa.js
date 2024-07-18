function toArray(num) {
	const numsarr = Array.from(String(num), Number);
    return numsarr;
}

function toNumber(arr) {
    return Number(arr .join(''));
}
console.log(toArray(235)); //[2, 3, 5])
console.log(toArray(19)); //[1, 9])
console.log(toArray(0)); //[0] )
console.log(toNumber([2, 3, 5])); //235)
console.log(toNumber([1, 9])); //19)
console.log(toNumber([0])); //0)