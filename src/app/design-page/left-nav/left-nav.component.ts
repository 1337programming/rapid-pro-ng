import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../project/project.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  componentLinks: ComponentLink[];
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.componentLinks = [
      new ComponentLink('Button', 'button'),
      new ComponentLink('Form', 'form'),
      new ComponentLink('Link', 'link'),
      new ComponentLink('Feed', 'feed'),
      new ComponentLink('Image', 'image')
    ];
  }

}

class ComponentLink {
  constructor(
    public title: string,
    public type: string
  ) { }
};
