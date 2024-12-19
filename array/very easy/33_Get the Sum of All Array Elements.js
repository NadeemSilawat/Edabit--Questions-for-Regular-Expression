function getSumOfItems(arr) {
    //Answer 1
    // let sum =0
	// for(var i=0; i<arr.length;i++){
    //     sum += arr[i]
    // }

    // return sum

    //Answer 2
    //map method se 
    let sum=0;
    arr.map(x => sum += x)    
    return sum

}
console.log(getSumOfItems([2, 7, 4])); //13)
console.log(getSumOfItems([45, 3, 0])); //48)
console.log(getSumOfItems([-2, 84, 23])); //105)

