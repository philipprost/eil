# EIL - Emoji Interaction Library

Convert emoji shortcodes into their actual emoji representations with ease!

## Installation

**npm**:

```bash
npm install eil-js
```

**cdn**:

`<script src="https://unpkg.com/eil-js@0.0.1/dist/emojiInteraction.js"></script>`

## Usage

```javascript
import { EmojiInteraction } from "eil-js";

const ei = new EmojiInteraction();

console.log(ei.convert("RocknRoll :the_horns:")); // Outputs: RocknRoll 🤘

// Register custom mapping
ei.registerMapping("bad_mood", "😕");
```

## Customization

```javascript
ei.registerMapping("happy_smile", "😄");
```

## 💡 Contributing

Contributions are welcomed!

## License

MIT
