export type Argument<T> = {
    getValue():T|undefined;
    isMacro():boolean;
    ifValue(action():number):Argument<T>[];
}