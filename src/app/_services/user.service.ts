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

    getCurrentUser() {
        let user = new User();
        return this.http.get(environment.apiUrl + 'api/users/current', this.jwt())
            .map((response: Response) =>
            {
                user.id = response.json().id;
                user.email = response.json().email;
                user.subjects = response.json().subjects;
                user.roles = response.json().roles;

                localStorage.setItem('currentUser', JSON.stringify(user));
                return user;
            });
            
    }

    isAuthenticated() {
        let token = localStorage.getItem('token')
        let expiry: Date = new Date(JSON.parse(localStorage.getItem('tokenExpiry')));
        
        return token && expiry > new Date(Date.now())
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + token });
            return new RequestOptions({ headers: headers });
        }
    }
}

export class User {
    id: string;
    email: string;
    password: string;
    subjects: Subject[];
    roles: Role[];
}

export class Subject {
    subjectId: number;
    name: string;
}

export class Role {
    id: string;
    name: string;
}