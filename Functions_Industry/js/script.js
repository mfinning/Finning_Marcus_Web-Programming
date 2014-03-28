//Finning_Marcus_function_industry

//fuction set up


var forEach = function (list, action) {
    for (var i = 1; i < list.length; i++) {
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
//time it with loop
var doubleIt = function (item) {
    if (typeof item === "number") {
        return item * 2;
    }
};
//print it
console.log(map(doubleIt, [2,4, 6, 8, 20]));