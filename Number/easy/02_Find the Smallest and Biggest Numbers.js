// https://edabit.com/challenge/Q3n42rEWanZSTmsJm
function minMax(arr) {
    //  let a = Math.min(arr)
	return Math.max(arr)
    // return arr
}
console.log(minMax([14, 35, 6, 1, 34, 54])); //[1, 54])
console.log(minMax([1.346, 1.6532, 1.8734, 1.8723])); //[1.346, 1.8734])
console.log(minMax([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345])); //[0.2345, 0.984])
console.log(minMax([13, 72, 98, 43, 24, 65, 31])); //[13, 98])
console.log(minMax([-54, -23, -54, -21])); //[-54, -21])
console.log(minMax([-0.473, -0.6834, -0.1287, 0.5632])); //[-0.6834, 0.5632])
console.log(minMax([0, 0, 0, 0])); //[0, 0])