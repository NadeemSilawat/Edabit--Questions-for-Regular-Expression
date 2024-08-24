// https://edabit.com/challenge/RxsaajpPai3CB9G9e

function determineLever(arr) {
	if(arr[1] === "f" ){
		return "first class lever"
	}else if(arr[2] === "f" ){
		return "second class lever"
 	}else {
		return "third class lever"
	}
}
console.log(determineLever(["e", "f", "l"])); //"first class lever")
console.log(determineLever(["e", "l", "f"])); //"second class lever")
console.log(determineLever(["f", "e", "l"])); //"third class lever")
