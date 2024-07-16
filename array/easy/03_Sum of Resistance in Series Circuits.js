// https://edabit.com/challenge/JDkyQJqNfJNhvjmRW
function seriesResistance(arr) {
    let sum = 0
    // for(var i=0 ; i<arr.length; i++){
    //     sum += arr[i]
    // }

    arr.map(x => sum += x).concat("ohms") 
    // debugger
    return sum
}
console.log(seriesResistance([1, 5, 6, 3])); //"15 ohms")
console.log(seriesResistance([0.2, 0.3, 0.4])); //"0.9 ohm")
console.log(seriesResistance([10,12, 1, 10])); //"33 ohms")
console.log(seriesResistance([10,13, 3.8, 20, 10])); //"56.8 ohms")
console.log(seriesResistance([0.5, 0.5])); //"1 ohm")
console.log(seriesResistance([16, 30, 22.8, 4])); //"72.8 ohms")
console.log(seriesResistance([20, 15, 32.5, 2])); //"69.5 ohms")
console.log(seriesResistance([52, 22, 20, 30]));  //"124 ohms")
console.log(seriesResistance([10, 12, 32, 4.9, 5, 6, 71])); //"140.9 ohms")