// https://edabit.com/challenge/tkFfKQJzcuaDysDyY

function capitalLetters(str) {
	const reg = /[A-Z]/g;
    const matches = str.match(reg);
    return matches.length
}

console.log(capitalLetters("hvbHKuFxMORMuBYRsgNF")) //, 12)
console.log(capitalLetters("nrrvrXlmfwjwlbcjwrzt")) //, 1)
console.log(capitalLetters("VdefGMkIeTUipnLhnIfe")) //, 8)
// Test.assertEquals(capitalLetters("ShwvYyeQdGsJYRBhoihI"), 9)
// Test.assertEquals(capitalLetters("ykEblUluPthiCMhxQFlz"), 7)
// Test.assertEquals(capitalLetters("NCdLUzNdihwUumkqfJqN"), 8)
// Test.assertEquals(capitalLetters("sdbMinvzxxulkzyzhfWe"), 2)
// Test.assertEquals(capitalLetters("NEcLjmRMJEXwnBkiPpCO"), 12)
// Test.assertEquals(capitalLetters("KVFifdDbnuWdkDdmDAkO"), 9)
// Test.assertEquals(capitalLetters("pkgUmnquvzIueBlLbtYu"), 5)
// Test.assertEquals(capitalLetters("xbbpykGhycjVEvCdaMew"), 5)
// Test.assertEquals(capitalLetters("YVgbDlgZDDaGkOymseSP"), 10)
// Test.assertEquals(capitalLetters("miuyhtTofqSuoCrgyhtc"), 3)
// Test.assertEquals(capitalLetters("YYoNuXdYJhHIPFZZndya"), 12)
// Test.assertEquals(capitalLetters("LRuGZepMZYIwQWXJpoTB"), 14)
// Test.assertEquals(capitalLetters("gmEosHVTLNEsYOFLCrRR"), 14)
// Test.assertEquals(capitalLetters("dPiadMjurjCjrgYbceuK"), 5)
// Test.assertEquals(capitalLetters("PQgSxLADOswVPWoDBgCD"), 14)
// Test.assertEquals(capitalLetters("odoaxlnmuyixnpthidus"), 0)
// Test.assertEquals(capitalLetters("XcqykqdmvtuMynFhnayf"), 3)