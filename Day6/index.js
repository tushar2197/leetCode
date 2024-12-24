/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let val = 0;
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }
  return init;
};

const sun = function sum(accum, curr) {
  return accum + curr;
};
let nums = [1, 2, 3, 4];
let init = 0;
reduce(nums, sun, init);
const sum = function sum(accum, curr) {
  return accum + curr * curr;
};
let initV = 100;
reduce(nums, sum, initV);
