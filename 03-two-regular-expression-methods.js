function twoMethods() {
	// find and equals are not regular expression methods.  Replace them. 
	let methodOne = /hello/.find("hello")[0] === "hello" 
	let methodTwo = /hello/.equals("hello") // returns a boolean
	return methodOne && methodTwo? "done": "Not" 
}

console.log(twoMethods()) //, true, "done" )