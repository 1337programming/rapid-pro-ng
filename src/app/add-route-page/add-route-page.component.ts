import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-route-page',
  templateUrl: './add-route-page.component.html',
  styleUrls: ['./add-route-page.component.css']
})
export class AddRoutePageComponent implements OnInit {
  public loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
  }

}
