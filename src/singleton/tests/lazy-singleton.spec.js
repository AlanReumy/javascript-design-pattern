import { getSingle } from "../lazy-singleton";

describe("lazy-singleton", () => {
  test("equal object", () => {
    function createHero() {
      let hero = {
        name: "curry",
        age: 34,
      };
      return hero;
    }
    expect(getSingle(createHero)()).toBe(getSingle(createHero)());
  });
});
