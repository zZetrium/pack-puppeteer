export type TextComponent = string | TextComponent[] | {
    type?:"text"|"translatable"|"score"|"selector"|"keybind"|"nbt"
}