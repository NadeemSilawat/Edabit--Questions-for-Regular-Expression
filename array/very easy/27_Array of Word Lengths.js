https://edabit.com/challenge/B9yPEStmax7Jxb9Dj

function wordLengths(arr) {
    //pattern 1
    // var a=[]
	// for(var i=0;i<arr.length;i++){
    //     a[i] = arr[i].length
    // }
    // return a

    //Answer 2
    //map Method

    return arr.map(a => a.length)
    
}

console.log(wordLengths(["hello", "world"])); //[5, 5], "Example #1")
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"])); //[9, 12, 9], "Example #2")
console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])); //[3, 5, 9, 4, 2, 3, 8], "Example #3")
console.log(wordLengths(["Indiana", "Jones", "and", "the", "Temple", "of", "Doom"])); //[7, 5, 3, 3, 6, 2, 4])
console.log(wordLengths(["Programming", "is", "fun"])); //[11, 2, 3])