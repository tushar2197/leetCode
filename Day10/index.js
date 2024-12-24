/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const mapData = new Map();
  return function (...args) {
    let key = JSON.stringify(args);
    if (mapData.has(key)) {
      return mapData.get(key);
    }
    let result = fn.apply(this, args);
    mapData.set(key, result);
    return result;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1
