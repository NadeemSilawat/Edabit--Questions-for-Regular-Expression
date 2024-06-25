// https://edabit.com/challenge/pQh6uEM2Dp3BjAyzS

let x = /[24680]$/g;

function validate(num) {
  // return num.match(x)?num+" is even":num+" is odd";
  return `${num} is ${num.match(x) ? 'even' : 'odd'}`;
}

console.log(validate('2341')); //, "2341 is odd.")
console.log(validate('132')); //, "132 is even.")
console.log(validate('29')); //, "29 is odd.")
console.log(validate('5578')); //, "5578 is even.")
console.log(validate('5570')); //, "5578 is even.")

// console.log("Deterministic Tests", function() {
// })

// console.log("Randomized Tests: Passing", function() {
// 	for (let i = 0; i < 5; i++) {
// 		let x = Math.ceil(Math.random()*7000)*2;
// 		console.log(validate(x.toString()), `${x} is even.`);
// 	}
// })

// console.log("Randomized Tests: Failing", function() {
// 	for (let i = 0; i < 5; i++) {
// 		let x = Math.ceil(Math.random()*7000)*2 + 1;
// 		console.log(!validate(x.toString()), `${x} is odd.`);
// 	}
// })
