let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
let longest = words.reduce(function (a, b) {
  return a.length > b.length ? a : b;
});
console.log(longest);
// - Convert the above array "words" into an array of length of word instead of word.
let length = words.map((p) => p.length);
console.log(length);
// - Create a new array that only contains word with atleast one vowel.
function vowel(words) {
  return (
    words.toLowerCase().includes("a") ||
    words.toLowerCase().includes("e") ||
    words.toLowerCase().includes("i") ||
    words.toLowerCase().includes("o") ||
    words.toLowerCase().includes("u")
    );
}
let checkVowel = words.filter((i) => vowel(i));
console.log(checkVowel);
// - Find the index of the word "rhythm"
console.log(words.indexOf('rhythm'));
// - Create a new array that contians words not starting with vowel.
let noVowel = [];
words.forEach(function (value) {
  if ( 
    value.startsWith("a") ||
    value.startsWith("e") ||
    value.startsWith("i") ||
    value.startsWith("o") ||
    value.startsWith("u")
  ) {
    return "false";
  }
  else {
    noVowel.push(value);
  }
});
console.log(noVowel);
// - Create a new array that contianse words not ending with vowel
let endVowel = [];
words.forEach(function (value) {
  if ( 
    value.endsWith("a") ||
    value.endsWith("e") ||
    value.endsWith("i") ||
    value.endsWith("o") ||
    value.endsWith("u")
  ) {
    return "false";
  }
  else {
    endVowel.push(value);
  }
});
console.log(endVowel);


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sumArray = (array) => {
  return array.reduce(function (accumulator, currentValue) {
    return accumulator = currentValue;
  }, 0);
};
console.log(sumArray(numbers));
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multiplied = numbers.map((value) => value * 3);
console.log(multiplied);
// - Create a new array that contains only even numbers
let evenNum = numbers.filter((value) => value % 2 === 0);
console.log(evenNum);
// - Create  a new array that contains only odd numbers.
let oddNum = numbers.filter((value) => value % 2 !== 0);
console.log(oddNum);
// - Create a new array that should have true for even number and false for odd numbers.
let trueFalse = [];
numbers.forEach(function (value) {
  if( value % 2 !== 0){
    trueFalse.push("false");
  } else {
    trueFalse.push("true");
  }
});
console.log(trueFalse);
// - Sort the above number in assending order.
console.log(numbers.sort((a, b) => a - b));
// - Does sort mutate the original array?
// Yes It does mutate the original array.
// - Find the sum of the numbers in the array.
console.log(numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0)
);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(array) {
  let length = array.length;
  let total = array.reduce((accumulator, currentValue) => accumulator + currentValue);
  return total / length;
}
console.log(averageNumbers(numbers));
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(words) {
  let wordsLength = words.map((value) => value.length) .reduce((accumulator, currentValue) => accumulator + currentValue);
  return wordsLength;
}
console.log(averageWordLength(strings));