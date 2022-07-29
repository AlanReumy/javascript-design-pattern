const plane = {
  fire() {
    console.log("普通子弹");
  },
};

const missileDecorator = () => {
  console.log("导弹");
};

const atomDecorator = () => {
  console.log("原子弹");
};

const fire1 = plane.fire;
plane.fire = () => {
  fire1();
  missileDecorator();
};

const fire2 = plane.fire;
plane.fire = () => {
  fire2();
  atomDecorator();
};

plane.fire();
