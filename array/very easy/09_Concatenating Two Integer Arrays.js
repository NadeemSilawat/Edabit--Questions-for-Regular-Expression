function concat(arr1, arr2) {
	//parttern 1
	// return arr1.concat(arr2);

	//pattern 2
	for(var i=0;i<=arr1.length-1;i++){
		arr2.push(arr1[i]);
	}
	return arr2;
}


console.log(concat([1, 3, 5], [2, 6, 8])); //[1, 3, 5, 2, 6, 8])
console.log(concat([7, 8], [10, 9, 1, 1, 2])); //[7, 8, 10, 9, 1, 1, 2])
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3])); //[4, 5, 1, 3, 3, 3, 3, 3])