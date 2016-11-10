export class CheckPathModel {
    static parse(object: any): CheckPathModel {
        return new CheckPathModel(object.exists, object.isDirectory);
    }

    constructor(public exists: boolean, public isDirectory: boolean) { }
}
