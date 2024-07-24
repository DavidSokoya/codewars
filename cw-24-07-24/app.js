// 1. A Strange Trip to the Market

// You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "how much do people normally tip for something like this?" The artist looks up. "It's always gonna be about tree fiddy."

// It was then that you realize the musician was a 400 foot tall beast from the paleolithic era! The Loch Ness Monster almost tricked you!

// There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) it is a 400 foot tall beast from the paleolithic era; B) it will ask you for tree fiddy.

// Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note that the phrase can also be written as "3.50" or "three fifty". Your function should return true if you're talking with The Loch Ness Moster, false otherwise.

function isLockNessMonster(s) {
  
  return s.includes("3.50") || s.includes("three fifty") || s.includes("tree fiddy") ? true : false
}




// 2. Name on billboard
// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).

function billboard(name, price = 30) {
  return name.split('').reduce((sum, letter) => sum + price, 0); 
}

// 3. Define a card suit

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
  
  let newCard = card.toLowerCase();
  
  if (newCard.slice(-1) === '♣'){
    return 'clubs'
  }else if (newCard.slice(-1) === '♦' ){
    return 'diamonds'
  }else if (newCard.slice(-1) === '♥' ){
    return 'hearts'
  } else if ( newCard.slice(-1) === '♠' ) {
    return 'spades'
  }
}

function defineSuit(card) {
  const deck = {
      '♣' : 'clubs',
      '♦' : 'diamonds',
      '♥'  : 'hearts',
      '♠' : 'spades'
     }
  
  return deck[card.charAt(card.length -1)]
}

// 4. CSV representation of array
// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.

// More details here: https://en.wikipedia.org/wiki/Comma-separated_values

// Note: you shouldn't escape the \n, it should work as a new line.

function toCsvText(array) {
   return array.join('\n');
}

// 5. An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

function contamination(text, char){
  let newChar = ""
  if (text === "" || char === "") {
    return ""
  }
  
  
  for (let i = 0; i < text.length; i++) {
    newChar += char
  }
  return newChar;
}

function contamination(text, char){
  return char.repeat(text.length)
}
