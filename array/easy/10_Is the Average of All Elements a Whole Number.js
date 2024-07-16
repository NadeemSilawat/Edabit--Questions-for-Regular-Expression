function isAvgWhole(arr) {
	return Number.isInteger(arr.reduce((a,b )=> a + b) / arr.length);
       
}
console.log(isAvgWhole([3, 5, 9])); //false);
console.log(isAvgWhole([1, 1, 1, 1])); //true);
console.log(isAvgWhole([1, 2, 3, 4, 5])); //true);
console.log(isAvgWhole([5, 2, 4])); //false);
console.log(isAvgWhole([11, 22])); //false);
console.log(isAvgWhole([4, 1, 7, 9, 2, 5, 7, 2, 4]));  //false);