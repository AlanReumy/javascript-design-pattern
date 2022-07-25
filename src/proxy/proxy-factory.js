export let multCount = 0;
export let plusCount = 0;

export const mult = function (...args) {
  let res = 0;
  for (let i = 0; i < args.length; i++) {
    res *= args[i];
  }
  multCount++;
  return res;
};

export const plus = function (...args) {
  let res = 0;
  for (let i = 0; i < args.length; i++) {
    res += args[i];
  }
  plusCount++;
  return res;
};

export const createProxyFactory = function (fn) {
  const cache = {};
  return function (...args) {
    if (args in cache) {
      return cache[args];
    }
    return (cache[args] = fn.apply(this, args));
  };
};
