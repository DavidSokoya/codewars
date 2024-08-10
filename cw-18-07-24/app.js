// 1. Reverse a String
// 'dog'
// 

function solution(str){
  return str.split("").reverse().join("")
}

(solution("world"))

// 2. Messi goals function
  function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}


// 3. The museum of incredibly dull things
// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
let copy = [...numbers]
let smallest = Math.min(...numbers);
let smallestIdx = numbers.indexOf(smallest)
copy.splice(smallestIdx, 1)
return copy
}

// 4. Abbreviate a Two Word Name
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F
function abbrevNam(name){
  // separate the name
  let [firstName, lastName] = name.split(' ')
  // get the initials of each name
  let [firstInit, lastInit] = [firstName.charAt(0).toUpperCase(), lastName.charAt(0).toUpperCase()]
  // combine the initials with '.' and return
  let result = `${firstInit}.${lastInit}`
  return result;

}
function abbrevName(name){
  //   Split the names into two
  let [firstName, lastName]  = name.split(' ')

  //  Get the first letter of each names
 let firstInitial =  firstName.charAt(0).toUpperCase();
 let secondInitial = lastName.charAt(0).toUpperCase();
  
  let initials = firstInitial + '.' + secondInitial 
  
  return initials;

  //   Join the two names with .
}

function abbrevName(name){

  return  name.split(" ").map(i => i[0].toUpperCase()).join(".")

}

// 5. Fake Binary
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string
function fakeBina(x){
  let arr = []
  for (let i = 0; i< x.length; i++){
    if(x[i] < 5){
      arr.push(0);
    }else {
      arr.push(1)
    }
  }
  return arr.join('')
}

 function fakeBin(x){
   newX = ""
  
 for (let i = 0; i < x.length; i++) {
   if(Number(x[i]) < 5 ) {
        newX += "0"
        }
    else {
       newX += 1;
    }
   }

   return newX;
 }

function fakeBin(x) {

return x.split('').map(n => n < 5 ? 0 : 1).join('')

}

// 6. Twice as old
// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  let sonTwiceAge = sonYearsOld * 2;
  let yearsAgoOrAfter = dadYearsOld - sonTwiceAge

  return Math.abs(yearsAgoOrAfter)
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2)
}

// 7. Jaden Casing Strings
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
String.prototype.toJadenCase = function () {
    let words = this.split(" ");

    let capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1));
  
    return capitalizedWords.join(" ");
};

// 8. The highest profit wins!

// DESCRIPTION:
// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

function minMax(arr){
  let newArr = []
  let minNumber = Math.min(...arr);
  let maxNumber = Math.max(...arr);

  newArr.push(minNumber);
  newArr.push(maxNumber)
  return newArr; 
}
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}

// 9. Keep up the hoop
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
  return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
}

// 10. 
// Grasshopper - Grade book

// DESCRIPTION:
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
function getGrade (s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3
  return average >= 90 ? "A" : average >= 80 ? "B" : average >= 70 ? "C" : average >= 60 ? "D" : "F"
}