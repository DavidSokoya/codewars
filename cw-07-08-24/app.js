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

