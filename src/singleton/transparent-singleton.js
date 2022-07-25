export const Singleton = (function () {
  let instance = null;

  const Singleton = function (name) {
    if (instance) {
      return instance;
    }
    this.name = name;
    return (instance = this);
  };

  return Singleton;
})();
