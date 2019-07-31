/* eslint-disable strict */
// 1. How many searches?
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and are using the recursive binary search algorithm. Identify the sequence of numbers that each recursive call will search to find 8.

// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and are using the recursive binary search algorithm. Identify the sequence of numbers that each recursive call will search to find 16?
const arr = [3,5,6,8,11,12,14,15,17,18];
function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      console.log(array[i])
    }
    // console.log(array[i]);
  }
  return -1;
}

console.log(indexOf(arr, 8));