import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Auth0Service } from './auth0.service';

@Injectable()
export class GuardService implements CanActivate {

    constructor(private _auth0Service: Auth0Service, private _router: Router) { }

    canActivate(): boolean {

        if (this._auth0Service.isAuthenticated()) {

            return true;

        } else {

            this._router.navigate(['login']);

            return false;

        }

    }

}