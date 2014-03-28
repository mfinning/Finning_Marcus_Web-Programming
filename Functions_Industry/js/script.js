//Finning_Marcus_function_industry



//list set up
var forEach = function (list, action) {
    for (var i = 0; i < list.length; i++) {
        action(list[i]);
    }
};
//list it
var map = function (mappingFunction, list) {
    var result = [];
    forEach(list, function (item) {
        result.push(mappingFunction(item));
    });
    return result;
};
//times it with loop
var doubleIt = function (item) {
    if (typeof item === "number") {
        return item * 2;
    }
};
//print it with the proper value dbld
console.log(map(doubleIt, [2,4, 6, 8, 500]));

