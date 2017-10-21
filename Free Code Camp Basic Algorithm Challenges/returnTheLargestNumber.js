//Return largest numbers in an array //


function largestOfFour(arr) {
  var largestNums = [];
  //create empty array to fill later//
  for (var x = 0; x < arr.length; x++) {
    currentLargest = 0;
    //placeholder for largest number//
    for (var y = 0; y < arr[x].length; y++) {
      if (arr[x][y] >currentLargest) {
        currentLargest = arr[x][y];
      }
    }
    largestNums.push(currentLargest);
    //add largest number to new array//
  }

  return largestNums;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
