// https://edabit.com/challenge/grqSjHHQYHBeKK6E3

function twoMethods() {
	// find and equals are not regular expression methods.  Replace them. 
	// let methodOne = /hello/.find("hello")[0] === "hello" 
	let methodOne = /hello/.test("hello");
	let methodTwo = "hello".match(/hello/) // returns a boolean
	return methodOne && methodTwo? "done": "Not" 
}	

console.log(twoMethods()) //, true, "done" )
