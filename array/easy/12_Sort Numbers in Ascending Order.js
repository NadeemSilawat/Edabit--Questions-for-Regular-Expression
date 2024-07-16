// https://edabit.com/challenge/SS23vniCZ6ssGwsQP

function sortNumsAscending(arr) {
    function compareNumbers(a, b) {
        return a - b;
      }   
	return arr.sort(compareNumbers);
}
console.log(sortNumsAscending([1, 2, 10, 50, 5])); //[1, 2, 5, 10, 50])
console.log(sortNumsAscending([80, 29, 4, -95, -24, 85])); //[-95, -24, 4, 29, 80, 85])
console.log(sortNumsAscending(null)); //[])
console.log(sortNumsAscending([])); //[])
console.log(sortNumsAscending([47, 51, -17, -16, 91, 47, -85, -8, -16, -27])); //[-85, -27, -17, -16, -16, -8, 47, 47, 51, 91])
console.log(sortNumsAscending([-51, -73, 65, 69, -76, 74, -14])); //[-76, -73, -51, -14, 65, 69, 74])
console.log(sortNumsAscending([45, 98, 35, 65, 97, 21, 33])); //[21, 33, 35, 45, 65, 97, 98])
console.log(sortNumsAscending([-23, -69, -54, -2, -32])); //[-69, -54, -32, -23, -2])
console.log(sortNumsAscending([-21, -9, -96])); //[-96, -21, -9])
console.log(sortNumsAscending([0])); //[0])