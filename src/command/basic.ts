

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

    isMacro(): boolean {
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
    abstract emit(): string;
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