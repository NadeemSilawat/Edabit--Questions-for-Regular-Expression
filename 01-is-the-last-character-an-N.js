// https://edabit.com/challenge/iiSAic33n4wGufQmG

function isLastCharacterN(word) {
  const r = /n$/;
  const find = r.test(word);
  console.log(find);
  return find;
}

console.log(isLastCharacterN('Aiden')); //, true)
console.log(isLastCharacterN('Roxy')); //, false)
console.log(isLastCharacterN('Bert')); //, false)
console.log(isLastCharacterN('Dean')); //, true)
console.log(isLastCharacterN('Ian')); //, true)
console.log(isLastCharacterN('Brian')); //, true)
console.log(isLastCharacterN('Daniel')); //, false)
