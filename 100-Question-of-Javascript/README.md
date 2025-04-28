# ~~100~~ _**Question of javascript**_

## Day 1 problems

1. ```
   Write a function that accepts a number and returns its square.
   ```

2. ```
   Reverse a string without using the reverse method
   ```

3. ```
   Write a function that accepts two numbers and returns the greater one.
   ```
4. ```
   Check if a number is prime.
   ```
5. ```javascript
   //Convert a callback-based function to a promise.

   function hello(callback) {
     const obj = { name: "John", result: true };
     setTimeout(() => {
       callback(null, obj);
     }, 2000);
   }

   hello(function greet(error, obj) {
     if (error) {
       console.log(error);
     } else {
       console.log(obj);
     }
   });
   ```

6. ```javascript
   //Create a function that adds up the numbers in an array.
   const arr = [1, 2, 3, 4, 5]; // 15
   ```

7. ```javascript
   //Flatten an array of nested arrays into a single array
   const arr = [1, [2], [3, [4, [5], [6]]], 7];
   //output= [1,2,3,4,5,6,7]
   ```

8. ```javascript
   //Write a function that checks if a string is a palindrome.
   isPalindrome("asdfgfdsa"); // true
   isPalindrome("Hello"); // false
   ```
9. ```javascript
   //Find the largest number in an array.
   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //9
   ```
10. ```
    Implement a basic debounce function.
    ```

## Day 2 problems

11. ```
    Create a deep clone function for an object.
    ```
12. ```
    Implement a function to find the factorial of a number.
    ```
13. ```javascript
    //Write a function that returns the Fibonacci series up to a given number.
    example: fibonacci(5); // 0,1,1,2,3
    example: fibonacci(20); // 0,1,1,2,3,5,8,13
    ```
14. ```javascript
    //Find the sum of numbers in a range.
    example: sumNumber(3, 6); //18
    ```
15. ```javascript
    //Convert a promise-based function to async/await.
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const data = "Fetched Data";
          resolve(data);
        }, 1000);
      });
    };
    ```

16. ```javascript
    //Merge two sorted arrays into a single sorted array.
    example: [1, 3, 5], [2, 4, 6]; // [1,2,3,4,5,6]
    ```
17. ```javascript
    //Implement a function to calculate the nth Fibonacci number.
    example: fibonacci(5); //5
    fibonacci(10); //55
    ```
18. ```
    Check if an object is empty.
    ```
19. ```
    Write a function to remove duplicates from an array.
    ```
20. ```
    Create a throttle function
    ```

## Day 3 problems

21. ```
    Implement a function to check if a number is a perfect square.
    ```
22. ```
    Write a function to count the occurrences of a character in a string.
    ```
23. ```
    Implement a function to find the GCD of two numbers.
    ```
24. ```
    Write a function to check if a string contains only digits.
    ```
25. ```
    Calculate the sum of digits of a number.
    ```
26. ```
    Check if a string is an anagram of another string.
    ```
27. ```
    Write a function to merge two objects.
    ```
28. ```
    Implement a function that returns the longest word in a sentence.
    ```
29. ```
    Write a function to generate a random number within a range.
    ```
30. ```
    Create a function to check if a number is even or odd.
    ```

## Day 4 problems

31. ```
    Check if an array is a subset of another array.
    ```
32. ```
    Write a function to flatten an object.
    ```
33. ```
    Write a function that counts how many times a value appears in an array.
    ```
34. ```
    Create a function that removes falsy values from an array.
    ```
35. ```
    Write a function that sorts an array of numbers in ascending order.
    ```
36. ```
    Find the index of a target value in an array using binary search.
    ```
37. ```
    Convert a date object to a readable string format.
    ```
38. ```
    Implement a function to calculate the difference between two dates.
    ```
39. ```
    Write a function to determine if a year is a leap year.
    ```
40. ```
    Create a function to add two arrays element-wise.
    ```

## Day 5 problems

41. ```
    Write a function to find the missing number in a given array of 1 to n.
    ```
42. ```
    Create a function to check if a string is a valid email address.
    ```
43. ```
    Find the largest palindrome in a string.
    ```
44. ```
    Convert a given number to a Roman numeral.
    ```
