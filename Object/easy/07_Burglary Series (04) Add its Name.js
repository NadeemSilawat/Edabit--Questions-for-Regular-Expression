// https://edabit.com/challenge/9KEKJG5PZTFmG3Zau

function addName(obj, name, value) {

    let oak = { obj }
    oak[name] = value
    return oak

}
console.log(addName({}, "Brutus", 300)); //{Brutus: 300})
console.log(addName({ piano: 500 }, "Brutus", 400)); //{piano: 500, Brutus: 400})
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440)); //{piano: 500,  stereo: 300, Caligula: 440})