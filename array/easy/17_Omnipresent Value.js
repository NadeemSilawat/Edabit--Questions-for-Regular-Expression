function isOmnipresent(arr, val) {
	return arr.every(a => a.includes(val))
}
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); //true)
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); //false)
console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5)); //true)
console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6)); //false)
console.log(isOmnipresent([[5, 1], [5, 1], [5, 1], [6, 5, 1]], 1)); //true)