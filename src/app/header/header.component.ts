import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  logout(e) {
    e.preventDefault();
    this.authService.logout();
  }

}
