class Beverage {
  boilWater() {
    console.log("boil water");
  }
  brew() {
    throw new Error("must overwrite");
  }
  pourInCup() {
    throw new Error("must overwrite");
  }
  addCondiments() {
    throw new Error("must overwrite");
  }
  init() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }
}

class Coffee extends Beverage {
  brew() {
    console.log("brew coffee by boil water ");
  }
  pourInCup() {
    console.log("pour in cup coffee");
  }
  addCondiments() {
    console.log("add sugar and milk");
  }
}

class Tea extends Beverage {
  brew() {
    console.log("brew tea by boil water");
  }
  pourInCup() {
    console.log("pour in cup tea");
  }
  addCondiments() {
    console.log("add lemon");
  }
}

const coffee = new Coffee();
coffee.init();

const tea = new Tea();
tea.init();
