import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './../application-services/authentication-service';

@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor(private user: AuthenticationService) {}

    canActivate() {
        return this.user.isLoggedIn();
    }
}