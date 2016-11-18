import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ProjectModel } from '../../shared/model/project.model';

@Injectable()
export class ProjectService {
    loaded: boolean = false;
    public projectModel: ProjectModel;
    constructor() { }

    createProject(projectPath: string) {
        this.projectModel = new ProjectModel(projectPath);
        console.log('Project Model Created', this.projectModel);
    }

    loadProject() {

    }

    openDesignPage() {

    }
}
