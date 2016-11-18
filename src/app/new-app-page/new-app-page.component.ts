import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectService } from '../project/project.service';

@Component({
  selector: 'app-new-app-page',
  templateUrl: './new-app-page.component.html',
  styleUrls: ['./new-app-page.component.css']
})
export class NewAppPageComponent implements OnInit {
  name: string;
  projectPath: string;


  constructor(
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    console.log('Project Model', this.projectService.projectModel);
    if (!this.projectService.projectModel) {
      return this.router.navigate(['']);
    }
    this.projectPath = this.projectService.projectModel.projectPath;
    console.log('done', this.projectPath);
  }

  createApp(): void {
    if (this.name) {
      this.projectService.projectModel.projectName = name;
    }
  }

}
