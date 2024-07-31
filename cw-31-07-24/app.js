// 1. There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

function correctPolishLetters(string) {
  const letters = {
    'ą': 'a',
    'ć': 'c',
    'ę': 'e',
    'ł': 'l',
    'ń': 'n',
    'ó': 'o',
    'ś': 's',
    'ź': 'z',
    'ż': 'z'
  };

  let result = '';
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    result += letters[char] || char;
  }
  return result;
}

// 2. Simple Comparison?

// Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

// To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().

function add(a, b){
	if (a == b) {
    return true
  }else {
    return false
  }
}

// 3. Take an Arrow to the knee, Functionally

// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

// Examples
// These are example of how to convert a number to an ascii Character:
// Javascript => String.fromCharCode(97) // a
// C# => Tools.FromCharCode(97) // a

let ArrowFunc = function(arr) {
  return arr.map( e => String.fromCharCode(e)).join(''); //Complete this function
}

// 4. UEFA EURO 2016

// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

function uefaEuro2016(teams, scores){
  
      if (scores[0] > scores[1]){
        return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
      }else if (scores[0] < scores[1]){
        return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
      }else {
        return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
      }
  
}

// 5. Is there a vowel in there?

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a){
const vowels = ['a', 'e', 'i', 'o', 'u'];
return a.map(code => vowels.includes(String.fromCharCode(code)) ? String.fromCharCode(code) : code )
}

// 6. Arguments to Binary addition
// Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be added as 0 since it can't be added.

// If your language can handle float binaries assume the array won't contain float or doubles.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'
// NOTE: NaN is a number too in javascript for decimal, binary and n-ary base


function arr2bin(arr){
  return arr.reduce((acc, curr) => acc + (typeof curr === 'number' ? curr : 0), 0).toString(2)
}

// 7. Find the Difference in Age between Oldest and Youngest Family Members

function differenceInAges(ages){
  
  let youngest = Math.min(...ages);
  let oldest = Math.max(...ages);
  let difference = oldest -youngest;
  
  return [youngest, oldest, difference];
}

// 8. Sort My Textbooks

// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive

function sorter(textbooks) {
  return textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : 
                                  a.toLowerCase() < b.toLowerCase() ? -1  : 0)
}

// 9. Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => {
    return a - b;
  }).filter((el, index, arr) => {
    return arr.indexOf(el) === index;
  });
}

// 10. Sum Arrays

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]

// Sum Numbers
function sum (numbers) {
    "use strict";
   return numbers == [] ? 0 : numbers.reduce((acc, curr) => acc + curr, 0)
    
};

// 11. My head is at the wrong end!

// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!


function fixTheMeerkat(arr) {
 
  return [arr[2], arr[1], arr[0] ];
  
}
