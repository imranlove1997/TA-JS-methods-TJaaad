let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
let gradeTotal = persons.reduce(function (acc, cv) {
  return acc + cv.grade;
}, 0) / persons.length;
console.log(gradeTotal);
// Find the average grade of male
let maleGrade = persons.filter((p) => p.sex === "M");
maleGrade.reduce((acc, cv) => {
  return acc + cv.grade;
}, 0) / maleGrade.length;
console.log(maleGrade);
// Find the average grade of female
let femaleGrade = persons.filter((p) => p.sex === "F");
femaleGrade.reduce((acc, cv) => {
  return acc + cv.grade;
}, 0) / femaleGrade.length;
console.log(femaleGrade);
// Find the highest grade
let highestGrade = persons.map((value) => value.grade).sort((a, b) => a - b).pop();
console.log(highestGrade);
// Find the highest grade in male
let highestGradeMale = persons.filter((value) => value.sex === "M").map((value) => value.grade).sort((a, b) => a - b).pop();
console.log(highestGradeMale);
// Find the highest grade in female
let highestGradeFemale = persons.filter((value) => value.sex === "F").map((value) => value.grade).sort((a, b) => a -b).pop();
console.log(highestGradeFemale)
// Find the highest grade for people whose name starts with 'J' or 'P'
let highestGradeJP = persons.filter(function(value) {
  return value.name.startsWith("J") || value.name.startsWith("P");
});
console.log(highestGradeJP);


const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
let fruitsObj = fruitBasket.reduce((acc, namef) => {
  if (acc[namef]) {
    acc[namef] = acc[namef] + 1;
  } else {
    acc[namef] = 1;
  }
  return acc;
}, {});
console.log(fruitsObj);
/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/

let keysArr = Object.keys(fruitsObj);
console.log(keysArr);

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

let flatData = data.reduce((acc, cv) => {
  acc = acc.concat(cv);
  return acc;
}, []);
console.log(flatData);
// Using reduce flat data array

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

let flatDataTwo = dataTwo.reduce((acc, cv) => {
  acc = acc.concat(cv.flat(Infinity));
  return acc;
}, []);
console.log(flatDataTwo);

// Using reduce flat dataTwo array

/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

function increment(num) {
  return num + 1;
}
function double(num) {
  return num * 2;
}
function decrement(num) {
  return num - 1;
}
function triple(num) {
  return num * 3;
}
function half(num) {
  return Math.round(num / 2);
}

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

console.log(pipeline.reduce(function(acc, cv) {
  acc = cv(acc);
  return acc
}, 3)
);

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8
console.log(pipeline2.reduce(function(acc, cv) {
  acc = cv(acc);
  return acc;
}, 8)
);