function reverse(arr) {
	//pattern 1
	// return arr.reverse()

	//pattern 2
	//Using for loop
	const a = []
	const arrLength = arr.length;
	for (var i = arrLength - 1; i >= 0; i--) {
		const reverseIndex = arrLength - i - 1;
		a[reverseIndex] = arr[i]
		console.log(i,reverseIndex)
	}
	return a;

}
debugger
console.log(reverse([1, 2, 3, 4]));//[4, 3, 2, 1])
// console.log(reverse([5, 6, 7])); //[7, 6, 5])
// console.log(reverse([9, 9, 2, 3, 4])); //[4, 3, 2, 9, 9])
// console.log(reverse([3, 3])); //[3, 3])
// console.log(reverse([-1, -1, -1])); //[-1, -1, -1])
// console.log(reverse([]));//[])

// 4-3=1
// 4-2=2
// 4-1=3
// 4-0=4