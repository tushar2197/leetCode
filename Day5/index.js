/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let val = fn(arr[i], i);
    if (val) {
      result.push(arr[i]);
    }
  }
  return result;
};
let arr = [0, 10, 20, 30];
let greaterThan10 = function greaterThan10(n) {
  return n > 10;
};

filter(arr, greaterThan10);
let plus1 = function plus1(n) {
  return n + 1;
};
arr = [-2, -1, 0, 1, 2];
filter(arr, plus1);

let firstIndex = function firstIndex(n, i) {
  return i === 0;
};
arr = [1, 2, 3];
filter(arr, firstIndex);
