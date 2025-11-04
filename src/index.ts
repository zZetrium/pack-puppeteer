import { Macro } from "./command/basic.js";
import { TimeCommand } from "./command/minecraft.js";

console.log(new TimeCommand(new Macro("hello")).emit())