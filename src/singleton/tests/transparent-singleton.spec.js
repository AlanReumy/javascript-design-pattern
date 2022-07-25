import { Singleton } from "../transparent-singleton";

describe("transparent-singleton", () => {
  test("equal object", () => {
    const a = new Singleton("curry");
    const b = new Singleton("curry");

    expect(a).toBe(b);
  });
});
