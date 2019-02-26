import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: string = "Edmund";

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return this.userService.token ? true : false;
  }

  logOut() {
    this.userService.doLogOut();
  }

}
