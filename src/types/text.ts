export type TextComponent = {
    type?: "text" | "translatable" | "score" | "selector" | "keybind" | "nbt"
}

export class PlainText implements TextComponent {
    type: "text";
    constructor() {
        this.type = "text";
    }
}

export class TranslatedText implements TextComponent {
    
}
