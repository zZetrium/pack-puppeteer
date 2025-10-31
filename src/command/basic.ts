

export class Command {
    components: CommandComponent[];
    constructor(components: CommandComponent[]) {
        this.components = components;
    }

    toString(): string {
        let result = "";
        let isMacroLine = false;
        this.components.forEach(component => {
            if (component instanceof Macro) {
                isMacroLine = true;
            }

            result += component.toString();
        });
        return (isMacroLine ? "$" + result : result).trim();
    }
}

export type CommandComponent = Argument;



export type Argument = {
    /**
     * Must have a single trailing space!
     */
    toString():string;
}

export class Macro {
    name:string;
    constructor(name:string) {
        this.name = name;
    }

    toString():string {
        return "${" + this.name +"}";
    }
}

export class Hello implements Argument {

}