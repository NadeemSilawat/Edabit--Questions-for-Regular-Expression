// https://edabit.com/challenge/u6iaymtE4eYXQ2ZWR

function potatoes(str) {
  return str.match(/potato/g).length;
}

console.log(potatoes('potato')); //, 1)
console.log(potatoes('potatopotatocherry')); //,2 )
console.log(potatoes('potatopotatopotatoorange')); //, 3)
console.log(potatoes('potatopotatobananapotatopotato')); //, 4)
console.log(potatoes('potatopotatomangopotatopotatopotato')); //, 5)
console.log(potatoes('potatocucumberpotatopotatopotatopotatopotato')); //, 6)
