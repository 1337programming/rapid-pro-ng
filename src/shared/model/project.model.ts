import { Route } from './route.model';

export class Project {
    routes: Route[];
    currentRoute: Route;

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.routes = [new Route('Home', '')];
        this.currentRoute = this.routes[0];
    }

    deleteCurrentRoute() {
        const newI = Math.max(this.routes.findIndex(r => r.equals(this.currentRoute)) - 1, 0);
        this.routes = this.routes.filter(r => !r.equals(this.currentRoute));
        if (this.routes.length === 0) {
            this.initializeRoutes();
        }
        else {
            this.currentRoute = this.routes[newI];
        }
    }

    static parse(pLookAlike: Project): Project {
        const project = new Project();
        if (pLookAlike.routes.length > 0) {
            project.routes = pLookAlike.routes.map(routeLookAlike => Route.parse(routeLookAlike));
            project.currentRoute = project.routes.find(p => p.id === pLookAlike.currentRoute.id) || project.routes[0];
        }
        return project;
    }

}
