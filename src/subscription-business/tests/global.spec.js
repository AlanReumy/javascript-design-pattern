import { Event } from "../global";

describe("global", () => {
  test("excute count", () => {
    let meter88Count = 0;
    let meter99Count = 0;
    let meterNotCount = 0;

    const meter88Fn = (price) => {
      ++meter88Count;
      console.log("meter88 price: ", price);
    };

    const meter99Fn = (price) => {
      ++meter99Count;
      console.log("meter99 price: ", price);
    };

    Event.listen("meter88", meter88Fn);
    Event.listen("meter99", meter99Fn);

    Event.trigger("meter88", 4000);
    Event.trigger("meter99", 2000);

    Event.remove("meter99", meter99Fn);

    Event.trigger("meter88", 4000);
    Event.trigger("meter99", 2000);
    Event.trigger("meterNot", 5000);

    expect(meter88Count).toBe(2);
    expect(meter99Count).toBe(1);
    expect(meterNotCount).toBe(0);
  });
});
