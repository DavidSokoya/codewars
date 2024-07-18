// 1. Reverse a String
function solution(str){
  return str.split("").reverse().join("")
}

(solution("world"))

// 2. Messi goals function

  function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}


// 3. The museum of incredibly dull things

// The museum of incredibly dull things
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

// DESCRIPTION:
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