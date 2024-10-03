// https://edabit.com/challenge/nhXofMMyrowMyr9Nv
function nextEdge(side1, side2) {
	return side1 + side2-1
}
console.log(nextEdge(5, 4)); //8)
console.log(nextEdge(8, 3)); //10)
console.log(nextEdge(7, 9)); //15)
console.log(nextEdge(10, 4)); // 13)
console.log(nextEdge(7, 2)); //8)