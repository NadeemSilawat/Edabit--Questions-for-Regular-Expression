function set(arr) {
    // Answer 1
    // return arr.filter((item,index) => arr.indexOf(item) === index);

    // Answer 2
    // var a = [];
    //     for(i=0; i < arr.length; i++){ 
    //         if(a.indexOf(arr[i]) === -1) { 
    //             a.push(arr[i]); 
    //         } 
    //     }
    //     return a;
} 
console.log(set([1, 3, 3, 5, 5])); //[1, 3, 5])
console.log(set([4, 4, 4, 4])); //[4])
console.log(set([5, 7, 8, 9, 10, 15])); //[5, 7, 8, 9, 10, 15])
console.log(set([5, 9, 9])); //[5, 9])
console.log(set([1, 2, 3, 4, 5, 5, 6, 6, 7])); //[1, 2, 3, 4, 5, 6, 7])
console.log(set([1, 1, 2, 2, 2])); //[1, 2])
console.log(set(['A', 'A', 'A', 'A'])); //['A'])
console.log(set(['A', 'B', 'C', 'D'])); //['A', 'B', 'C', 'D'])