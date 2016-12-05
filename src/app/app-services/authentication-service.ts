import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthenticationService {
    private loggedIn = false;
    private userEmail = "test@test.com";
    private userPassword = "qwe123";

    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    login(email, password) {
        if (email === this.userEmail && password === this.userPassword) {
            localStorage.setItem('auth_token', "auth_token");
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
        }

        return this.loggedIn;
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');

        // return this.http.post('/login', JSON.stringify({ email, password }), { headers })
        //     .map(res => res.json())
        //     .map((res) => {
        //     if (res.success) {
        //         localStorage.setItem('auth_token', res.auth_token);
        //         this.loggedIn = true;
        //     }

        //     return res.success;
        // });
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}