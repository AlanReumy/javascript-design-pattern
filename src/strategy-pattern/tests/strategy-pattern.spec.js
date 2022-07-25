import { caculate } from "../strategy-pattern";

describe("strategy-pattern", () => {
  test("salary test", () => {
    expect(caculate("S", 100)).toBe(400);
  });
});
