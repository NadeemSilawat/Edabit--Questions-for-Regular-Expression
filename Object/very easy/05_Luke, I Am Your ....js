// http://127.0.0.1:5500/Number/easy/index.html
const obj = {
    "Darth Vader": "father.",
    "Leia": "sister.",
    "Han": "brother in law.",
    "R2D2": "droid.", 
}

function relationToLuke(name) {
    return "Luke, I am your " + obj[name];
    // return name.obj;         //Dot Notation
    // return obj["Darth Vader"];     breaket Notation  //
}
console.log(relationToLuke("Darth Vader")); //"Luke, I am your father.")
console.log(relationToLuke("Leia")); //"Luke, I am your sister.")
console.log(relationToLuke("Han")); //"Luke, I am your brother in law.")
console.log(relationToLuke("R2D2")); //"Luke, I am your droid.")
console.log(relationToLuke("Nadeem")); //"Luke, I am your undefined")