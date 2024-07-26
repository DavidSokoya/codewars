
// 4. Template Strings

// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```
// Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings

let templateStrings = function(noun, adjective) {
  return `${noun} are ${adjective}`
}

// 5. Simple Change Machine
// Your task is to create a change machine.

// The machine accepts a single coins or notes, and returns change in 20p and 10p coins. The machine will try to avoid returning its exact input, but will otherwise return as few coins as possible. For example, a 50p piece should become two 20p pieces and one 10p piece, but a 20p piece should become two 10p pieces.

// The machine can exclusively process these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned unprocessed. For example, if you were to put a £20 note into the machine, it would be returned to you and not broken into change. (Note that £1 is worth 100p.)

// This change machine is programmed to accept and distribute strings rather than numbers. The input will be a string containing the coin or note to be processed, and the change should be returned as one string with the coin names separated by single spaces with no commas. The values of the string should be in descending order. For example, an input of "50p" should yield the exact string "20p 20p 10p".

function changeMe(moneyIn){
  switch (moneyIn) {
    case '£5':
      var change = Array(25).fill('20p');
      return change.join(' ');
    case '£2':
      var change = Array(10).fill('20p');
      return change.join(' ');
    case '£1':
      var change = Array(5).fill('20p');
      return change.join(' ');
    case '50p':
      return '20p 20p 10p';
    case '20p':
      return '10p 10p';
    default:
      return moneyIn;
  }
}

function changeMe(moneyIn){
	switch (moneyIn) {
  	case '£5': return '20p '.repeat(25).trim()
  	case '£2': return '20p '.repeat(10).trim()
  	case '£1': return '20p '.repeat(5).trim()
  	case '50p': return '20p 20p 10p'
  	case '20p': return '10p 10p'
    default: return moneyIn
  }
}



// 6. Safen User Input Part I - htmlspecialchars
// You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).

// Mission
// Your mission is to implement a function that converts the following potentially harmful characters:

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;
// Good luck :D




function htmlspecialchars(formData) {
 let newStr = '';
  for (let i = 0; i < formData.length; i++){
    if (formData[i] === '<') {
      newStr += '&lt;'
    } else if (formData[i] === '>' ){
      newStr += '&gt;'
    }else if (formData[i] === '"'){
      newStr += '&quot;'
    } else if (formData[i] === '&'){
      newStr += '&amp;'
    }else {
      newStr += formData[i]
    }
  }
  return newStr
}

// ES6 string addition
// It is easy to join two strings together like this string1 + string2.

// Another way to get the desired result would be with string1.concat(string2)

// ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

// + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

// If one of the arguments is a number your code must coerce it into being a string.
function joinStrings(string1, string2){
  return `${string1} ${string2}`
}