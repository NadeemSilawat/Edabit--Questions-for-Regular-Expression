// https://edabit.com/challenge/654ABGmNS5GqscE8C
function getVoteCount(votes) {
	return votes.upvotes - votes.downvotes;
}
console.log(getVoteCount({ upvotes: 13, downvotes: 0 })); //13)
console.log(getVoteCount({ upvotes: 2, downvotes: 33 })); //-31)
console.log(getVoteCount({ upvotes: 132, downvotes: 132 })); //0)
console.log(getVoteCount({ upvotes: 0, downvotes: 0 })); //0)
console.log(getVoteCount({ downvotes: 4, upvotes: 1 })); //-3)