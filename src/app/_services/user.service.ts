import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class UserService {
    constructor(private http: Http, private authenticationService: AuthenticationService) { }

    create(user: User) {
        return this.http.post(environment.apiUrl + 'api/users', user, this.jwt())
            .map((res: Response) => this.authenticationService.login(user.email, user.password));
    }

    update(user: User) {
        return this.http.put(environment.apiUrl + 'api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.access_token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.access_token });
            return new RequestOptions({ headers: headers });
        }
    }
}

export class User {
    id: string;
    email: string;
    password: string;
}