import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {
  public type: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.type = params['type'];
      
    });
  }

}
