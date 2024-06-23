const REGEXP = /[^\w+]/gi

const str = "alice15@gmail.com"

const validate = (REGEXP) => {
	 if(!/\[\^/.test(String(REGEXP))) return () => "invalid" 
	 return function testReg(str) {
		return str.match(REGEXP);
	 }
}

const testExp = validate(REGEXP)

// Test.assertNotEquals(testExp(str), "invalid", "You are require to use a negated character set your expression.")
console.log(testExp(str)) //, ["@", "."])

// credits to https://javascript.info/regexp-character-sets-and-ranges