import { Eil } from "../src";

describe("Register custom emoji", () => {
  let eil: Eil;
  beforeEach(() => {
    eil = new Eil();
  });

  it("should register a custom shortcode", () => {
    eil.registerMapping("hamburger", "🍔");

    expect(eil.convert("I am hungry, I want to eat a :hamburger:!")).toBe(
      "I am hungry, I want to eat a 🍔!"
    );
  });
});
