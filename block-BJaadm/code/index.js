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

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map((person) => person.name)
console.log(peopleName);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((person) => person.grade);
console.log(peopleGrade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((person) => person.sex);
console.log(peopleSex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let filteredName = peopleName.filter((name) =>
name.startsWith("J") || name.startsWith("P") ? true : false);
console.log(filteredName);
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let filterName = peopleName.filter((name) => name.startsWith("A") || name.startsWith("C") ? true : false);
console.log(filterName);
// Log all the filtered male ('M') in persons array
console.log(persons.filter((person) => person.sex === "M"));
// Log all the filtered female ('F') in persons array
console.log(persons.filter((person) => person.sex === "F"));
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(
  persons.filter(function (value) {
    return (
      (value.sex == "F" && value.name.startsWith("C")) ||
      (value.sex == "F" && value.name.startsWith("J"))
    );
  })
);
// Log all the even numbers from peopleGrade array
let evenNum = peopleGrade.filter((num) => num % 2 === 0);
console.log(evenNum);
// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.find((letter) => letter.name.startsWith("J")));
// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.find((letter) => letter.name.startsWith("P")));
// Find the first name that starts with 'J', grade is greater than 10 and is a female
let firstName = persons.find((element) => element.name.startsWith("J") && element.grade > 10 && element.sex === "F");
console.log(firstName);
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((person) => person.sex === "F");
console.log(femalePersons);
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((person) => person.sex === "M");
console.log(malePersons);
// Find the sum of all grades and store in gradeTotal
let grandTotal = persons.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.grade;
}, 0);
console.log(grandTotal);
// Find the average grade
console.log(grandTotal / peopleGrade.length);
// Find the average grade of male
let maleGrade = persons.filter((person) => person.sex === "M");
maleGrade.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.grade;
}, 0) / maleGrade.length;
console.log(maleGrade);
// Find the average grade of female
let femaleGrade = persons.filter((person) => person.sex === "F");
femaleGrade.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.grade;
}, 0) / femaleGrade.length;
console.log(femaleGrade);
// Find the highest grade
console.log([...peopleGrade].sort((a, b) => a - b).pop());
// Find the highest grade in male
let maleHighGrade = malePersons.map(function (value) {
  return value.grade;
});
console.log(maleHighGrade);
// Find the highest grade in female
let femaleHighGrade = femalePersons.map(function (value) {
  return value.grade;
});
console.log(femaleHighGrade);
// Find the highest grade for people whose name starts with 'J' or 'P'
let highGradeName = persons.filter(function(value) {
  return value.name.startsWith("J") || value.name.startsWith("P");
});
console.log(highGradeName);
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a, b) => a - b);
console.log(peopleGrade);
// Sort the peopleGrade in descending order
peopleGrade.sort((a, b) => b - a);
console.log(peopleGrade);
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
[...peopleGrade].sort((a, b) => b - a);
console.log(peopleGrade);
// Sort the array peopleName in ascending `ABCD..Za....z`
peopleName.sort();
console.log(peopleName);
// Sort the array peopleName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopleName].sort();
console.log(peopleName);