export declare class Eil {
    private map;
    constructor(initialMap?: {
        [key: string]: string;
    });
    convert(text: string): string;
    registerMapping(key: string, value: string): void;
}
