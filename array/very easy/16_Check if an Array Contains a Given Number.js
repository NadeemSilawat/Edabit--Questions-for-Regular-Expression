function check(arr, el) {
    //pettern 1
    // return arr.includes(el)

    //pettern 2
    for (var i = 0; i < arr.length; i++){
		if (arr[i] == el){
			return true;
		}
        return false;
	}
}
console.log(check([1, 2, 3, 4, 5], 3)); //true)
console.log(check([1, 1, 2, 1, 1], 3)); //false)
console.log(check([1, 1, 2, 1, 5, 4, 7], 7)); //true)
console.log(check([1, 1, 2, 1, 5, 4, 7], 8)); //false)
console.log(check([5, 5, 5, 6], 5)); //true)
console.log(check([], 5)); //false)