export const Singleton = function (name) {
  this.name = name;
  this.instance = null;
};

Singleton.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
};
