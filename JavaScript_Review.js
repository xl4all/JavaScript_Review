

// write a function that takes in three parameters and returns the sum of those three parameters

function findSum (a,b,c) {
	console.log(a + b + c);
}
findSum(3,4,5);

// given a string, create a function that returns the last character in that string.
// examples:
// "cattywampus" --> s

var string = ("just a string");
var lastChar= string.charAt(string.length-1);

console.log(lastChar);

// write a function that takes in one parameter and returns the cube of that parameter
// examples:
// 3 --> 27
// 4 --> 64

var n = 5;
var cube = function(n){
  return n * n * n;  
};
cube(n);

//or

function findCube (n) {
	console.log(n * n * n);
}
findCube(5);

// define a function that takes in a string and reverses it. you are not allowed to
// call the "reverse" function (or any other string functions)

Ehmmm I donnow.....

// write a function that takes in two arrays of the same length as parameters. From those two arrays,
// create, then return an object which contains the elements of the first array as keys, and the
// elements of the second array as values.
// examples:
// ["exciting", "exotic"], ["markets", "britain"] --> { exciting: "markets", exotic: "britain" }
// ["a", "b", "c"], ["x", "y", "z"] --> { a: "x", b: "y", c: "z" }

var doActivity = ["Dance", "Play"];
var subActivity = ["kizomba" , "kizomba music"];

var activities = {};

activities.doActivity[0] = subActivity[0];

console.log(activities);

function XLwanna (do,what) {
	console.log();
}

console.log(doActivity[0]: + subActivity[0]);
console.log(doActivity[1]): + subActivity[1];
console.log("What the f#@k's wrong with my code?");

// for(var i = 0; i < activities.length; i++){
// 	beep += boop[i];
// }
//  console.log(beep);
//  */

// Given an object with keys and values, create two arrays: one which contains the object's keys,
// and one which contains the object's values. Wrap this into a function which takes in one object
// that contains keys and values, and returns a different object that contains two keys. The first key
// should be named "keys" and will have the first array as a value. The second key should be named
// "values" and will have the second array as a value.
// examples:
// { exciting: "markets", exotic: "britain" } --> { keys: ["exciting", "exotic"], values: ["markets", "britain"] }
// { a: "x", b: "y", c: "z" } --> { keys: ["a", "b", "c"], values: ["x", "y", "z"] }

// OPTIONAL CHALLENGE 1
// write a function that takes in two parameters, x and n, and computes x to the nth power
// you may not use Math.* functions

// OPTIONAL CHALLENGE 2
// Jon has terrible social anxiety, and wishes to sit as far away from everyone as possible.
// Given an array of booleans, where the array represents a row of seated people, and each
// boolean represents whether the seat is occupied or not, find the ideal seat for Jon.

