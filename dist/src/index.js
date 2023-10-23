"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eil = void 0;
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
class Eil {
    constructor(initialMap) {
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
    convert(text) {
        const regex = new RegExp(Object.keys(this.map).map(escapeRegExp).join("|"), "g");
        return text.replace(regex, (match) => this.map[match]);
    }
    registerMapping(key, value) {
        if (key in this.map) {
            console.warn(`Overwriting existing mapping for ${key}`);
        }
        this.map[key] = value;
    }
}
exports.Eil = Eil;
