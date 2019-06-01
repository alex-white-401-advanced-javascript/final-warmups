'use strict';

const numbers = [4,5,6,100,99,45,17,18,20,0,33,86,49];

const insertionSort = (arr) => {
  for(let i = 1, j; i < arr.length; i++) {
    let temp = arr[i];
    for(j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = temp;
  }
  return arr;
};

const quickSort = (items, compare, left, right) => {

  left = left || 0;
  right = right || items.length - 1;
  compare = compare ? compare : (a,b) => a < b;

  if (items.length > 1){
    let pivot = partition(items, compare, left, right);

    if (left < (pivot - 1)){
      quickSort(items, compare, left, pivot);
    }

    if ((pivot + 1) < right){
      quickSort(items, compare, pivot + 1, right);
    }

  }

  return items;


  function partition(items, compare, left, right, pivot) {
    pivot = pivot || Math.floor((left + right) / 2);

    if (left <= right){
      left = advanceLeft(items, compare, left, pivot);
      right = advanceRight(items, compare, right, pivot);
      if (left <= right){
        if (left < right)
          swap(items, left, right);
        return partition(items, compare, left + 1, right - 1, pivot);
      }
    }

    return pivot;
  }
  
  function swap(items, left, right){
    let tmp = items[left];
    items[left] = items[right];
    items[right] = tmp;
  }

  function advanceLeft(items, compare, left, pivot){
    if (compare(items[left], items[pivot]))
      return advanceLeft(items, compare, left + 1, pivot);
    return left;
  }

  function advanceRight (items, compare, right, pivot){
    if (compare(items[pivot], items[right]))
      return advanceRight(items, compare, right - 1, pivot);
    return right;
  }
  
}

const mergeSort = (arr) => {
  let n = arr.length;
  if(n === 0){
    return arr;
  }
  if (n === 1) {
    return arr;
  }

  const mid = Math.floor(n / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(
    mergeSort(left),
    mergeSort(right)
  );
};
// Pass in left and right split arrays
function merge (left, right) {
  // create empty array and set indexes of left and right
  let resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // while leftIndex is less than the length of the left array and rightIndex is less than the length of the right array...
  while (leftIndex < left.length && rightIndex < right.length) {
    // if left array @ leftIndex(initially 0) is less than right array @ rightIndex then push left @ leftIndex into result Array and increase leftIndex by 1
    if (left[leftIndex] < right[rightIndex]) {
      resultArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      // otherwise push the right @ rightIndex into the result array and increase rightIndex by 1
      resultArr.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // return the resulting arr after concating the two sorted arrays togther 
  return resultArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// console.log(insertionSort(numbers));
// console.log(mergeSort(numbers));
console.log(quickSort(numbers));