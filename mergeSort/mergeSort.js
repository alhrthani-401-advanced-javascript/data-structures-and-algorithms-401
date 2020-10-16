let mergeSort = function (arr) {
  let n = arr.length;
  if (n > 1) {
    let mid = Math.trunc(n / 2);
    // console.log([mid]);
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < mid; i++) {
      leftArr.push(arr[i]);
    }
    // console.log('   leftArray>>', leftArr)
    for (let j = mid; j < arr.length; j++) {
      rightArr.push(arr[j]);
    }
    // console.log('   rightArray>>', rightArr)
    return merge(
      mergeSort(leftArr), mergeSort(rightArr)
    );
  }
  else {
    return arr;
  }

}

// Merge the two arrays: left and right
function merge(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}
module.exports = mergeSort;
