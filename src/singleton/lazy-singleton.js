export const getSingle = function (fn) {
  let instance = null;
  return function () {
    instance || (instance = fn.apply(this, arguments));
  };
};
