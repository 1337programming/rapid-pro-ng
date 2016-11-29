import { Injectable } from '@angular/core';
import { Project } from '../../shared/model/project.model';

import { ButtonComponent } from '../../shared/model/components/button-component.model';

const localStorageKey = 'current-project';

@Injectable()
export class ProjectService {
    project: Project = this.loadProject();

    loadProject(): Project {
        const ls = localStorage.getItem(localStorageKey);
        if (ls) {
            try {
                const savedProject = JSON.parse(ls);
                return Project.parse(savedProject);
            }
            catch (e) { }
        }
        return new Project();
    }

    openDesignPage() {

    }

    reset() {
        this.project = new Project();
    }

    save() {
        localStorage.setItem(localStorageKey, JSON.stringify(this.project));
    }

    createButton() {
        this.project.currentRoute.components.push(new ButtonComponent())
    }
}
