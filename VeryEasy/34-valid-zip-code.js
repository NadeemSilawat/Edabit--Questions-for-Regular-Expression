// https://edabit.com/challenge/Ysk5M8XAscc4fqaAi

function isValid(zip) {
	return /^\d{5}$/.test(zip)
}
console.log(isValid("59001")) // true)
console.log(isValid("853a7")) //, false, "No non-digits allowed.")
console.log(isValid("732 32")) //, false, "No spaces allowed.")
console.log(isValid("788876")) //, false, "No sequences of length greater than 5.")
console.log(isValid("a923b")) //, false, "No letters allowed.")
console.log(isValid("5923!")) //, false, "No non-digits allowed.")
console.log(isValid("59238aa")) //, false, "No letters and no sequences of length greater than 5.")
console.log(isValid("88231")) //, true)