let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

function sortLeastToGreatest(arr){
  let oldArr = arr.slice(); // so you don't destroy original array
   let newArr=[];
   let min;
   let length = oldArr.length;
   let i;

  for(i=0; i<length; i++){
     min = findMinValue(oldArr); // find the min
    newArr.push(min); //add the min to the end
    oldArr.splice(oldArr.indexOf(min), 1);//fixme how do i remove one element here
  }
  return newArr;
}

sortLeastToGreatest(nums1);
//console.log(nums1);

/*Within the function:
a) Define a new, empty array to hold the final sorted numbers.
b) Use the findMinValue function to find the minimum value in the old array.
c) Add the minimum value to the new array, and remove the minimum value from the old array.
d) Repeat parts b & c until the old array is empty.
e) Return the new sorted array.
f) Be sure to print the results in order to verify your code.*/

//Your function here...



//Sample arrays for testing:

