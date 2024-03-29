// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
  return numbers.reduce((prev, curr) => prev + Math.pow(curr, 2), 0);
}
