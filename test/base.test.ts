import { Eil } from "../src";

describe("EmojiInteraction", () => {
  let eil: Eil;

  beforeEach(() => {
    eil = new Eil();
  });

  it("converts :) to 🙂", () => {
    expect(eil.convert("Hello :)")).toBe("Hello 🙂");
  });

  it("converts :( to 🙁", () => {
    expect(eil.convert("Hello :(")).toBe("Hello 🙁");
  });

  it("converts :| to 😑", () => {
    expect(eil.convert("Hello :|")).toBe("Hello 😑");
  });

  it("converts :+1 to 👍", () => {
    expect(eil.convert("Hello :+1")).toBe("Hello 👍");
  });

  it("converts :ok to 👍", () => {
    expect(eil.convert("Splendid! :ok")).toBe("Splendid! 👌");
  });

  it("converts :the_horns to 🤘", () => {
    expect(eil.convert("RocknRoll! :the_horns")).toBe("RocknRoll! 🤘");
  });
});
