/*
Linear Search
Problem: Given an array arr[] of n elements, write a function to search a given element x in arr[].
*/

linierSearch = (arr, x) => {
  let arrLength = arr.length
  for (var i = 0; i < arrLength; i++) {
    // Return the index of the element if the element
    // is found
    if(arr[i] === x) return i
  }

  // return null if the element is not found
  return null;
}

// Example:

let arr = [1, 2, 3, 4, 12, 50, 210]
let x = 12
console.log(linierSearch(arr, x))
