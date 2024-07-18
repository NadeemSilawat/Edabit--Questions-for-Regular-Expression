function countOnes(matrix) {
	return matrix
}
console.log(countOnes([
	[1, 0, 1],
	[0, 0, 0],
	[0, 0, 1]
])); //3)

console.log(countOnes([
	[1, 1, 1],
	[0, 0, 1],
	[1, 1, 1]
])); //7)

console.log(countOnes([
	[1, 2, 3],
	[0, 2, 1],
	[5, 7, 33]
])); //2)

console.log(countOnes([
	[5, 2, 3],
	[0, 2, 5],
	[5, 7, 33]
])); //0)

console.log(countOnes([
	[5, 2],
	[0, 2],
	[5, 1]
])); //1)

console.log(countOnes([
	[1, 1],
	[0, 1]
])); //3)

console.log(countOnes([
	[0, 1],
	[0, 0]
])); //1)