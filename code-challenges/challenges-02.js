"use strict";
// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the reversed array.
//  Without using built-in methods.
//  Input: ['C#', 'JS', 'Ruby','Python']
//  Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr) => {
  const newArray = [];
  for (var x = 1; x <= arr.length; x++) {
    newArray.push(arr[(arr.length) - x]);
  }
  return newArray;
};

// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

//  Challenge 2:
// Required:

//  Write a function that takes an array of numbers and increases its values by 10
//
//  Input: [20, 54, 89, 41]
//  Output: [30, 64, 99, 51]

const arrInc = (arr) => {
  const result = [];
  for (var x = 0; x < arr.length; x++) {
    result.push((arr[x] + 10));
  }
  return result;
};

// -------------------------------------------------------------------------------------------------------

module.exports = { reverseArray, arrInc };
