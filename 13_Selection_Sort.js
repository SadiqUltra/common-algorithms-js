/*

Selection Sort

The selection sort algorithm sorts an array by
repeatedly finding the minimum element
(considering ascending order) from unsorted part and
putting it at the beginning. The algorithm maintains
two subarrays in a given array.

1) The subarray which is already sorted.
2) Remaining subarray which is unsorted.

In every iteration of selection sort,
the minimum element (considering ascending order)
from the unsorted subarray is picked and moved
to the sorted subarray.

Following example explains the above steps:

arr[] = 64 25 12 22 11

// Find the minimum element in arr[0...4]
// and place it at beginning
11 25 12 22 64

// Find the minimum element in arr[1...4]
// and place it at beginning of arr[1...4]
11 12 25 22 64

// Find the minimum element in arr[2...4]
// and place it at beginning of arr[2...4]
11 12 22 25 64

// Find the minimum element in arr[3...4]
// and place it at beginning of arr[3...4]
11 12 22 25 64

*/

// Swap index of 2 element
Array.prototype.swapPosition = function ( firstIndex, secondIndex ) {
    let item = this[secondIndex]
    this.splice( secondIndex, 1);
    this.splice( firstIndex, 0, item );
};

selectionSort = (array) => {
  let maxIndex = array.length - 1

  array.map((parentA, key) => {

    let smallElementIndex = key
    for(let i = key+1; i <= maxIndex; i++){
      // finding smallest one
      if(array[i] < array[smallElementIndex])
        smallElementIndex = i
    }
    array.swapPosition(key, smallElementIndex)
  })

  return array;
}

// example

let arr = [64, 25, 12, 22, 11]

console.log(selectionSort(arr))
