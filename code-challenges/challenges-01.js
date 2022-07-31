"use strict";

// --------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array.
//  Without using build-in methods.
//
//  Input: [12, 32, 22, 45, 78, 12, 50]
//  Output: 78

const findMax = (arr) => {
  let max;
  max = 0;
  for (var x = 0; x < arr.length; x++) {
    if (arr[x] > max) {
      max = arr[x];
    }
  }
  return max;
};
//findMax(arr);
// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an array and returns the sum of the numeric values.
//  Inside the array (there could be strings), without using built-in methods (You can use `typeof`)
//
//  Input: [20, '234', 'car', 41, 20, 'chair']
//  Output: 81
const sumNums = (arr) => {
  let sum;
  sum = 0;
  for (var x = 0; x < arr.length; x++) {
    if (typeof arr[x] === "number") {
      sum = sum + arr[x];
    }
  }
  return sum;
};
//sumNums(arr);
// -------------------------------------------------------------------------------------------------------

module.exports = { findMax, sumNums };