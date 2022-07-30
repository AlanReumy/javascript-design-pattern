class OffLightState {
  constructor(light) {
    this.light = light;
  }
  buttonPressed() {
    console.log("弱光");
    this.light.setState(this.light.weakLightState);
  }
}

class WeakLightState {
  constructor(light) {
    this.light = light;
  }
  buttonPressed() {
    console.log("强光");
    this.light.setState(this.light.strongLightState);
  }
}

class StrongLightState {
  constructor(light) {
    this.light = light;
  }
  buttonPressed() {
    console.log("关灯");
    this.light.setState(this.light.offLightState);
  }
}

class Light {
  constructor() {
    this.offLightState = new OffLightState(this);
    this.weakLightState = new WeakLightState(this);
    this.strongLightState = new StrongLightState(this);
  }
  init() {
    this.currentState = this.offLightState;
  }
  setState(newState) {
    this.currentState = newState;
  }
}

const light = new Light();
light.init();
light.currentState.buttonPressed();
light.currentState.buttonPressed();
light.currentState.buttonPressed();
console.log(light.currentState);
