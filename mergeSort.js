//Elegant but little complicated solution
function mergeSort(array) {
  let length = array.length;
  if (length <= 1) return array;

  const mid = Math.floor(length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const sortedArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) sortedArray.push(left.shift());
    else sortedArray.push(right.shift());
  }
  return sortedArray.concat(left, right);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));

/* Not elegant but less complicated solution for understanding
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(leftArr, rightArr) {
  const tempSortedArr = [];

  while (leftArr.length && rightArr.length) {
    let leftFirstVal = leftArr[0];
    let rightFirstVal = rightArr[0];

    if (leftFirstVal < rightFirstVal) {
      //Shift change orginal array and return first value
      let removedFirstLeftVal = leftArr.shift();
      tempSortedArr.push(removedFirstLeftVal);
    } else {
      let removedFirstRightVal = rightArr.shift();
      tempSortedArr.push(removedFirstRightVal);
    }
  }

  const sortedArr = tempSortedArr.concat(leftArr, rightArr);
  return sortedArr;
} */
