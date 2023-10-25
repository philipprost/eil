export class Eil {
  private map: { [key: string]: string };

  constructor(initialMap?: { [key: string]: string }) {
    this.map = initialMap || {
      ":slightly_smiling_face:": "🙂",
      ":slightly_frowning_face:": "🙁",
      ":neutral_face:": "😐",
      ":+1:": "👍",
      ":-1:": "👎",
      ":ok:": "👌",
      ":the_horns:": "🤘",
      ":grinning_face:": "😀",
      ":grinning_face_with_big_eyes:": "😃",
      ":grinning_face_with_smiling_eyes:": "😄",
      ":beaming_face_with_smiling_eyes:": "😁",
      ":grinning_squinting_face:": "😆",
      ":grinning_face_with_sweat:": "😅",
      ":rolling_on_the_floor_laughing:": "🤣",
      ":face_with_tears_of_joy:": "😂",
      ":melting_face:": "🫠",
      ":winking_face:": "😉",
      ":smiling_face_with_smiling_eyes:": "😊",
      ":smiling_face_with_halo:": "😇",
      ":smiling_face_with_hearts:": "🥰",
      ":smiling_face_with_heart_eyes:": "😍",
      ":star_struck:": "🤩",
      ":face_blowing_a_kiss:": "😘",
      ":kissing_face:": "😗",
    };
  }

  public convert(text: string): string {
    const regex = /:([a-zA-Z0-9_+-]+):/g;
    return text.replace(regex, (match, p1) => this.map[match] || p1);
  }

  public registerMapping(key: string, value: string): void {
    const wrappedKey = `:${key}:`;
    if (wrappedKey in this.map) {
      console.warn(`Overwriting existing mapping for ${wrappedKey}`);
    }
    this.map[wrappedKey] = value;
    console.log(this.map);
  }
}
