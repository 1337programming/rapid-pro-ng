import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project/project.service';
import { Project } from '../../shared/model/project.model';

@Component({
  selector: 'app-design-page',
  templateUrl: './design-page.component.html',
  styleUrls: ['./design-page.component.css', './dashboard.css'],
  providers: []
})
export class DesignPageComponent implements OnInit {
  project: Project;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  create(componentType: string) {

  }
}
