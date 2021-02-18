// Bubble Sort

// Loop through an array to find out whether adjacent values need swapping,
// & keep going until no more values need swapping.

// Best case: O(n), if nodes are already in order and only needs to check each pair one time.
//  Worst and Average case: O(n^2), each value needs swapping with each other.

// Swap simply swaps values at 2 indices in an array
function swap(array, i, j){
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

// Looks through 2 adjacent pairs, if numbers are in wrong order, swaps them around and increases swaps counter.
function bubbleSort(array){
    let swap = 0;
    for(let i = 0; i < array.length - 1; i++){
        if(array[i] > array[i + 1]){
            swap(array, i, i+1);
            swaps++;
        }
    }
    // if swaps was greater than 0, the list is not in correct order yet, so need to call bubbleSort again.
    if(swaps > 0){
        return bubbleSort(array);
    }
    // otherwise, return sorted array
    return array;
}