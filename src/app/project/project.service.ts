import { Injectable } from '@angular/core';
import { Project } from '../../shared/model/project.model';

import { Component } from '../../shared/model/component.model';
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
            } catch (e) { }
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

    create(type: string): void {
        let c: Component;
        if (type === 'button') {
            c = new ButtonComponent();
        }
        switch (type) {
            case 'button':
                c = new ButtonComponent();
                break;
        }
        if (c) {
            this.project.currentRoute.components.push(c);
        }
    }

    download() {
        // TODO
    }
}
