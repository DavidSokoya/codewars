// 1. Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  return number % 2 == 0 ? "Even" : "Odd";
}

// 2. Stringy Strings
// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.
function stringy(size) {
  string = "1";
  for (let i = 0; i < size-1; i++) {
    if(i % 2 == 0)
      string += "0";
    else
      string += "1";
  }
  return string;
}