import { DesignPageComponent } from './design-page/design-page.component';
import { AddRoutePageComponent } from './add-route-page/add-route-page.component';
import { CreateComponentComponent } from './create-component/create-component.component';

export const routes = [
    { path: '', component: DesignPageComponent },
    { path: 'add-route', component: AddRoutePageComponent },
    { path: 'create-component/:type', component: CreateComponentComponent }

];
