// 1. love you, a little , a lot, passionately ... not at all

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

function howMuchILoveYou(nbPetals) {

    if ( nbPetals % 6 === 1 ) {
      return "I love you"
    }else if ( nbPetals % 6 === 2 ) {
      return "a little"
    }else if ( nbPetals % 6 === 3 ) {
      return "a lot"
    }else if ( nbPetals % 6 ===  4 ) {
      return "passionately"
    }else if ( nbPetals % 6 === 5 ) {
      return "madly"
    }else if ( nbPetals % 6 === 0 ) {
      return "not at all"
    }
}

// 2. Beginner - Lost Without a Map
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x){
 return  x.map(e => e * 2)
}

// 3. Count the Monkeys!

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]
function monkeyCount(n) {
  let arr = []
  for(let i = 1; i<= n; i++){
    arr.push(i)
  }
  return arr;
}

// 4. Counting sheep...

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

function countSheeps(sheep) {
  let presentSheep = sheep.filter((e) => e === true);
  
  return presentSheep.length;
  
}

// 5. Count of positives / sum of negatives

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return []
  }
  let positives = input.filter(e => e > 0).length
  let negatives = input.filter(e => e < 0)
  let sumNegative = negatives.reduce((acc, curr) => acc + curr, 0) 
  return [positives, sumNegative];
}