import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  country = new FormControl('', [Validators.required]);
  mobileNumber = new FormControl('', [Validators.required]);
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

  getFirstNameErrorMessage() {
    return this.username.hasError('required') ? 'You must enter first name' : '';
  }

  getLastNameErrorMessage() {
    return this.password.hasError('required') ? 'You must enter last name' : '';
  }

  getCountryErrorMessage() {
    return this.username.hasError('required') ? 'You must enter country' : '';
  }

  getEmailErrorMessage() {
    return this.password.hasError('required') ? 'You must enter email' : '';
  }

  getMobileNumberErrorMessage() {
    return this.username.hasError('required') ? 'You must enter mobile number' : '';
  }

  doRegister() {
    let payload = {
      "Username": this.username.value,
      "Password": this.password.value,
      "Email": this.email.value,
      "FirstName": this.firstName.value,
      "LastName": this.lastName.value,
      "Country": this.country.value,
      "MobileNumber": this.mobileNumber.value
    };
    this.userService.doRegister(payload).then(result => {
      this.router.navigate(['/home']);
    }).catch(error => {
      this.username.setValue(null);
      this.password.setValue(null);
      this.email.setValue(null);
      this.firstName.setValue(null);
      this.lastName.setValue(null);
      this.country.setValue(null);
      this.mobileNumber.setValue(null);
    });
  }

}
