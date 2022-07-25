const Singleton = function (name) {
  this.name = name;
};

export const proxySingleton = (function () {
  let instance = null;
  return function (name) {
    if (!instance) {
      instance = new Singleton(name);
    }
    return instance;
  };
})();
