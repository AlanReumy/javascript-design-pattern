const event = {
  clientList: {},
  listen(key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = [];
    }
    this.clientList[key].push(fn);
  },
  trigger(key, ...args) {
    const fns = this.clientList[key];
    if (!fns || fns.length === 0) {
      return false;
    }
    for (let i = 0; i < fns.length; i++) {
      fns[i].apply(this, args);
    }
  },
  remove(key, fn) {
    const fns = this.clientList[key];
    if (!fns || fns.length === 0) {
      return false;
    }
    if (!fn) {
      fns && (fns.length = 0);
    } else {
      for (let i = fns.length - 1; i >= 0; i--) {
        const _fn = fns[i];
        if (_fn === fn) {
          fns.splice(i, 1);
        }
      }
    }
  },
};

export const installEvent = (obj) => {
  for (let key in event) {
    obj[key] = event[key];
  }
};
