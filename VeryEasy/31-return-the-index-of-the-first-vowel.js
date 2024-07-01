// // https://edabit.com/challenge/ppBDRwSoqZYcR95Aq

// function firstVowel(str) {

//     var match = str.match(/[aeiouAEIOU]/);
//     return match? str.indexOf(match[0]) : -1;

// }

// console.log(firstVowel("hello")) //, 1)
// console.log(firstVowel("apple")) //, 0)
// console.log(firstVowel("string")) //, 3)
// console.log(firstVowel("STRAWBERRY")) //, 3)
// console.log(firstVowel("MELON")) //, 1)
// console.log(firstVowel("piNNEaPLE")) //, 1)

const binaryCode = `01010011 01100101 01100111 01110010 01100101 01110100 01101001 `;
function binaryToString(input) {
  input.split('\n').reduce((string, binary) => {
    return (string += String.fromCharCode(parsInt(binary, 2)));
  });
}

// const result = binaryToString(binaryCode);
console.log(binaryToString(binaryCode));
