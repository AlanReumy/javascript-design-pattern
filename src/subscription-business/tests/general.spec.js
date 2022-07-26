import { installEvent } from "../general";

describe("general", () => {
  test("count num", () => {
    const saleoffices = {};

    installEvent(saleoffices);

    let meter88Count = 0;
    let meter99Count = 0;

    const meter88Fn = (price) => {
      ++meter88Count;
      console.log("meter88 price: ", price);
    };

    const meter99Fn = (price) => {
      ++meter99Count;
      console.log("meter99 price: ", price);
    };

    saleoffices.listen("meter88", meter88Fn);
    saleoffices.listen("meter99", meter99Fn);

    saleoffices.trigger("meter88", 20000);
    saleoffices.trigger("meter99", 2000);

    saleoffices.remove("meter99", meter99Fn);

    saleoffices.trigger("meter88", 20000);
    saleoffices.trigger("meter99", 2000);

    expect(meter88Count).toBe(2);
    expect(meter99Count).toBe(1);
  });
});
