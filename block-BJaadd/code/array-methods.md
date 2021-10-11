Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
  - Parameter: It can be used as a separator to separate array from each one and it will join it together. It will only work in array.
  - Return Value: A string value will be join together.
  ```js
  let numbers = [1, 2, 3];
  numbers.join(); // '1,2,3'
  numbers.join(''); // '1 2 3'
  numbers.join(-); // 1-2-3
  ```
  - `join` it can add anything in the middle if there's nothing in the middle the default value will ,
  - No it does not mutate the original array.
3. `flat`
  - Parameter: We can add the array inside the an array and call it anytime.
  - Return Value: New array can be conatenated into it.
  ```js
  let num = [1, 2, 3];
  num.flat(); //(3) [1, 2, 3]
  let numbers = [1, 2, 3, [4, 5, 6]];
  numbers.flat(0); //(4) [1, 2, 3, Array(3)]
  let number = [1, 2, 3, [4, 5, 6]];;
  number.flat(1); //(6) [1, 2, 3, 4, 5, 6]
  ```
  - `flat ` It can be used as a array and subarray to make it run.
  - No it does not mutate the original array.
4. `push`
- Parameter: The element to add to the end of the array.
- Return Value: We will get the new value in the array to the end.
```js
let numbers = [1, 2, 3];
numbers.push(4); // (4) [1, 2, 3, 4]
numbers.push(5); // (5) [1, 2, 3, 4, 5]
numbers.push(6); // (6) [1, 2, 3, 4, 5, 6]
```
- `push` it will add a new array in the same array to the end of the array.
- Yes it does mutate the original array.
5. `indexOf`
  - Parameter: Locate in the array.
  - Return Value: The value where is array located 
  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7];
  numbers.indexOf(2); // 1
  numbers.indexOf(2, 1); // 1
  numbers.indexOf(6); // 5
  ```
  - `indexOf` It will locate the array and find that in that array.
  - It does not mutate the original array.
6. `lastIndexOf`
- Parameter: Element to search in the array.
- Return Value: The last index of the array.
```js
let numbers = [1, 2, 3, 4, 5, 5];
numbers.lastIndexOf(5); // 5
let numbers = [1, 2, 3, 4, 5, 1];
numbers.lastIndexOf(1); // 5
let numbers = [1, 2, 3, 4, 5, 3];
numbers.lastIndexOf(3); // 5
```
- `lastIndexOf` It will give us the last value of array if there's another same value.
- It does not mutate the origianl array.
7. `includes` 
- Parameter: it will show the array value is presented in the array 
- Return Value: it will show boolean data type 
```js
let numbers = [1, 2, 3, 4, 5, 6];
numbers.includes(2); // true 
numbers.includes(3); // true
numbers.includes(7); // false
```
- `includes` it will show inside array of which is inside an array available
- it does not mutate the orignal array  
8. `reverse`
- Parameter: (string data type )
- Return Value: The reversed array
```js
let numbers = [1, 2, 3];
numbers.reverse(); // (3) [3, 2, 1]
let numbers = ['one', 'two', 'three' ];
numbers.reverse(); // (3) ['three', 'two', 'one']
let numbers = [1, 2, 3, 4, 5, 6];
numbers.reverse();  // (6) [6, 5, 4, 3, 2, 1]
```
- `reverse` It will reverse the array.
- It does mutate the original arrya.
9. `every`
- Parameter: A function to test for each element.
- Return Value: it is an boolean data type.
```js
let numbers = [1, 2, 3, 4, 5];
let number = (num) => num === 1; 
numbers.every(number); // false
let number = (num) => num < 20;
numbers.every(number);  // true
let number = (num) => num > 20;
numbers.every(number);  // false
```
- `every` it will give us boolean value to search the value in every array.
- It does not mutate the original value.
10. `shift`
- Return Value: the removed element from the array.
```js
let numbers = [1, 2, 3, 4, 5, 6];
numbers.shift(); // (5) [2, 3, 4, 5, 6]
numbers.shift(4); // (4) [3, 4, 5, 6]
numbers.shift(); // (3) [4, 5, 6]
```
-`shift` it will remove the value of first element from the array.
- It does mutate the original value.
11. `splice`
- Parameter: The index at which to start changing the array.
- Return Value: An array containing the deleted elements.
```js
let numbers = [1, 2, 3, 4, 5, 6];
numbers.splice(1, 0, 4); // [1, 4, 2, 3, 4, 5, 6]
numbers.splice(5, 1, 4); // [1, 4, 2, 3, 4, 4, 6]
numbers.splice(2, 1, 4); // [1, 4, 4, 3, 4, 4, 6]
```
- `splice` it will remove the index and add a new value.
- it does mutate the original array. 
12. `find`
- Prameter: function to execute on each value in the array
- Return Value: The value of the first element in the array that satisfies the provided testing function.
```js
let numbers = [1, 2, 3, 4, 5, 6];
let number = (num) => num > 4;
numbers.find(number); // 5
let number = (num) => num < 4;
numbers.find(number); // 1
let number = (num) => num > 7;
numbers.find(number); // undefined
```
- `find` it will find the value in the array.
- It does not mutate the original array.
13. `unshift`
- Parameter: The element to add in the front array.
- Return Value: The new array of the updated valued.
```js
let numbers = [1, 2, 3];
numbers.unshift(4); // [4, 1, 2, 3]
numbers.unshift(5, 6); // [5, 6, 4, 1, 2, 3]
numbers.unshift(7); // [7, 5, 6, 4, 1, 2, 3]
```
- `unshift` it will add a new value in the start of the array.
- It does mutate the original array.
14. `findIndex`
- Parameter: a function to execute on each value in the array until the function returns true.
- Return Value: the index of the first element in the array that passes the test.
```js
let numbers = [1, 2, 3, 4, 5, 6];
let number = (num) => num > 1;
numbers.findIndex(number); // 1
let number = (num) => num < 2;
numbers.findIndex(number); // 2
let number = (num) => num > 3;
numbers.findIndex(number); // 3
```
- `findIndex` it will found the value in the array.
- It does not mutate the orginal array.
15. `filter`
- Parameter: Function is a predicate to tet each element of the array.
- Return Value: A new array with elements that pass the test.
```js
let numbers = [1, 2, 3, 4, 5, 6];
let number = (num) => num > 4;
numbers.filter(number); // (2) [5, 6]
let number = (num) => num < 4;
numbers.filter(number); // (3) [1, 2, 3]
let number = (num) => num > 7;
numbers.filter(number); // []
```
- `filter` it will give the value from the array.
- It does not mutate the original array
16. `flat`
- Parameter: The depth level specifying how deep a nested array structure should be flatterened.
- Return Value: An new array with the sub-array elements concatenated into it.
```js
let numbers = [1, 2, 3, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]
let numbers = [1, 2, 3, [4, 5, 6]]; // [1, 2, 3, 4, 5, 6]
let numbers = [1, 2, 3, [[4, 5, 6]]]; // [1, 2, 3, Array(3)]
```
- `flat` It will give us the value form the array and from the concatenated array.
-It does not mutate the original array.
17. `forEach`
- Parameter: Function to execute the array.
- Return Value: undefined
```js
let numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach(element => console.log(element));
numbers.forEach(element => console.log(element));
numbers.forEach(element => console.log(element));
```
- `forEach` defined the each value from array one by one.
- It does not mutate the original array.
18. `map`
- Parameter: 
- Return Value:
```js
let numbers = [1, 2, 3, 4, 5, 6];
let number = numbers.map(num => num * 2); // [2, 4, 6, 8, 10, 12]
let number = numbers.map(num => num * 4); // [4, 8, 12, 16, 20, 24]
let number = numbers.map(num => num * 10); // [10, 20, 30, 40, 50, 60]
```
- `map` it can add all value in the array.
- It does not mutate the original array.
19. `pop`
- Parameter: It will remove the value from array.
- Return Value: remove element from the array
```js
let numbers = [1, 2, 3, 4, 5, 6];
numbers.pop(); // [1, 2, 3, 4, 5]
numbers.pop(); // [1, 2, 3, 4]
numbers.pop(); // [1, 2, 3]
```
- `pop` it will remove the value at end from array.
- It does mutate the original array.
20. `reduce`
- Parameter: takes four argument
- Return Value: reduce give he vlue of complete array
```js
let numbers = [1, 2, 3, 4, 5, 6];
let number = (acc, num) => acc + num;
numbers.reduce(number); // 21
numbers.reduce(number, 5); // 26
numbers.reduce(number, 10); // 31
```
- `reduce` we can add the total numbers of array.
- It does not mutate the original array
21. `slice`
- Parameter: extraction from the array.
- Return Value: An new array containing the extracted elements.
```js
let numbers = [1, 2, 3, 4, 5, 6];
numbers.slice(); // [1, 2, 3, 4, 5, 6]
numbers.slice(1); // [2, 3, 4, 5, 6]
numbers.slice(1, 5); // [2, 3, 4, 5]
```
- `slice` it will just extract the value from the array.
- It does not mutate the orginal array.
22. `some`
- Parameter: A function which is for testing the value.
- Return Value: it returns a truthy value
```js
let numbers = [1, 2, 3, 4, 5, 6];
let number = (num) => num % 2 === 2; // false
let number = (num) => num * 2 === 5; // false
let number = (num) => num % 2 !== 5; // true
```
- `some` Giving the value if the value is available or not.
- It does not mutate the original array.
