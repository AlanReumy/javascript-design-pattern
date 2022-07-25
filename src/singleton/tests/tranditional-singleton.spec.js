import { Singleton } from "../tranditional-singleton";

describe("singleton", () => {
  test("equal object", () => {
    const a = Singleton.getInstance("curry");
    const b = Singleton.getInstance("curry");
    expect(a).toBe(b);
  });
});
