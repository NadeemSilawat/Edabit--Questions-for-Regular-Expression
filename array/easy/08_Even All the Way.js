// https://edabit.com/challenge/6MZx5RqKYkFaogeAQ
function getOnlyEvens(nums) {
    let a=[];
    for(var i=0; i<nums.length; i+=2){
        if(nums[i] % 2 == 0){
        a.push(nums[i]);       
    }
}
    return a;
}
console.log(getOnlyEvens([1, 3, 2, 6, 4, 8])); //[2, 4])
console.log(getOnlyEvens([0, 1, 2, 3, 4])); //[0, 2, 4])
console.log(getOnlyEvens([1, 2, 3, 4, 5])); //[])
console.log(getOnlyEvens([37, 26, 18, 42, 2, 30])); //[18, 2])
console.log(getOnlyEvens([49, 41, 30, 44, 26, 0, 5])); //[30, 26])
console.log(getOnlyEvens([47, 47, 12, 3, 48])); //[12, 48])
console.log(getOnlyEvens([30, 26, 0, 13, 20, 38, 50, 2])); //[30, 0, 20, 50])
console.log(getOnlyEvens([34, 21, 38, 28, 13, 8, 26, 29, 24, 5])); //[34, 38, 26, 24])
console.log(getOnlyEvens([47, 31, 24, 37, 29, 41, 31, 49, 4, 24])); //[24, 4])
console.log(getOnlyEvens([45, 47, 20, 49])); //[20])
console.log(getOnlyEvens([20, 14, 10, 32, 28, 6, 49, 5, 46])); //[20, 10, 28, 46])
console.log(getOnlyEvens([39, 45, 5])); //[])
console.log(getOnlyEvens([45, 3, 50, 15, 49])); //[50])
console.log(getOnlyEvens([45, 25, 10, 47, 24, 30, 28, 48])); //[10, 24, 28])
console.log(getOnlyEvens([10, 16, 9, 40, 28, 21, 37, 4, 45])); //[10, 28])
console.log(getOnlyEvens([31, 25, 19, 49, 50, 22])); //[50])
console.log(getOnlyEvens([38, 36, 8, 34, 8, 45, 4, 45, 2, 9])); //[38, 8, 8, 4, 2])
console.log(getOnlyEvens([38, 21, 50, 14])); //[38, 50])
console.log(getOnlyEvens([24, 16, 32, 14, 32, 42, 13, 33, 13, 39])); //[24, 32, 32])
