// https://edabit.com/challenge/sq7ZNMhAZ5ao8BMum

function acceptedWords(arr) {
	const r = /^[^C]/g;
    return arr.filter((arr)=>r.test(arr));
}

console.log(acceptedWords(["Cans", "Worms", "Bugs", "Cold", "Beans"])) //, ["Worms", "Bugs", "Beans"])
console.log(acceptedWords(["Ducks", "Bears",  "Cats"])) //, ["Ducks", "Bears"])
console.log(acceptedWords(["cars", "trucks", "planes"])) //, ["cars", "trucks", "planes"])