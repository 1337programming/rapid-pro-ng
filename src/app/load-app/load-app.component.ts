import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-app',
  templateUrl: './load-app.component.html',
  styleUrls: ['./load-app.component.css']
})
export class LoadAppComponent implements OnInit {
  directory: string;
  constructor() { }

  ngOnInit() {
  }
  load() {
    console.log('LOAD', this.directory);
  }
}
