Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
  - Parameter: (String Data Type).
  - Return: A new string representing the calling string converted to uppercase.
  - Example: 
  ```js
  let name = 'Arya Stark';
  name.toUpperCase();
  let sentance = 'A quick brown fox jumped over a lazy dog';
  sentance.toUpperCase();
  let houseName = 'Stark';
  houseName.toUpperCase();
  ```
  `toUpperCase` - can be change lowercase strings value to uppercase it's an only string data type value.
3. `toLowerCase`
  - Parameter: (String Data Type).
  - Return: A new string representing the calling string converted to lowercase.
  - Example: 
  ```js
  let name = 'Arya Stark';
  name.toLowerCase();
  let sentance = 'A quick brown fox jumped over a lazy dog';
  sentance.toLowerCase();
  let houseName = 'Stark';
  houseName.toLowerCase();
  ```
  `toLowerCase` - can be change uppercasecase strings value to lowercase it's an only string data type value.
4. `trim`
  - Return: A new string representing str stripped of whitespace from both is beginning and start.
  - Example: 
  ```js
  let name = '   Arya Stark    ';
  nametrim();
  let sentace = ' A quick brown fox jumped over a lazy dog  ';
  sentance.trim();
  let houseName = ' Stark '; 
  houseName.trim();
  ```
  `trim`: can removed whitespace in the start and last both whitespace removed with the help of trim.
5. `trimEnd`
  - Return: A new string representing str stripped of whitespace from its right side.
  - Example: 
  ```js
  let name = '   Arya Stark    ';
  name.trimEnd();
  let sentance = ' A quick brown fox jumped over a lazy dog  ';
  sentance.trimEnd();
  let houseName = ' Stark ';
  houseName.trimRight();
  ```
  `trimEnd`: can removed the whitespace from the end of right side. and we can also use trimRight to remove the right side of the whitespace.
6. `trimStart`
  - Return: A new string representig str stripped of whitespace from its left side.
  ```js
   let name = '   Arya Stark    ';
  name.trimEnd();
  let sentance = ' A quick brown fox jumped over a lazy dog  ';
  sentance.trimEnd();
  let houseName = ' Stark ';
  houseName.trimRight();
  ```
  `trimStart` - can removed the whitespace in the starting from left side.
7. `concat`
  - Parameter: One or more strings to concatenate to string.
  - Return Value: A new string containing the combined text of the stings provided.
  ```js
  let name = 'Arya';
  let name1 = 'Stark';
  name.concat(' ', name1);
  let sentance = 'A quick brown fox jumped';
  let sentance1 = 'over a lazy dog.';
  sentance.concat(', ', sentance1);
  let houseName = 'Stark';
  houseName.concat(' ', name);
  ```
  `concat` - we can use concat to add some text and anything in the between of strings.
8. `endsWith`
  - Parameters: The characters to be searched for all at the end of string.
  - Return Value: it will show true if the characters searched is same if not then it will show false.
  ```js
  let name = 'Arya';
  name.endsWith('a');
  let sentance = 'A quick brown fox jumped over a lazy dog';
  sentance.endsWith('dog', 20);
  let houseName = 'Stark';
  houseName.endsWith('ak');
  ```
  `endsWith` - it can helps use to find the last value of string and length of it we are looking for and gives us the output with true or false.
9. `includes`
  - Parameters: A string to be searched for withing string.
  - Return Value: it will gives us true or false.
  ```js
  const name = 'Arya Stark';
  name.includes('Stark');
  const sentance = 'The quick brown fox jumps over the laxy dog.';
  sentance.includes('quick', 5);
  const houseName = 'Stark';
  houseName.includes('Arya');
  ```
  `includes` : it will give us the value from the string and tell us the value is correct or not so we can see it and it will also tell us the position of the value in the string.
10. `indexOf`
  - Parameter: (string data type)
  - Return Value: The index of the firt occurence of search value or -1 if not found.
  ```js
  let name = 'Arya';
  name.indexOf('y');
  let sentance = 'The quick brown fox jumps over the laxy dog.';
  sentance.indexOf('brow', 10);
  let houseName = 'Stark';
  houseName.indexof('t', 2);
  ```
  `indexOf` : this will find the value fromt he string and give use the value that where is the string is presented.
11. `lastIndexOf`
  - Parameter : (string data type)
  - Return Value : the index of the last occurence of sarch value of -1 if not find.
  ```js
  let name = 'Arya';
  name.lastIndexOf('y');
  let sentance = 'The quick brown fox jumps over the laxy dog.';
  sentance.lastIndexOf('quick' , 5);
  let houseName = 'Stark';
  houseName.lastIndexOf('t');
  ```
  `lastIndexOf` : this will find the value fromt he string and give use the value that where is the string is presented.
12. `padEnd`
  - Parameter: (string data type) 
  - Return Value: A string of the specified targetlength with the padstring applied at the enf of the current string.
  ```js
  let name = 'Arya';
  name.padEnd(5);
  let sentance = 'The quick brown fox jumps over the lazy dog.';
  sentance.padEnd(4, '.');
  let houseName = 'Stark';
  houseName.padEnd(10, '/');
  ```
  `padEnd` : with this we can add anything at the end.
13. `padStart`
  - Parameter : (string data type)
  - Return Value : A string of the specified target length with the pad string applied from the start.
  ```js
  let name = 'Arya';
  name.padStart(5);
  let sentance = 'The quick brown fox jumps over the lazy dog.';
  sentance.padStart(4, '.');
  let houseName = 'Stark';
  houseName.padStart(10, '/');
  ```
  `padStart`: with this we can add anythng at the start.
14. `repeat`
  - Return Value : we can repeat any value.
  ```js
  let name = 'Arya';
  name.repeat(5);
  let sentance = 'The quick brown fox jumps over the lazy dog.';
  sentance.repeat(1);
  let houseName = 'Stark';
  houseName.repeat(10);
  ```
15. `replace`
  - Parameter : We can replace any value.
  - Return Value : we will get the new value.
  ```js
  let name = 'Arya';
  name.replace('Arya' ,'Stark');
  let sentance = 'The quick brown fox jumps over the lazy dog.';
  sentance.replace('dog', 'lion');
  let houseName = 'Stark';
  houseName.replace('Stark', 'Arya');
  ```
  `replace` : we can replace any value with a new value.
16. `slice`
  - Parameter : The zero-based index at which to begin extraction.
  - Return Value : A new string containing the extracted section of the string.
  ```js
  let name = 'Arya';
  name.name(2);
  let sentance = 'The quick brown fox jumps over the lazy dog.';
  sentance.slice(5, -4);
  let houseName = 'Stark';
  houseName.slice(3);
  ```
  `slice`: We can remove some value with the help of slice.
17. `split`
  - Parameter : The patter describing where each split should occur.
  - Return Values : An array of strings, split at each point where the separator occurs in the given string.
  ```js
  let name = 'Arya';
  name.split(' ');
  let sentance = 'The quick brown fox jumps over the lazy dog.';
  sentance.split('');
  let houseName = 'Stark';
  houseName.split(' ');
  ```
  `split` : it will gie us array with all the space or it will just give us some array value.
18. `substring` 
  - Paramter : The index of the first character to include in the returnd substring.
  - Return Value : A new string containing the specified part of the given string.
  ```js
  let name = 'Arya';
  name.name(2);
  let sentance = 'The quick brown fox jumps over the lazy dog.';
  sentance.slice(5, 2);
  let houseName = 'Stark';
  houseName.slice(3);
  ```
  `substring` : we can get what we want from the string value.