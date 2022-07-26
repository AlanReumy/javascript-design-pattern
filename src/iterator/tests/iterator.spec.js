import { each } from "../iterator";

describe("iterator", () => {
  test("iterator", () => {
    let sum = 0;
    each([1, 2, 3], (i, v) => {
      sum += v;
    });
    expect(sum).toBe(6);
  });
});
