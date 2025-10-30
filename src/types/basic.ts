export type JsonComponent {
    toJson(): string;
}

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

export type CommandComponent = Argument | Macro;



export type Argument = {
}

export class Macro {

}

export class Hello implements Argument {

}