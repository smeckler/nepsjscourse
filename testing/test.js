let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "end"];

let first = numbers[0]; // Reading the first value

numbers[0] = 11 // Changing the first value to 10

if(first === numbers[0])
  console.log("The values are the same");
else
  console.log("The values are different");

// Output: The values are different
