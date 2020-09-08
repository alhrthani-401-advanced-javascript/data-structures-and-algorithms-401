# Insert and Shift Array
We have an array and a value that we want to insert in the middle of the array.

## Challenge
There is many ways to implement but the challenge is how to get the result with the minimest Big O of time and space.

## Approach & Efficiency
My Approach was to divide the length of array by 2 then take the result as a position for the value that we want to insert. Then loop from the array.length to the position and each loop decrease the index with 1.
Inside each loop we will assign the value of the index we are looping on it to the next index in order. Then we will check if we reached index value equals to position value then we will assign the value to the index we are looping on. I think the solution efficiency is so good since we only do one loop and there is no decleration for another array.

## Solution
Divide the length of array by 2 then take the result as a position for the value that we want to insert.
Loop from the array.length to the position and each loop decrease the index with 1.
Each loop, assign the value of the index to the next index in order.
Assign the value to the index with value equal to position. 
![whiteboard image](assets/array-shift.jpg)