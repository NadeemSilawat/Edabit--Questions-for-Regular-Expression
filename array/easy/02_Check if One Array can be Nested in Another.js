// https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj

function canNest(arr1, arr2) {
    //Answer 1
	return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2);
}
console.log(canNest([1, 2, 3, 4], [0, 6])); //true)
console.log(canNest([3, 1], [4, 0])); //true)
console.log(canNest([9, 9, 8], [8, 9, 10])); //false)
console.log(canNest([9, 9, 8], [8, 9])); //false)
console.log(canNest([1, 2, 3, 4], [2, 3])); //false)
