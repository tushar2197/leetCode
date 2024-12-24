/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: function (toBeval) {
      if (val === toBeval) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (toBeval) {
      if (val !== toBeval) {
        return true;
      } else {
        if (val === toBeval) {
          throw new Error("Equal");
        }
        throw new Error("Not Equal");
      }
    },
  };
};
try {
  //  expect(5).toBe(5); // true
  expect(5).notToBe(5); // throws "Equal"
} catch (err) {
  console.log(err);
}
