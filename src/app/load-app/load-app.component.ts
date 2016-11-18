import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ProjectService } from '../project/project.service';
import { CheckPathService } from './check-path.service';
import { CheckPathModel } from '../../shared/model/check-path.model';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

const defaultMessage = 'Please specify an empty folder for a new project or an existing folder with a .rapid-pro.json.';

@Component({
  selector: 'app-load-app',
  templateUrl: './load-app.component.html',
  styleUrls: ['./load-app.component.css'],
  providers: [
    CheckPathService
  ]
})
export class LoadAppComponent implements OnInit {
  directory: string;
  pathForm: FormGroup;
  checkPathModel: CheckPathModel = CheckPathModel.dummy();
  loadedMessage: string = defaultMessage;

  constructor(
    private checkPathService: CheckPathService,
    private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pathForm = this.formBuilder.group({
      path: ''
    });
    this.directory = localStorage.getItem('path') || '';
    this.validatePath();
  }
  load() {
    if (!this.checkPathModel.valid) {
      return;
    }
    this.projectService.createProject(this.directory);
    if (this.checkPathModel.action === 'Load Project') {
      // TODO - Write load project logic.
    } else {
      this.router.navigate(['new-app']);
    }
  }
  validatePath() {
    // Immediately invalidate when value changes.
    this.pathForm.valueChanges.subscribe(form => {
      this.loadedMessage = 'Checking...';
      this.checkPathModel = CheckPathModel.dummy();
    });

    // Validate the path
    this.pathForm.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(form => {
        if (!form.path) {
          this.checkPathModel = CheckPathModel.dummy();
          this.loadedMessage = defaultMessage;
        }
        this.checkPathService.checkPath(form.path).subscribe((checkPathModel: CheckPathModel) => {
          this.checkPathModel = checkPathModel;
          if (!this.checkPathModel.exists) {
            // Case 1, 2
            this.loadedMessage = defaultMessage;
          } else if (this.checkPathModel.isRapidProDirectory) {
            // Case 3, 4
            this.loadedMessage = 'Found an existing Rapid Pro project';
          } else if (this.checkPathModel.isEmptyDirectory) {
            // Case 5
            this.loadedMessage = 'Found an empty directory';
          } else {
            // Case 6
            this.loadedMessage = defaultMessage;
          }
          localStorage.setItem('path', form.path);
        }, err => {
          console.log(err);
        });
      });
  }
}
