// Question 1
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2) {
    return number1
  }
  if else (number2 > number1){
    return number2
  }
  else {return "Equal"}
}

// Question 2
function maxOfThree(number1, number2, number3) {
  if (number1 > number2 && number1 > number3) {
    return number1
  }
  else if (number2 > number1 && number2 > number3){
    return number2
  }
  else {return "Equal"}
}


// Question 3
function isCharacterAVowel(str) {
  var letter = str.toString
  if (letter.toUpperCase() === "A" || letter.toUpperCase() ==="E" || letter.toUpperCase() === "I" || letter.toUpperCase() === "O" || letter.toUpperCase() === "U") {
    return true
  }
  else {
    return false
  }
}

// Question 4
function sumArray(numbers) {
  var arraySum = 0;
  for (var i = 0; i < numbers.length; i++) {
    arraySum += numbers[i];
  }
  return arraySum
}


// Question 4
function multiplyArray(numbers) {
  var arrayTotal = 0;
  for (var i = 0; i < numbers.length; i++) {
    arrayTotal = arrayTotal * numbers[i];
  }
  return arrayTotal;
}


// Question 5
var numberOfArguments = function(){
  return args.length;
}



// Question 6
var reverseString = function (str){
  return str.split('').reverse().join('')
};


// Question 7
function findLongestWord (arrayOfWords) {
  var longestWord = '';
  for (var i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length > longestWord.length) {
      longestWord = arrayOfWords[i];
    }
  }
  return longestWord
}


// Question 8
function filterLongWords (arrayOfWords, wordLength) {
  var longWords = []
  for (var i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length > wordLength) {
      longWords.push(arrayOfWords[i])
    }
  }
  return longWords
}



// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {

}
