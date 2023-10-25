import { Eil } from "../src";

describe("Emoji Shortcode Convertion", () => {
  let eil: Eil;

  beforeEach(() => {
    eil = new Eil();
  });

  it("converts :slightly_smiling_face: to 🙂", () => {
    expect(eil.convert("Hello :slightly_smiling_face:")).toBe("Hello 🙂");
  });

  it("converts :slightly_frowning_face: to 🙁", () => {
    expect(eil.convert("Hello :slightly_frowning_face:")).toBe("Hello 🙁");
  });

  it("converts :neutral_face: to 😐", () => {
    expect(eil.convert("Hello :neutral_face:")).toBe("Hello 😐");
  });

  it("converts :+1: to 👍", () => {
    expect(eil.convert("Hello :+1:")).toBe("Hello 👍");
  });

  it("converts :ok: to 👍", () => {
    expect(eil.convert("Splendid! :ok:")).toBe("Splendid! 👌");
  });

  it("converts :the_horns: to 🤘", () => {
    expect(eil.convert("RocknRoll! :the_horns:")).toBe("RocknRoll! 🤘");
  });

  it("converts :grinning_face: to 😀", () => {
    expect(eil.convert("LOL! :grinning_face:")).toBe("LOL! 😀");
  });

  it("converts :grinning_face_with_big_eyes: to 😃", () => {
    expect(eil.convert("HAHA! :grinning_face_with_big_eyes:")).toBe("HAHA! 😃");
  });

  it("converts :grinning_face_with_smiling_eyes: to 😄", () => {
    expect(eil.convert("Unbelievable! :grinning_face_with_smiling_eyes:")).toBe(
      "Unbelievable! 😄"
    );
  });

  it("converts :beaming_face_with_smiling_eyes: to 😁", () => {
    expect(eil.convert("Funny! :beaming_face_with_smiling_eyes:")).toBe(
      "Funny! 😁"
    );
  });

  it("converts :grinning_squinting_face: to 😆", () => {
    expect(eil.convert("Funny! :grinning_squinting_face:")).toBe("Funny! 😆");
  });

  it("converts :grinning_face_with_sweat: to 😅", () => {
    expect(eil.convert("Funny! :grinning_face_with_sweat:")).toBe("Funny! 😅");
  });

  it("converts :rolling_on_the_floor_laughing: to 🤣", () => {
    expect(eil.convert("Funny! :rolling_on_the_floor_laughing:")).toBe(
      "Funny! 🤣"
    );
  });

  it("converts :face_with_tears_of_joy: to 😂", () => {
    expect(eil.convert("Funny! :face_with_tears_of_joy:")).toBe("Funny! 😂");
  });

  it("converts :melting_face: to 🫠", () => {
    expect(eil.convert("Funny! :melting_face:")).toBe("Funny! 🫠");
  });

  it("converts :winking_face: to 😉", () => {
    expect(eil.convert("Funny! :winking_face:")).toBe("Funny! 😉");
  });

  it("converts :smiling_face_with_smiling_eyes: to 😊", () => {
    expect(eil.convert("Funny! :smiling_face_with_smiling_eyes:")).toBe(
      "Funny! 😊"
    );
  });

  it("converts :smiling_face_with_halo: to 😇", () => {
    expect(eil.convert("I didn't do anything :smiling_face_with_halo:")).toBe(
      "I didn't do anything 😇"
    );
  });

  it("converts :smiling_face_with_hearts: to 🥰", () => {
    expect(eil.convert("I am in love! :smiling_face_with_hearts:")).toBe(
      "I am in love! 🥰"
    );
  });

  it("converts :smiling_face_with_heart_eyes: to 😍", () => {
    expect(eil.convert("Love it! :smiling_face_with_heart_eyes:")).toBe(
      "Love it! 😍"
    );
  });

  it("converts :star_struck: to 🤩", () => {
    expect(eil.convert("Ryan Gosling! :star_struck:")).toBe("Ryan Gosling! 🤩");
  });

  it("converts :face_blowing_a_kiss: to 😘", () => {
    expect(eil.convert("See you later! :face_blowing_a_kiss:")).toBe(
      "See you later! 😘"
    );
  });

  it("converts :kissing_face: to 😗", () => {
    expect(eil.convert("Kiss! :kissing_face:")).toBe("Kiss! 😗");
  });
});
