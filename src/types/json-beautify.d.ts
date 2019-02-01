declare module "json-beautify" {
    function beautify(value: any, replacer: any|undefined, space: number, limit:number): string;
    export = beautify;
}

