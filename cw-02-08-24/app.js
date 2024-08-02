// 1. Logical calculator
// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

// Examples
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True
// booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False
// Input
// an array of Boolean values (1 <= array_length <= 50)
// a string specifying a logical operator: "AND", "OR", "XOR"
// Output
// A Boolean value (True or False).

function logicalCalc(array, op){
 
  let result = array[0];
  for(let i = 1; i < array.length; i++)
  {
    if(op == "AND"){
      result = result && array[i];
    }else if(op == "OR"){
      result = result || array[i];
    }else if(op == "XOR"){
      result = result != array[i];
    }
  }
  return result;
}

// 2. A wolf in sheep's clothing

// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"
function warnTheSheep(queue) {
  for (let i = 0; i < queue.length;i++) {
    if (queue[queue.length - 1] === "wolf") {
      return "Pls go away and stop eating my sheep"
    }else if (queue[i] === "wolf") {
      return `Oi! Sheep number ${queue.length - i - 1}! You are about to be eaten by a wolf!`
    }
  }
}

// 3. How many stairs will Suzuki climb in 20 years?

// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

// 20_year_estimate = one_year_total * 20

// You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

// stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
// Make sure your solution takes into account all of the nesting within the stairs array.

// Each weekday in the stairs array is an array.

// sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
// Your function should return the 20 year estimate of the stairs climbed using the formula above.

function stairsIn20(s){
  return s.map(e => e.reduce((acc, curr) => acc + curr,0)).reduce((acc, curr) => acc + curr, 0) * 20        
}

// 4. Swap Values

// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?
function swapValues(arr) {
  let temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
  return arr;
}

// 5. Duck Duck Goose

// he objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name
// // PHP only
// duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
// duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
// duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]

function duckDuckGoose(players, goose) {
  
  return players[(goose-1)%players.length].name
}

// 6. To square(root) or not to square(root)

// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

function squareOrSquareRoot(array) {
  let arr = []
  for(let i = 0; i < array.length; i++) {
    
    if( (array[i] %  Math.sqrt(array[i]) ) === 0 ){
      arr.push(Math.sqrt(array[i]))
    }else {
      arr.push(Math.pow((array[i]), 2))
    }
  }
  return arr;  
}

// 7. Add Length

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
  return str.split(' ').map((e, i) => `${e} ${e.length}`)
}

// 8. 
// Grasshopper - Array Mean

// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4
// 3. The mean (or average) of this list is 4

let findAverage = function (nums) {
  return nums.reduce((acc, curr) => acc + curr, 0) / nums.length
}