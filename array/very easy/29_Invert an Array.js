function invertArray(arr) {
     return arr = -Math.abs(arr)

     // return arr
     //incorrect
}
console.log(invertArray([1, 2, 3, 4, 5])); //[-1, -2, -3, -4, -5])
console.log(invertArray([1, -2, 3, -4, 5])); //[-1, 2, -3, 4, -5])
console.log(invertArray([])); //[])
console.log(invertArray([0])); //[0])