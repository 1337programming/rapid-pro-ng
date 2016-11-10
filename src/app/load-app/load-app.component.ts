import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CheckPathService } from './check-path.service';
import { CheckPathModel } from '../../shared/model/check-path.model';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-load-app',
  templateUrl: './load-app.component.html',
  styleUrls: ['./load-app.component.css'],
  providers: [CheckPathService]
})
export class LoadAppComponent implements OnInit {
  directory: string;
  pathForm: FormGroup;
  validPath: boolean = false;

  constructor(
    private checkPathService: CheckPathService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.pathForm = this.formBuilder.group({
      path: ''
    });
    this.pathForm.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(form => {
        if (!form.path) {
          this.validPath = false;
        }
        this.checkPathService.checkPath(form.path).subscribe((checkPathModel: CheckPathModel) => {
          this.validPath = checkPathModel.exists;
        }, err => {
          console.log(err);
        });
      });
  }
  load() {
    console.log('LOAD', this.directory);
  }
}
