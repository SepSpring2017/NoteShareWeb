import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userService: UserService, private authService: AuthenticationService) { }

  ngOnInit() {
    $('.button-collapse').sideNav();
  }

  logout(e) {
    e.preventDefault();
    this.authService.logout();
  }

}
