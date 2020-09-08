let recursiveFn = function(arr, searchVal, start, end) {
    if (arr.length == 0) {
        return 'Please provide non empty array';
    }
    // Base Condition 
    if (start > end) return -1;

    // Find the middle index 
    let mid = Math.floor((start + end) / 2);

    // Compare mid with given key x 
    if (arr[mid] === searchVal) return mid;

    // If element at mid is greater than x, 
    // search in the left half of mid 
    if (arr[mid] > searchVal)
        return recursiveFn(arr, searchVal, start, mid - 1);
    else
    // If element at mid is smaller than x, 
    // search in the right half of mid 
        return recursiveFn(arr, searchVal, mid + 1, end);
}

// Driver code 
let binarySearch = function(arr, searchVal) {
    let result = recursiveFn(arr, searchVal, 0, arr.length - 1)
    return result;
}

binarySearch([1, 2, 3, 5, 7, 8, 9], 9)

module.exports = binarySearch;