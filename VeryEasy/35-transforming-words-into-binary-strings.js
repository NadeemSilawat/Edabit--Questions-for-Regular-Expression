// https://edabit.com/challenge/djNxjykvXvKuHvGPZ

function convertBinary(str) {
	return str.replace(/[a-mA-M]/g,0).replace(/[n-zN-Z]/g,1)
}

console.log(convertBinary("house")) //, "01110")
console.log(convertBinary("excLAIM")) //, "0100000")
console.log(convertBinary("moon")) //, "0111")
console.log(convertBinary("MOOn")) //, "0111")
console.log(convertBinary("topsyTurvy")) //, "1111111111")