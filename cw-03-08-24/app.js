function filter_list(l) {
  return l.filter((a, i) => typeof a !== 'string' )
 }

//  Printing Array elements with Comma delimiters
// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// Note: if this seems too simple for you try the next level

// Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 😕

function printArray(array){
  return array.join();
}

// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
function arrayMadness(a, b) {
  return (a.map(e => Math.pow(e, 2)).reduce((a,b)=> a + b,0)) > (b.map(e => Math.pow(e, 3)).reduce((a,b)=> a + b,0)) ? true : false
}

// Push a hash/an object into array
// You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!
items = []
items.push({a: "b", c: "d"})

// Implement Array.prototype.filter()
// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

// The usage will be quite simple, like:

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
// Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.

Array.prototype.filter = function ( func, arr = [] ) {
  for ( let i = 0; i < this.length; i++ ) {
      if ( func(this[i]) ) { arr.push(this[i]) }
  }
  return arr
}