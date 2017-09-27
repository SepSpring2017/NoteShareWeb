import { Component, OnInit } from '@angular/core';
import { GravatarModule } from 'ng2-gravatar-directive';
import { UserService, User } from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) {
    userService.getCurrentUser().subscribe(res => this.user = res);
  }

  ngOnInit() {
  }

}
