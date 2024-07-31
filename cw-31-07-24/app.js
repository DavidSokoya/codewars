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