// https://edabit.com/challenge/5vsYNXXQ7aXzQMMpQ

const REGEXP = /\.{3,}/g

const str = "Hello!... Wait. How goes?..... GoodBye!.."

const validate = (REGEXP) => {
	 if(!/\{.*\}/.test(String(REGEXP))) return () => "invalid" 
	 return function testReg(str) {
		return str.match(REGEXP);
	 }
}

const testExp = validate(REGEXP)

// Test.assertNotEquals(testExp(str), "invalid", "You are require to use a quantifier in set your expression.")
console.log(testExp(str), ["...", "....."])

// credits to https://javascript.info/regexp-quantifiers