# KiwiEmitter
- Faster, Lightweight and Small advanced emitter.

# Update News

- added CJS support(fully).
- Optimized on ESM, CJS and TS
- Time is now specified directly in milliseconds in the "suspendListener" function.

## Installation
- We are recommend to use [`pnpm`](https://npmjs.com/pnpm).
```bash
pnpm i kiwiemitter
```

## Usage
- Similar to `node:events`.
```js
//esm and ts
import KiwiEmitter from "kiwiemitter";
/*
 * on commonjs
 * const KiwiEmitter = require("KiwiEmitter").default 
*/
const emitter = new KiwiEmitter();

emitter.on("event", (e) => console.log(e)); // welcome kiwi!

emitter.emit("event", "welcome kiwi!");
```

## Authors
- [@erqeweew](https://github.com/erqeweew) (Developer)
- [@davutozgursukuti4531](https://github.com/davutozgursukuti4531) (Developer, Contributor)
