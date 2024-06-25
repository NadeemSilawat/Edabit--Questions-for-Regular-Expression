// https://edabit.com/challenge/ppBDRwSoqZYcR95Aq


function firstVowel(str) {
	
    var match = str.match(/[aeiouAEIOU]/);
    return match? str.indexOf(match[0]) : -1;	
    
}

console.log(firstVowel("hello")) //, 1)
console.log(firstVowel("apple")) //, 0)
console.log(firstVowel("string")) //, 3)
console.log(firstVowel("STRAWBERRY")) //, 3)
console.log(firstVowel("MELON")) //, 1)
console.log(firstVowel("piNNEaPLE")) //, 1)


