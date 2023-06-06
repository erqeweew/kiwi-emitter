# KiwiEmitter
- Faster, Lightweight and Small advanced emitter.

# Installation
- We are recommend to use [`pnpm`](https://npmjs.com/pnpm).
```bash
pnpm i kiwiemitter
```

# Usage
- We are supporting ESM only now.
- Similar to `node:events`.
```js
import KiwiEmitter from "kiwiemitter";
const emitter = new KiwiEmitter();

emitter.on("event", (e) => console.log(e)); // welcome kiwi!

emitter.emit("event", "welcome kiwi!");
```
