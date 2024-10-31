// https://edabit.com/challenge/nuXdWHAoHv9y38sn7

function sortDrinkByPrice(drinks) {

    //     return drinks.sort((a, b) =>{

    //         if(a.price < b.price){
    //             return -1
    //         }else if(a.price > b.price){
    //             return 1
    //         }else{
    //             return 0
    //         }
    // });

    return drinks.sort((a, b) => { parseInt(a.price) - parseInt(b.price) });


}
const drinks1 = [
    { name: 'lemonade', price: 90 },
    { name: 'lime', price: 432 },
    { name: 'peach', price: 23 }
];

const sorted1 = [
    { name: 'peach', price: 23 },
    { name: 'lemonade', price: 90 },
    { name: 'lime', price: 432 }
];

const drinks2 = [
    { name: 'water', price: 120 },
    { name: 'lime', price: 80 },
    { name: 'peach', price: 90 }
];

const sorted2 = [
    { name: 'lime', price: 80 },
    { name: 'peach', price: 90 },
    { name: 'water', price: 120 }
];

console.log(sortDrinkByPrice(drinks1)); //sorted1, "Object is not sorted.");
console.log(sortDrinkByPrice(drinks2)); //sorted2, "Object is not sorted.");