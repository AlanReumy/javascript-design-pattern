import { caculate } from "../strategy";

describe("strategy", () => {
  test("salary test", () => {
    expect(caculate("S", 100)).toBe(400);
  });
});
