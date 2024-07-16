// https://edabit.com/challenge/aNZzLBxQpidWBF26X

function sortByLength(arr) {
    function compareNumbers(a, b) {
        return a.length - b.length;
      }     
    return arr.sort(compareNumbers);
    
}
console.log(sortByLength(["a", "ccc", "dddd", "bb"])); //["a", "bb", "ccc", "dddd"])
console.log(sortByLength(["apple", "pie", "shortcake"])); //["pie", "apple", "shortcake"])
console.log(sortByLength(["may", "april", "september", "august"]));  //["may", "april", "august", "september"])
console.log(sortByLength(["maybe"])); //["maybe"])
console.log(sortByLength([])); //[])