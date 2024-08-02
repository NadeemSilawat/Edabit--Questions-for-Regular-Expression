function findIndex(arr, str) {
    //pettern 1
    // return arr.indexOf(str);    

    //pettern 2
    for(var i=0; i<arr.length;i++){
        if(arr[i] == str){
            return i
        }
    }

}
console.log(findIndex(['abc', 'ghj', 'banana', 'grape'], 'grape')); // 3)
console.log(findIndex(['a', 'b', 'c', 'd', 'e', 'f'], 'f')); // 5)
console.log(findIndex(['hi', 'edabit.com', 'testcase', 'validstring'], 'edabit.com')); // 1)