// https://edabit.com/challenge/7KbZc8QvzqrJPaE6Q

const REGEXP = /(red flag|blue flag)/g

const str1 = "red flag blue flag"
const str2 = "yellow flag red flag blue flag green flag"
const str3 = "pink flag red flag black flag blue flag green flag red flag"
const str4 = "blue flag red flag red flag blue flag green flag red flag"

const validate = (REGEXP) => {
	 if(!/\|/.test(String(REGEXP))) return () => "invalid" 
	 return function testReg(str) {
		 console.log(str.match(REGEXP))
		 return str.match(REGEXP)
	 }
}

const testExp = validate(REGEXP)

// Test.assertNotEquals(testExp(str1), "invalid", "You are require to use the | in your expression.")
console.log(testExp(str1)) //, ["red flag", "blue flag"])
console.log(testExp(str2)) //, ["red flag", "blue flag"])
console.log(testExp(str3)) //, ["red flag", "blue flag", "red flag"])
console.log(testExp(str4)) //, ["blue flag", "red flag", "red flag", "blue flag", "red flag"])