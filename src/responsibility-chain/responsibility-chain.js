const order500 = (orderType, pay, stock) => {
  if (orderType === 1 && pay === true) {
    console.log("500元定金预购,100优惠券");
  } else {
    return "nextSuccessor";
  }
};

const order200 = (orderType, pay, stock) => {
  if (orderType === 2 && pay === true) {
    console.log("200元定金预购,50优惠券");
  } else {
    return "nextSuccessor";
  }
};

const orderNormal = (orderType, pay, stock) => {
  if (stock > 0) {
    console.log("普通购买，无优惠券");
  } else {
    console.log("手机库存不足");
  }
};

class Chain {
  constructor(fn) {
    this.fn = fn;
    this.successor = null;
  }
}

Chain.prototype.setNextSuccessor = function (successor) {
  return (this.successor = successor);
};

Chain.prototype.passRequest = function () {
  const res = this.fn.apply(this, arguments);
  if (res === "nextSuccessor") {
    return this.successor && this.passRequest.apply(this.successor, arguments);
  }
  return res;
};

const chainOrder500 = new Chain(order500);
const chainOrder200 = new Chain(order200);
const chainOrderNormal = new Chain(orderNormal);

chainOrder500.setNextSuccessor(chainOrder200);
chainOrder200.setNextSuccessor(chainOrderNormal);

chainOrder500.passRequest(1, false, 500);
chainOrder500.passRequest(2, true, 500);
chainOrder500.passRequest(3, true, 500);
chainOrder500.passRequest(4, false, 0);
