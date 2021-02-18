// Merge sort

// Divide & conquer. Breaks array down into continually smaller chunks, then merges them back together in correct order.
// Best, Average, and Worst case: O(nlog(n)), and is better than bubble sort.

function mergeSort(array) {
  // If array has 1 or 0 elements, then it is by definition sorted. Return array itself
  if (array.length <= 1) {
    return array;
  }

  // Otherwise, slice array into 2 halves
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle); // left half
  let right = array.slice(middle, array.length); // right half

  // recursively call mergeSort for each half
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array); //then merge together by calling merge function
}

function merge(left, right, array) {
  // set indices to 0
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    // if left value is less than right value add left to array, else add right to array
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  // when 1 array is empty, you add all remaining values from the other array to it.
  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }

  return array;
}
