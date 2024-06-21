// https://edabit.com/challenge/cqTmqdMQW83PkZH97


function asterisk(string) {
	return /^a(b*|)c(count)$/.test(string);
}


console.log(asterisk("abccount")) //, true)
console.log(asterisk("abbbccount")) //, true)
console.log(asterisk("account")) //, true)
console.log(asterisk("bbbccount")) //, false)
console.log(asterisk("ccount")) //, false)
console.log(asterisk("abbount")) //, false)    