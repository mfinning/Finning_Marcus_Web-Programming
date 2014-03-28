//Finning_Marcus_function_personal


// function

var forEach = function (list, action) {
    for (var i = 0; i < list.length; i++) {
        action(list[i]);
    }
};

var logItem = function (item) {
    console.log(item);
};
//list order
var listOfThings = ["Bow", "Gun", "deer", "wine", "muffin"];
var anotherListOfThings = ["hunt", "eat", "beer", "pizza"];

forEach(listOfThings, logItem);
//print out wit calculations
forEach(anotherListOfThings, function (item) {
    console.log(item + "'s length is " + item.length);
});