import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { Auth0Service } from './auth0.service';

@Injectable()
export class GuardService implements CanActivate {

    constructor(private _auth0Service: Auth0Service, private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (this._auth0Service.authenticated()) {

            return true;

        } else {

            this._router.navigate(['login']);

            return false;

        }

    }

}