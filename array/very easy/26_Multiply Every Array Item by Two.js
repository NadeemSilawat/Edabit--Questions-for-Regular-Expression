function getMultipliedArr(arr) {
    // pettern 1
    // var a=[];
	// for(i = 0; i<arr.length;i++){
        
    //     a[i] = arr[i]*2
    // }
    // return a;

    //pettern 2
    return arr.map(i => i*2)

    //normal fuction se karna hai


}
console.log(getMultipliedArr([2, 5, 3])); //[4, 10, 6])
console.log(getMultipliedArr([1, 86, -5])); // [2, 172, -10])
console.log(getMultipliedArr([5, 382, 0])); //[10, 764, 0])

