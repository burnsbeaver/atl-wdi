// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

////// WRITE A FUNCTION THAT TAKES ___ AS INPUT AND RETURNS ___ AS OUTPUT //////

// #1
// Input: an array of numbers
// Output: the sum of the numbers that were passed in
// Edge Case: If the array is empty, return 0
var sumOfNums = function(numsArray){
  // Your Code Here
  var totalNums = 0
  for (var i = 0; i < numsArray.length; i++) {
    totalNums += numsArray[i];
  }
  return totalNums;
};

// #2
// Input: an array of numbers
// Output: an array of the numbers from the first array that are strictly
//         greater (i.e. greater than but not equal to) than 10
var numsGreaterThanTen = function(numsArray){
  // Your Code Here
  var newArray = []
  for (var i = 0; i < numsArray.length; i++) {
    if (numsArray[i] > 10) {
      newArray.push(numsArray[i])
    }
  }
  return newArray;
};

// #3
// Input: an array of numbers
// Output: `true` if ALL numbers passed in are strictly greater than 10;
//         `false` otherwise
// Edge Case: If the input array is empty, the function should return `true`.
var allGreaterThanTen = function(numsArray){
  // Your Code Here
  for (var i = 0; i < numsArray.length; i++) {
    if (!numsArray[i] > 10) {
      return false;
    }
    else {
      return true;
    }
  }
  return true
};

// #4
// Input: an array of words
// Output: an array of all words from the first array with five or more letters
var wordsWithAtLeastFiveLetters = function(words){
  // Your Code Here
  var wordsOverFive = []
  for (var i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      wordsOverFive.push(words[i])
    }
  }
  return wordsOverFive;
};

// #5
// Input: an array of words
// Output: `true` if ALL words start with the letter 'a' (case-insensitive),
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allStartingWithA = function(words){
  // Your Code Here
  for (var i = 0; i < words.length; i++) {
    if (!words[i].charAt(0).UpperCase === "A") {
      return false
    }
    else {
      return true
    }
  return true
  }
};

// #6
// Input: an array of words
// Output: `true` if there are ANY words that start with the letter 'b'
//          (case-insensitive), `false` otherwise

var anyStartingWithB = function(words){
  // Your Code Here
  for (var i = 0; i < words.length; i++) {
    if (words[i].charAt(0).UpperCase === "B") {
      return true
    }
    else {
      return false
    }
    return true
  }
};
// #7
// Input: a single word and a number (`n`)
// Output: `true` if the word has at least some number (`n`) of vowels,
//          `false` otherwise
//    Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
// Edge Case: If `n` is less than zero, return `null`.
var hasAtLeastNVowels = function(word, n){
  // Your Code Here
  if (n < 0) {
    return null;
  }
  var sumOfVowels = 0
  for (var i = 0; i < word.length; i++) {
    if (word.charAt(i).UpperCase === "A" || word.charAt(i).UpperCase === "E" || word.charAt(i).UpperCase === "I"
    || word.charAt(i).UpperCase === "O" || word.charAt(i).UpperCase === "U") {
     sumOfVowels++;
    }
  }
  return sumOfVowels >= n;
};

// #8
// Input: an array of words
// Output: an array of words from the original array that have at least two
//          vowels
var wordsWithAtLeastTwoVowels = function(words){
  var correctWords = [];
  for (var j = 0; j < words.length; j++) {
      var sumOfVowels = 0
      var word = words[j]
      for (var i = 0; i < word.length; i++) {
        if (word.charAt(i).UpperCase === "A" || word.charAt(i).UpperCase === "E" || word.charAt(i).UpperCase === "I"
        || word.charAt(i).UpperCase === "O" || word.charAt(i).UpperCase === "U") {
         sumOfVowels++;
        }
        if (sumOfVowels >= 2) {
          correctWords.push(word);
        }
      }
  }
};

// #9
// Input: an array of words
// Output: `true` if ALL words have two or more vowels, `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allHaveAtLeastTwoVowels = function(words){
  // Your Code Here
  for (var i = 0; i < words.length; i++) {
    if (!hasAtLeastNVowels(words[i], 2)) {
      return false;
    }
  }
  return true;
};

// #10
// Input: an array of words
// Output: `true` if there are ANY words have two or more vowels,
//          `false` otherwise.
var anyHaveAtLeastTwoVowels = function(words){
  // Your Code Here
  for (var i = 0; i < words.length; i++) {
    if (hasAtLeastNVowels(words[i], 2)) {
      return true
    }
  }
  return false
};

// #11
// Input: an array of words
// Output: `true` if NONE of the words have two or more vowels,
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var noneHaveTwoOrMoreVowels = function(words){
  // Your Code Here
  for (var i = 0; i < words.length; i++) {
    if (hasAtLeastNVowels(words[i], 2)) {
      return false
    }
  }
  return true
};

// #12
// Input: an array of words
// Output: an object ({}) where each word in the array is a key, and the value
//          tied to that key is the length of the word.
// e.g. given ['cat', 'horse', 'elephant'],
//      return { cat: 3, horse: 5, elephant: 8}
var buildObjectFromWords = function(words){
  // Your Code Here
  var animal = {}
  for (var i = 0; i < words.length; i++) {
    animal[words[i]] = words[i].length
  }
  return animal;
};


/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums,
  numsGreaterThanTen: numsGreaterThanTen,
  allGreaterThanTen: allGreaterThanTen,
  wordsWithAtLeastFiveLetters: wordsWithAtLeastFiveLetters,
  allStartingWithA: allStartingWithA,
  anyStartingWithB: anyStartingWithB,
  hasAtLeastNVowels: hasAtLeastNVowels,
  wordsWithAtLeastTwoVowels: wordsWithAtLeastTwoVowels,
  allHaveAtLeastTwoVowels: allHaveAtLeastTwoVowels,
  anyHaveAtLeastTwoVowels: anyHaveAtLeastTwoVowels,
  noneHaveTwoOrMoreVowels: noneHaveTwoOrMoreVowels,
  buildObjectFromWords: buildObjectFromWords
}
