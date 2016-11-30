import { Route } from './route.model';

export class Project {
    routes: Route[];
    currentRoute: Route;

    constructor() {
        this.routes = [new Route('Home', ''), new Route('Login', '/login')];
        this.currentRoute = this.routes[0];

    }
}
