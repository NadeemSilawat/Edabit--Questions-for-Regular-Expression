function arrayValuesTypes(arr) {
    //pettern 1
    // return arr.map( x=> typeof x);

    //pettern2
    for(var i=0; i<arr.length; i++){
        typeof(arr[i])       
    }
    return arr
}
console.log(arrayValuesTypes([1, 10])); //['number', 'number']);
console.log(arrayValuesTypes([["hello" , 1]  , 10])); //['object', 'number']);
console.log(arrayValuesTypes(["shashwat", 10, 90])); //['string', 'number', 'number']);
console.log(arrayValuesTypes([[], true])); //['object', 'boolean']);
console.log(arrayValuesTypes([false, false, "true"])); //['boolean', 'boolean', "string"]);
console.log(arrayValuesTypes([1, 10])); //['number', 'number']);
console.log(arrayValuesTypes([undefined, null])); //['undefined', 'object']);
console.log(arrayValuesTypes([function(){let x =10;}, 10])); //['function', 'number']);

