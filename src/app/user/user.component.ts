import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

    constructor(
        public username: string,
        public password: string
    ) {
        let myLogin = new UserComponent('aaa',
            'a');
        console.log('My username is ' + myLogin.username);
      }
    
}
