//Finning_Marcus_function_wacky

// fuctiob set up
var a = function(){ console.log("Lets do this: shote") }
var b = function(){ console.log("Better not: noshote") }
var c = function(){ console.log("Not worth it : walkaway") }

var foo = [a,b,c];

while (foo.length){
    foo.shift().call();
}


var array_of_functions = {
    "all": function(flag) {
        console.log(1+flag);
    },
    "cic": function(flag) {
        console.log(13+flag);
    }
};

array_of_functions.all(27);
array_of_functions.cic(7);