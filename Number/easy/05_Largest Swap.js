// https://edabit.com/challenge/hD3euqPHM82Cbr7R8
function largestSwap(num) {
    // return reverse(num);
    
	return num.toString().charAt(0)>= num.toString().charAt(1);
// return num.chartAt()
    // if(){

    // }
	// return num
}
console.log(largestSwap(27)); //false, '27 < 72, so not largest swap.')
console.log(largestSwap(43)); //true, '43 > 34, so largest swap.')
console.log(largestSwap(14)); //false, '14 < 41, so not largest swap.')
console.log(largestSwap(53)); //true, '53 > 35, so largest swap.')
console.log(largestSwap(99)); //true, 'Cannot do better, so largest swap.')