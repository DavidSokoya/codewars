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

