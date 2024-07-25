// https://edabit.com/challenge/JZ7TL5S6Q7CqN6GRS

function countDs(sentence) {
		const reg = /[dD]/g;
    return sentence.match(reg).length;
    
}

console.log(countDs("My friend Dylan got distracted at school")) // , 4)
console.log(countDs("Debris was scattered all over the place.")) //, 2)
console.log(countDs("The rodents hibernated in their den.")) //, 3)