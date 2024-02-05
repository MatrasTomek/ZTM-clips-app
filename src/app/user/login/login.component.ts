import { Component } from '@angular/core';
import linkifyStr from 'linkify-string';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
    description: '',
  };

  updateDescription() {
    // Użyj linkifyStr na oryginalnym tekście
    this.credentials.description = linkifyStr(
      `${this.credentials.description}`
    );
  }
  login() {
    console.log(this.credentials);
    this.updateDescription();
    console.log(linkifyStr(`${this.credentials.description}`));
  }
}
