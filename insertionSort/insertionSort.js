let insertionSort = function(arr) {
  for (var i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {

      if (arr[j + 1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

module.exports = insertionSort;
