import { Component } from '@angular/core';
import { ProjectService } from './project/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProjectService]
})
export class AppComponent {
}
