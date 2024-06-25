// https://edabit.com/challenge/3EQGHyiYTNc9LPmhF
function countVowels(str) {
	
    return str.match(/[aeiou]/g).length
}

console.log(countVowels("Celebration")) //, 5)
console.log(countVowels("Palm")) //, 1)
console.log(countVowels("Prediction")) //, 4)
console.log(countVowels("Suite")) //, 3)
console.log(countVowels("Quote")) //, 3)
console.log(countVowels("Portrait")) //, 3)
console.log(countVowels("Steam")) //, 2)
console.log(countVowels("Tape")) //, 2)
console.log(countVowels("Nightmare")) //, 3)
console.log(countVowels("Convention")) //, 4)