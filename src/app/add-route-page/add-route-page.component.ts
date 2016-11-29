import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router} from '@angular/router';

import { ProjectService } from '../project/project.service';
import { Route } from '../../shared/model/route.model';

@Component({
  selector: 'app-add-route-page',
  templateUrl: './add-route-page.component.html',
  styleUrls: ['./add-route-page.component.css']
})
export class AddRoutePageComponent implements OnInit {
  public addRouteForm = this.fb.group({
    name: ['', Validators.required],
    path: ['', Validators.required]
  });
  constructor(
    public fb: FormBuilder,
    public projectService: ProjectService,
    public router: Router) { }

  ngOnInit() {
  }
  addRoute(value: RouteFormValue, valid: boolean) {
    if (valid) {
      const route = new Route(value.name, value.path);
      const project = this.projectService.project;
      project.routes.push(route);
      project.currentRoute = route; 
      this.router.navigate(['']);
    }
  }
}

type RouteFormValue = {
  name: string,
  path: string
};
