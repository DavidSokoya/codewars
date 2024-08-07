// The Office III - Broken Photocopier
// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

// Given a string of binary, return the version the photocopier gives you as a string.
function broken(x){
  let arr = []
  for(let i =  0; i < x.length; i++) {
    if  (x[i] === '1') {
       arr.push(0)
    }else {
      arr.push(1)
    }
  }
  return arr.join('')
}

// Spanish Conjugator
// Your Task
// You need to write a function called conjugate which will return an object with a spanish verb conjugated. The object must look like this:

// {
//   "comer": [
//     "como",
//     "comes",
//     "come",
//     "comemos",
//     "coméis",
//     "comen"
//   ]
// }
// Where the key is the verb in its original form (infinitive form) and its value will be an array with the conjugations.
// Another example:
// {
//   "vivir": [
//     "vivo",
//     "vives",
//     "vive",
//     "vivimos",
//     "vivís",
//     "viven"
//   ]
// }
// Notes:
// The conjugations must be in this order:
// {
//  verb: [
//    "first person singular",
//    "second person singular",
//    "third person singular",
//    "first person plural",
//    "second person plural",
//    "third person plural"
//  ]
// }
// Don't use JSON.stringify(obj, null, 2) because the "presentation" of the object isn't important.

// 'á' is U+00E1, 'é' is U+00E9, 'í' is U+00ED.

function conjugate(verb){
  
  const conjugations = {
      "ar": ["o","as","a","amos","áis","an"],
      "er": [ "o","es","e","emos","éis","en"],
      "ir": [ "o","es","e","imos","ís","en"]
      }
  
    const infinitive = verb.slice(-2)
    const word = verb.slice(0, -2)
    
    if (conjugations.hasOwnProperty(infinitive)) {
      const endings = conjugations[infinitive];
      const conjugatedForms = endings.map(ending => word + ending);
      return { [verb]: conjugatedForms };
    }
  }

// Sort the Gift Code
//   Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.
// Examples (Input -- => Output):
// "abcdef"                      -- => "abcdef"
// "pqksuvy"                     -- => "kpqsuvy"
// "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"
function sortGiftCode(code){
  return code.split('').sort((a, b) => a.localeCompare(b)).join('');
}
// Merge overlapping strings
// This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.
// "abcde" + "cdefgh" => "abcdefgh"
// "abaab" + "aabab" => "abaabab"
// "abc" + "def" => "abcdef"
// "abc" + "abc" => "abc"
// NOTE: The algorithm should always use the longest possible overlap.
// "abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"

function mergeStrings(first, second){
  let count = 0;
  
  for (let i = 0; i < first.length; i++) {
    if (first[i] == second[count]) {
      count++;
    } else {
      count = 0;
      if (first[i] == second[count]) count++;
    }
  }

  return first + second.slice(count);
}

// Clothes size number converter
function sizeToNumber(size) {
  let sizes = {
    s: 36,
    m: 38,
    l: 40
  };
  
  if (size.length > 1 && size[0] === 'x' && size[size.length - 1] === 's') {
    
    return sizes.s - size.slice(0, -1).length * 2;
    
  } else if (size.length > 1 && size[0] === 'x' && size[size.length - 1] === 'l') {
    
    return sizes.l + size.slice(0, -1).length * 2;
    
  } else {
    
    return sizes[size] || null;
    
  }
}
