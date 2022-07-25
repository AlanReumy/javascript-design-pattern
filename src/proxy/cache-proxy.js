export let count = 0;

const mult = function (...args) {
  let res = 0;
  for (let i = 0; i < args.length; i++) {
    res *= args[i];
  }
  return res;
};

export const proxyMult = (function () {
  const cache = {};
  return function (...args) {
    if (args in cache) {
      return cache[args];
    }
    count++;
    return (cache[args] = mult.apply(this, args));
  };
})();
