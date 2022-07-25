import { proxyMult, count } from "../cache-proxy";

describe("cache-proxy", () => {
  test("equal value", () => {
    proxyMult(1, 2, 3);
    proxyMult(1, 2, 3);
    proxyMult(1, 3, 3);

    expect(count).toBe(2);
  });
});
