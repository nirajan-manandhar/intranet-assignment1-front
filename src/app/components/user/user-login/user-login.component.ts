import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserComponent } from '../user.component';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  getUsernameErrorMessage() {
    return this.username.hasError('required') ? 'You must enter user name' : '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter password' : '';
  }

  doLogin() {
    this.userService.doLogin(this.username.value, this.password.value).then(result => {
      this.router.navigate(['/home']);
    }).catch(error => {
      this.username.setValue(null);
      this.password.setValue(null);
    });

  }

}
