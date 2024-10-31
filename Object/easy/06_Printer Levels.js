// https://edabit.com/challenge/QXWM2oo7rQNiyDsip\


function inkLevels(inks) {

    var a = Object.values(inks)
	return Math.min(...a)
}


console.log(inkLevels({
	"cyan": 23,
	"magenta": 12,
	"yellow": 10
})); //10);

console.log(inkLevels({
	"cyan": 432,
	"magenta": 543,
	"yellow": 777
})); //432);

console.log(inkLevels({
	"cyan": 700,
	"magenta": 700,
	"yellow": 0
})); //0);

console.log(inkLevels({
	"cyan": 70,
	"magenta": 700,
	"yellow": 1
})); //1);

console.log(inkLevels({
	"cyan": 6543,
	"magenta": 74543,
	"yellow": 2345678
})); //6543);

console.log(inkLevels({
	"cyan": 1,
	"magenta": 1,
	"yellow": 1
})); //1);

console.log(inkLevels({
	"cyan": 700,
	"magenta": 700,
	"yellow": 700
})); ///700);

// made by @Joshua Señoron