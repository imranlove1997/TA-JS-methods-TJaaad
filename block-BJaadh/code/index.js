// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(' '));
// - Add two new words in the strings array "called" and "sentance"
console.log(strings.push("called", "sentance"));
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(' '));
// - Remove the first word in the array (strings)
console.log(strings.shift());
// - Find all the words that contain 'is' use string method 'includes'
console.log(strings.includes('is'));
// - Find all the words that contain 'is' use string method 'indexOf'
console.log(strings.indexOf !== -1);
// - Check if all the numbers in numbers array are divisible by three use array method (every)
console.log(numbers.every((num) => num % 3 === 0));
// -  Sort Array from smallest to largest
console.log(numbers.sort((a, b) => a - b));
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers
let largest = numbers.sort((a, b) => a - b).pop();
console.log(largest);
// - Find longest string in strings
let longest = strings.reduce(function (a, b) {
return a.length > b.length ? a : b;
});
console.log(longest);
// - Find all the even numbers
let evenNum = numbers.filter((num) => num % 2 === 0);
console.log(evenNum);
// - Find all the odd numbers
let oddNum = numbers.filter((num) => num % 2 !== 0);
console.log(oddNum);
// - Place a new word at the start of the array use (unshift)
strings.unshift('new word');
// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3, 7));
// - Make a subset of strings array ['a','collection']
console.log(strings.slice(2, 4));
// - Replace 12 & 18 with 1221 and 1881
numbers.splice(numbers.indexOf(12), 1, 1221);
numbers.splice(numbers.indexOf(18), 1, 1881);
console.log(numbers);
// - Replace words in strings array with the length of the word
let stringLength = strings.map((val) => val.length);
console.log(stringLength);
// - Find the sum of the length of words using above question
let sumOf = stringLength.reduce((acc, current) => acc + current);
console.log(sumOf);
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
console.log(customers.filter((customer) => customer.firstname.startsWith("J")));
// - Create new array with only first name
let mapA = customers.map((customer) => customer.firstname);
console.log(mapA);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullName = [];
customers.forEach(function (val) {
  fullName.push(val.firstname + " " + val.lastname);
});
console.log(fullName);
// - Sort the array created above alphabetically
console.log(fullName.sort());
// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowel = [];
let isVowel = (value) => {
  if(
    value.firstname.includes("a") ||
    value.firstname.includes("e") ||
    value.firstname.includes("i") ||
    value.firstname.includes("o") ||
    value.firstname.includes("u")
  ){
    vowel.push(value);
  }
};
customers.filter(isVowel);
console.log(vowel);