// https://edabit.com/challenge/8s2jy9hR2TAeQinKD

function calculateDifference(obj, limit) {
        
    const sub =  Object.values(obj).reduce((a, b) => a + b, 0);

        return Math.abs(sub-limit);


}

// const random = Test.randomNumber()
const obj = { skate: 20000, painting: 30000, shoes: 1 }
const obj2 = { "baseball bat": 31}
// const obj3 = {stereo: 110, pillow: random}
console.log(calculateDifference(obj, 50000)); //1)
console.log(calculateDifference(obj2, 10)); //21)
// Test.assertEquals(calculateDifference(obj3, 100), obj3.stereo + obj3.pillow - 100)
