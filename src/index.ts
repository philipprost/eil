function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

export class Eil {
  private map: { [key: string]: string };

  constructor(initialMap?: { [key: string]: string }) {
    this.map = initialMap || {
      ":)": "🙂",
      ":(": "🙁",
      ":|": "😑",
      ":+1": "👍",
      ":-1": "👎",
      ":ok": "👌",
      ":the_horns": "🤘",
    };
  }

  public convert(text: string): string {
    const regex = new RegExp(
      Object.keys(this.map).map(escapeRegExp).join("|"),
      "g"
    );
    return text.replace(regex, (match) => this.map[match]);
  }

  public registerMapping(key: string, value: string): void {
    if (key in this.map) {
      console.warn(`Overwriting existing mapping for ${key}`);
    }
    this.map[key] = value;
  }
}
