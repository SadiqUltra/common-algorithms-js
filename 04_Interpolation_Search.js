/*

Interpolation Search
2.5
Given a sorted array of n uniformly distributed values arr[],
write a function to search for a particular element x in the array.

Linear Search finds the element in O(n) time,
Jump Search takes O(√ n) time and Binary Search take O(Log n) time.
The Interpolation Search is an improvement over Binary Search for instances,
where the values in a sorted array are uniformly distributed.
Binary Search always goes to middle element to check.
On the other hand interpolation search may go to different locations according
 the value of key being searched. For example if the value of key is closer to the last element,
  interpolation search is likely to start search toward the end side.

To find the position to be searched, it uses following formula.

// The idea of formula is to return higher value of position
// when element to be searched is closer to arr[highIndex]. And
// smaller value when closer to arr[lowIndex]
position = lowIndex + ((highIndex - lowIndex) / (arr[highIndex] - arr[lowIndex]) * (x - arr[lowIndex]))

arr[] ==> Array where elements need to be searched
x     ==> Element to be searched
lowIndex    ==> Starting index in arr[]
highIndex    ==> Ending index in arr[]
Algorithm
Rest of the Interpolation algorithm is same except the above partition logic.

Step1: In a loop, calculate the value of position using the probe position formula.
Step2: If it is a match, return the index of the item, and exit.
Step3: If the item is less than arr[position], calculate the probe position of the left sub-array.
 Otherwise calculate the same in the right sub-array.
Step4: Repeat until a match is found or the sub-array reduces to zero.

*/

interpolationSearch = (arr, x) => {
  let lowIndex = 0
  let arrLength = arr.length
  let highIndex = arrLength - 1

  while (lowIndex <= highIndex && x >= arr[lowIndex] && x <= arr[highIndex]) {

    let position = lowIndex + ((highIndex - lowIndex) / (arr[highIndex] - arr[lowIndex]) * (x - arr[lowIndex]))
    // console.log(position);
    position = Math.floor(position)

    if(arr[position] == x){
      return position;
    }

    if(arr[position] > x){
      highIndex = position - 1
    }else{
      lowIndex = position + 1
    }
  }

  return null;

}

// example

let arr = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]
let x = 55
console.log(interpolationSearch(arr, x))
