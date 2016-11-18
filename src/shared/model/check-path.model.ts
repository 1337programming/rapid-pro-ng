export class CheckPathModel {
    action: CheckPathAction;
    valid: boolean;
    static parse(object: any): CheckPathModel {
        return new CheckPathModel(object.exists, object.isEmptyDirectory, object.isRapidProDirectory);
    }

    static dummy(): CheckPathModel {
        return new CheckPathModel(false, false, false);
    }

    constructor(public exists: boolean, public isEmptyDirectory: boolean, public isRapidProDirectory: boolean) {
        if (isRapidProDirectory) {
            this.valid = true;
            this.action = 'Load Project';
        } else {
            this.action = 'New Project';
            if (isEmptyDirectory) {
                this.valid = true;
            } else {
                this.valid = false;
            }
        }
    }
}

type CheckPathAction = 'Load Project' | 'New Project';
