"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe("EmojiInteraction", () => {
    let eil;
    beforeEach(() => {
        eil = new src_1.Eil();
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
