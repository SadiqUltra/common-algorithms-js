/*
Insertion sort is a simple sorting algorithm
that works the way we sort playing cards in our hands.

Algorithm
// Sort an arr[] of size n
insertionSort(arr, n)
Loop from i = 1 to n-1.
……a) Pick element arr[i] and
insert it into sorted sequence arr[0…i-1]

*/


insertionSort = (array) => {
  array.map((a, key) => {
    for(let i = key-1; i >= 0; i--){
      if(arr[i] > a){
        arr[i+1]= arr[i]
        arr[i] = a
      }
    }
  })

  return array
}


// example

let arr = [100, 55, 289, 14, 23, 77, 10]

console.log(insertionSort(arr))
// [ 10, 14, 23, 55, 77, 100, 289 ]
