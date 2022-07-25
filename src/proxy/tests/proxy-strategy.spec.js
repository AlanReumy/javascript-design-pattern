import {
  createProxyFactory,
  mult,
  plus,
  multCount,
  plusCount,
} from "../proxy-factory";

describe("proxy-strategy", () => {
  test("count num", () => {
    const proxyPlus = createProxyFactory(plus);
    const proxyMult = createProxyFactory(mult);

    proxyMult(1, 2, 3);
    proxyMult(1, 2, 3);
    proxyMult(1, 2, 4);

    proxyPlus(1, 2, 3);
    proxyPlus(1, 2, 4);
    proxyPlus(1, 2, 4);

    expect(multCount).toBe(2);
    expect(plusCount).toBe(2);
  });
});
