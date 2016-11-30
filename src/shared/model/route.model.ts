import { Component } from './component.model';

export class Route {
    id: string = `${Date.now()}-${Math.random()}`;
    public components: Component[] = [];
    constructor(
        public name: string,
        public path: string
    ) { }

    equals(route: Route): boolean {
        return this.id === route.id;
    }

    get pathPretty() {
        const firstChar = this.path[0];
        let pretty = this.path;
        if (!firstChar || firstChar !== '/') {
            pretty = '/' + this.path;
        }
        return pretty;
    }
}
