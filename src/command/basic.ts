

export abstract class CommandNode<T> {
    value: T | Macro;


    constructor(value: T | Macro) {
        this.value = value;
    }

    get(): T | Macro {
        return this.value;
    }

    set(value: T | Macro) {
        this.value = value;
    }

    isMacro(): boolean{
        return this.value instanceof Macro;
    }
    abstract containsMacro(): boolean;

    isValue(): boolean {
        return !this.isMacro();
    }

    // fluent API
    onValue(action: (value: T) => void): CommandNode<T> {
        if (this.isValue()) {
            action(this.value as T);
        }
        return this;
    }
    emit(): string {
        if (isMacro(this.value)) {
            return this.value.emit();
        } else {
            return this.emitNonMacro();
        }

    }
    protected abstract emitNonMacro(): string;
}

export abstract class CommandBranch<T, C> extends CommandNode<T> {

    child: CommandNode<C>;
    constructor(value: T | Macro, child: CommandNode<C>) {
        super(value);
        this.child = child;
    }

    containsMacro(): boolean {
        return this.isMacro() || this.child.isMacro();
    }
}

export abstract class CommandLeaf<T> extends CommandNode<T> {
    containsMacro(): boolean {
        return this.isMacro();
    }
}

export class Macro {
    key: string;
    constructor(key: string) {
        this.key = key;
    }


    isMacro(): boolean {
        return true;
    }
    emit(): string {
        return "${" + this.key + "}";
    }
    toString(): string {
        return this.emit();
    }
}

export function isMacro(value:any):value is Macro {
    return value instanceof Macro;
}