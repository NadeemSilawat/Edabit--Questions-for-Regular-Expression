https://edabit.com/challenge/wBAuop24JYt9MZhXF

let x = /\d$/g
describe("Deterministic Tests", function() {
	Test.expect(validate("c8")); 
	Test.expect(validate("23cc4")); 
	Test.expect(!validate("abwekz")); 
	Test.expect(!validate("sdfkxi")); 
})

function validate(str) {
	return x.test(str);
}

const letters = "abcdefghijklmnopqrstuvwxyz"
const digits = "0123456789"

String.prototype.shuffle = function () {
	let a = this.split("");
	let n = a.length; 
	
	for (let i = n-1; i > 0; i--) {
		let j = Math.floor(Math.random()*(i+1)); 
		let tmp = a[i]; 
		a[i] = a[j]; 
		a[j] = tmp; 
	}
	return a.join(""); 
}

function getValidString() {
	let s = ""
	let n_letters = Math.floor(Math.random()*5); 
	let n_digits = Math.ceil(Math.random()*5); 
	for (let i = 0; i < n_letters; i++) {
		s += letters[Math.floor(Math.random()*26)];
	}
	for (let i = 0; i < n_digits; i++) {
		s += digits[Math.floor(Math.random()*10)]; 
	}
	return s.shuffle(); 
}

function getInvalidString() {
	let s = ""
	let n_letters = Math.floor(Math.random()*8); 
	for (let i = 0; i < n_letters; i++) {
		s += letters[Math.floor(Math.random()*26)];
	}
	return s.shuffle(); 
}

describe("Randomized Tests: Passing", function() {
	for (let i = 0; i < 5; i++) {
		let x = getValidString(); 
		console.log(`${x} has at least one digit.`)
		Test.expect(validate(x));
	}
})

describe("Randomized Tests: Failing", function() {
	for (let i = 0; i < 5; i++) {
		let x = getInvalidString(); 
		console.log(`${x} has no digits.`)
		Test.expect(!validate(x));
	}
})