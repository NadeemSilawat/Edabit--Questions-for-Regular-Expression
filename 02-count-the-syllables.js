function countSyllables(str) {

/* (1)  Normal Way...

 let a = str.length
 return a/2 
*/
    
// (2) 

// let word = str.toLowerCase();
// let count = 0;
// let vowels = 'aeiouy';
// let wordArray = word.split('');
// for (let i = 0; i < wordArray.length; i++) {
//     if (vowels.indexOf(wordArray[i]) !== -1) {
//         count++;
//         }
//     }
//     return count;


// (3) USING REGX

const word = str.toLowerCase();
const regex = /[aeiouy]/g; // matches any vowel (global flag)
const matches = word.match(regex);

return matches? matches.length : 0;

}

console.log(countSyllables("Hehehehehehe")) //, 6)
console.log(countSyllables("bobobobobobobobo")) //, 8)
console.log(countSyllables("NANANANA")) //, 4)
console.log(countSyllables("lelelele")) //, 4)
console.log(countSyllables("momomomomomomomomo")) //, 9)
console.log(countSyllables("WiWiWiWiWiWiWiWiWiWi")) // 10)
console.log(countSyllables("RURURURURURUrurururuRURU")) //, 12)
console.log(countSyllables("go")) //, 1)
console.log(countSyllables("dede")) //, 2)