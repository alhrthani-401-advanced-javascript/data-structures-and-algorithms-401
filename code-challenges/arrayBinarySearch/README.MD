# Challenge Summary
Binary search in a sorted 1D array


## Challenge Description
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.


## Approach & Efficiency
There is many solution for this challenge. After thinking of Big O, I think the best one is create a recursive function that takes four arguments (array,search value, start, end) start and end will declare the start and the end of the interval we will work on and at the very start the values of start will be 0 and end will be arr.length.  
Inside the function we will check if the start>end this means that the value is not in the array.  
Then we will get the mid by summimg the start and end then devide the result by 2 and take the floor for the result. The rsulting value is the mid.
We will check the arr[mid] with the search value
- If value is greater then we will run the function again with start =mid+1 and end =end
- If arr[mid] is greater then we will run the function again with start =0 and end =mid-1

## Solution
<!-- Embedded whiteboard image -->
![whiteboard image](assets/array-binary-search.jpg)