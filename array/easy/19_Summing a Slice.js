function sliceSum(arr, n) {
    var sum = 0;
    
    
	if(n > arr.length) {

    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
} else {
    for(var i=0; i<n; i++){
        sum += arr[i];
}

}
return sum
}

console.log(sliceSum([1, 3, 2], 2)); //4)
console.log(sliceSum([4, 2, 5, 7], 4)); //18)
console.log(sliceSum([3, 6, 2], 0)); //0)
console.log(sliceSum([2, 4], 9)); //6)
console.log(sliceSum([-5, 2], 2)); //-3)
console.log(sliceSum([0, 0, 0, 3, 4], 3)); //0)


