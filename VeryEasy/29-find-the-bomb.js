https://edabit.com/challenge/r4hycBjiBNMs6AAjq


function bomb(str) {
	return str.match(/bomb/gi)? "DUCK!!!":"There's no bomb, relax.";
}
console.log(bomb("There is a bomb.")) //, "Duck!!!")
console.log(bomb("Hey, did you find it?")) //, "There is no bomb, relax.")
console.log(bomb("Hey, did you think ther is a bomb?")) //, "Duck!!!")
console.log(bomb("This goes boom!!!")) //, "There is no bomb, relax.")
console.log(bomb("Hey, did you find the BoMb?")) //, "Duck!!!")

