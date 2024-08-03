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

