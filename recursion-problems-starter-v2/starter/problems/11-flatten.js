/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
// function flatten(arr, newArr = []) {
//   if (arr.length === 0) {
//     return newArr;
//   }

//   if (Array.isArray(arr[0])) {
//     return flatten(arr[0], newArr)
//   } else {
//     newArr.push(arr[0]);
//   }

//   return flatten(arr.slice(1), newArr);
// }

function flatten(arr, newArr = [], index = 0) {
  if (index === arr.length) {
    return newArr;
  }

  if (Array.isArray(arr[index])) {
    return flatten(arr[index], newArr, index = 0);
  } else {
    newArr.push(arr[index]);
  }

  return flatten(arr, newArr, index + 1);
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
