import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service'
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
      private router: Router,
      private userService: UserService,
      private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    this.userService.create(this.model)
        .subscribe(
            data => {
                this.authenticationService.login(this.model.email, this.model.password).subscribe(res => {
                    this.router.navigate(['/']);
                });
            },
            error => {
                this.loading = false;
            });
}

}
