import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { ProjectService } from './project/project.service';
import { DesignPageComponent } from './design-page/design-page.component';
import { AddRoutePageComponent } from './add-route-page/add-route-page.component';

const routeComponents = routes.map(r => r.component);

@NgModule({
  declarations: [
    AppComponent,
    ...routeComponents,
    DesignPageComponent,
    AddRoutePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
