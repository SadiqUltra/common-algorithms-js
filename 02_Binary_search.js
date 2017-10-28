/*
  Binary Search

  Given a sorted array arr[] of n elements, write a function to search a given element x in arr[].

  A simple approach is to do linear search.The time complexity of above algorithm is O(n).
  Another approach to perform the same task is using Binary Search.

  Binary Search: Search a sorted array by repeatedly dividing the search interval in half.
  Begin with an interval covering the whole array. If the value of the search key
  is less than the item in the middle of the interval, narrow the interval to the lower half.
  Otherwise narrow it to the upper half.
  Repeatedly check until the value is found or the interval is empty.
*/

binarySearch = (arr, x) => {
  let lower = 0
  let higher = arr.length - 1

  while(lower <= higher) {
    // taking integer
    let middle = Math.floor((lower + higher) / 2)

    // If the element is present at the middle itself
    if ( arr[middle] === x) return middle

    // If element is smaller than mid, then it can only
    // be present in left subarray
    if ( x < arr[middle] ) higher = --middle

    // Else the element can only be present in right
    // subarray
    if ( x > arr[middle] ) lower = ++middle
  }

  return null
}

let arr = [1, 2, 3, 4, 12, 50, 210]
let x = 12
console.log(binarySearch(arr, x))
