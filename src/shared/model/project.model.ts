import { RouteComponentModel } from './route-component.model';
import { ReusableComponentModel } from './reusable-component.model';

export class ProjectModel {
    projectName: string = 'Unnamed';
    routeComponents: RouteComponentModel[];
    reusableComponents: ReusableComponentModel[];

    constructor(public projectPath: string) {}
}
