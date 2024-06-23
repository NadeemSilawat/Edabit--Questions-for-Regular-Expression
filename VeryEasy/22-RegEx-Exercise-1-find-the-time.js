
// https://edabit.com/challenge/QkuiL7XApt2RMQqTJ


const REGEXP = /\d+:\d+/g
const str = "Breakfast at 09:00 in the room 123:456.";

const validate = (REGEXP) => {
	 // if(!//.test(String(REGEXP))) return () => "invalid" 
	 return function testReg(str) {
		 return str.match(REGEXP)
	 }
}

const testExp = validate(REGEXP)

// Test.assertNotEquals(testExp(str), "invalid", "Nothing new here")
console.log(testExp(str)) ///, ["09:00"]) 

// credits to https://javascript.info/regexp-boundary