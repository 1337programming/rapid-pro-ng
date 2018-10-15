import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../project/project.service';

@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.css']
})
export class RightNavComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

}
