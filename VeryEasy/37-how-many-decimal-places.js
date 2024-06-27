// https://edabit.com/challenge/arKLRM8qGzKZbCxCk

function getDecimalPlaces(num) {
	
    const r = /.(\d+)/g;
    return num.match(r); 
}

console.log(getDecimalPlaces("3.22")) //, 2)
console.log(getDecimalPlaces("400")) //, 0)
console.log(getDecimalPlaces("43.50")) //, 2)
console.log(getDecimalPlaces("100,000,000")) //, 0)
console.log(getDecimalPlaces("3.1415")) //, 4)
console.log(getDecimalPlaces("0")) //, 0)
console.log(getDecimalPlaces("01")) //, 0)
console.log(getDecimalPlaces("00010.00010")) //, 5)
console.log(getDecimalPlaces("3,141.592")) //, 3)

// made by @Joshua Señoron