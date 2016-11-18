import { LoadAppComponent } from './load-app/load-app.component';
import { NewAppPageComponent } from './new-app-page/new-app-page.component';
import { DesignPageComponent } from './design-page/design-page.component';


export const routes = [
    { path: '', component: LoadAppComponent },
    { path: 'new-app', component: NewAppPageComponent },
    { path: 'design', component: DesignPageComponent }
];
