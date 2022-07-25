import { proxySingleton } from "../proxy-singleton";

describe("proxy-singleton", () => {
  const a = new proxySingleton("curry");
  const b = new proxySingleton("curry");
  test("equal object", () => {
    expect(a).toBe(b);
  });
});
