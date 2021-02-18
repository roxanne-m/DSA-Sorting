// QuickSort sorting algorithm

// Best & Average case: O(nlog(n))
// Worst case: O(n^2)

// Uses divide & conquer.
function quickSort(array, start = 0, end = array.length){
    if(start >= end){
        return array;
    }
    // partition array into 2 halves around a pivot value
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);    // if less than pivot value store in one array and recursively sort until halves have length of 0 or 1
    array = quickSort(array, middle + 1, end);  // if greater than pivot value store in one array and recursively sort until halves have length of 0 or 1
    return array; // return sorted array
}

// Lomuto's algorithm
function partition(array, start, end){
    const pivot = array[end - 1];   // pivot is the final value in the array
    let j = start;
    // loop through array, swapping values as you go to put them on either side of pivot point
    for(let i = start; i < end-1; i++){
        if(array[i] <= pivot){
            swap(array, i, j);
            j++;
        }
        swap(array, end-1, j);
        return j;   // put the pivot into the correct place in array
    };
}