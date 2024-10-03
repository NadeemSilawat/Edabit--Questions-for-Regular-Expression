// https://edabit.com/challenge/6AnQqiEjkJdZrWhPS
function howManySeconds(hours) {
    return Math.floor(hours * 3600 )
}

console.log(howManySeconds(2)); //7200)
console.log(howManySeconds(10)); // 36000)
console.log(howManySeconds(24)); // 86400)
console.log(howManySeconds(36)); // 129600)