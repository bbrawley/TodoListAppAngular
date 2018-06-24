import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor() { }

    model = new UserComponent( 'Tester1',  '12345');

    submitted = false;

    onSubmit() { this.submitted = true; }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}
