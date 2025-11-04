import { CommandBranch, CommandLeaf, isMacro, Macro } from "./basic.js";

export class TimeCommand extends CommandLeaf<"time"> {
    constructor(macro?: Macro) {
        if (isMacro(macro)) {
            super(macro);
        } else {
            super("time");
        }
    }

    protected emitNonMacro(): string {
        return this.value as string + " ";
    }

   //tatic AddAction = class extends CommandBranch<"add",
}