45. ```
    Implement a function to check if two strings are rotations of each other.
    ```
46. ```
    Implement a function to reverse an array in-place.
    ```
47. ```
    Write a function to find the first non-repeated character in a string.
    ```
48. ```
    Write a function to compute the sum of all multiples of 3 and 5 below a given number.
    ```
49. ```
    Implement a function to find the intersection of two arrays.
    ```
50. ```
    Implement a function to convert a string to title case.
    ```

## Day 6 problems

51. ```
    Find all subsets of a given array.
    ```
52. ```
    Write a function that takes two arrays and finds the union of both arrays.
    ```
53. ```
    Create a function that checks if a string has balanced parentheses.
    ```
54. ```
    Write a function to swap two numbers without using a temporary variable.
    ```
55. ```
    Create a function that takes a string and counts the frequency of each character.
    ```
56. ```
    Write a function that converts a string to a number.
    ```
57. ```
    Implement a function to find the missing letter in a range of characters.
    ```
58. ```
    Write a function that finds the longest increasing subsequence in an array.
    ```
59. ```
    Implement a function that returns the count of vowels in a string.
    ```
60. ```
    Write a function to check if a number is an Armstrong number.
    ```

## Day 7 problems

61. ```
    Write a function that finds the second largest number in an array.
    ```
62. ```
    Implement a function to create a range of numbers given a start and end.
    ```
63. ```
    Write a function that accepts an object and returns a shallow copy of it.
    ```
64. ```
    Convert a 12-hour time format string to 24-hour format.
    ```
65. ```
    Create a function to count down from a given number.
    ```
66. ```
    Implement a function to rotate an array to the left by n positions.
    ```
67. ```
    Write a function to check if two arrays are equal.
    ```
68. ```
    Create a function to deep merge two objects.
    ```
69. ```
    Write a function to find the longest common prefix in an array of strings.
    ```
70. ```
    Create a function to return a specific index of an array.
    ```

## Day 8 problems

71. ```
    Implement a function to find the first duplicate in an array.
    ```
72. ```
    Create a function to count the number of occurrences of a number in a range.
    ```
73. ```
    Write a function to implement a simple calculator.
    ```
74. ```
    Find the most frequent character in a string.
    ```
75. ```
    Implement a function to calculate the area of a rectangle.
    ```
76. ```
    Write a function to extract the keys from an object.
    ```
77. ```
    Write a function that simulates the functionality of `Array.map()`.
    ```
78. ```
    Write a function that simulates the functionality of `Array.filter()`.
    ```
79. ```
    Create a function to find the common elements between two arrays.
    ```
80. ```
    Implement a function to find the missing element in an array of consecutive integers.
    ```

## Day 9 problems

81. ```
    Write a function to convert a number to binary.
    ```
82. ```
    Implement a function to remove all falsy values from an array.
    ```
83. ```
    Write a function to determine if a given string has balanced parentheses.
    ```
84. ```
    Create a function to split a string by a separator.
    ```
85. ```
    Write a function to find the longest consecutive sequence of numbers in an array.
    ```
86. ```
    Implement a function to find the nth largest element in an array.
    ```
87. ```
    Write a function that converts a number to words.
    ```
88. ```
    Create a function to reverse the words in a sentence.
    ```
89. ```
    Implement a function to calculate the median of an array.
    ```
90. ```
    Write a function to remove an element from an array by index.
    ```

## Day 10 problems

91. ```
    Create a function to check if two numbers are anagrams.
    ```
92. ```
    Write a function to generate all combinations of a string.
    ```
93. ```
    Write a function to check if an array is sorted.
    ```
94. ```
    Create a function that generates an array of prime numbers up to a given number.
    ```
95. ```
    Write a function to find all the possible permutations of a string.
    ```
96. ```
    Write a function that returns the character at a given index in a string.
    ```
97. ```
    Implement a function to convert a string to uppercase.
    ```
98. ```
    Write a function to find the sum of an array of numbers without using `reduce()`.
    ```
99. ```
    Create a function that finds the most frequent number in an array.
    ```
100.  ```
      Implement a function to merge multiple arrays into one array
      ```

```

```
