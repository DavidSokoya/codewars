// 1. Enumerable Magic #20 - Cascading Subsets
// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
  
function eachCons(array, n) {
    let result = [];
  for (let i = 0; i <= array.length - n; i++){
    result.push(array.slice(i, i + n))
  }
	return result;
}

// 2. Sum of differences in array

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {

   if (arr.length <= 1) {
    return 0;
  }

  let sortArr = arr.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++){
    sum += sortArr[i] - sortArr[i + 1]
  }
  return sum
}