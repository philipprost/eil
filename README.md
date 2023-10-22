# EIL - Emoji Interaction Library

Convert text emojis into their actual emoji representations with ease!

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

console.log(ei.convert("Hello :)")); // Outputs: Hello 🙂

// Register custom mapping
ei.registerMapping(":/", "😕");
```

## Customization

```javascript
ei.registerMapping(":D", "😄");
```

## 💡 Contributing

Contributions are welcomed!

## License

MIT
