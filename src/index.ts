import type { Meta } from "./meta.js";
import { getVersion } from "./meta.js";
console.log("hello");

let packinfo = {version:5};

console.log(getVersion(packinfo));