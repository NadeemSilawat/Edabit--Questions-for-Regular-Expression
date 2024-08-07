function getLastItem(arr) {
    // pattern 1
    // return arr.pop();

    //pattern 2
    // return arr[arr.length-1]

    //pattern 3
    return arr.slice(-1)[0];        
}
console.log(getLastItem(['Cat', 'Dog', 'Duck'])); //'Duck';)
console.log(getLastItem([1, 2, 3])); //3)
console.log(getLastItem([undefined]));
console.log(getLastItem([true, false, false, true])); //true)
console.log(getLastItem([7, 'String', false, undefined, null])); //null)
console.log(getLastItem([false])); //false)
console.log(getLastItem([undefined, undefined, undefined])); //undefined)
console.log(getLastItem([1, 2, 3, 56, 87, 23, 65, 45])); //45)
console.log(getLastItem(['Apple', 'Orange', undefined])); //undefined)
console.log(getLastItem([true, false, 'Apple'])); //'Apple')
console.log(getLastItem([null, null, null])); //null)
console.log(getLastItem([1])); //1)