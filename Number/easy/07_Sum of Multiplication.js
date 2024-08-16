// https://edabit.com/challenge/W8R9CPBThreBBXYLS
function multiSum(num, ten=10) {
    let str = 0 ;
    for(var i=0; i<=10; i++){
        str *= str + 1  
    }

	return str
}
console.log(multiSum(1)); //55)
console.log(multiSum(2)); //110)
console.log(multiSum(3)); //165)
console.log(multiSum(4)); //220)
console.log(multiSum(5)); //275)
console.log(multiSum(6)); //330)
console.log(multiSum(7)); //385)
console.log(multiSum(8)); //440)
console.log(multiSum(9)); //495)
console.log(multiSum(10));// 550)