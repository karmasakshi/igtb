import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { tokenNotExpired } from 'angular2-jwt';

declare var Auth0Lock: any;

@Injectable()
export class Auth0Service {

    private options = {
        allowedConnections: ['Username-Password-Authentication'],
        auth: { redirect: false },
        autoclose: true,
        avatar: null,
        rememberLastLogin: false
    };

    lock = new Auth0Lock('L69pxwQKiyJWxNAbASDjyzz0UJuwS5gP', 'rdc.eu.auth0.com', this.options);

    constructor(private _router: Router) {

        this.lock.on('authenticated', (authResult) => {

            localStorage.setItem('id_token', authResult.idToken);

            this._router.navigate(['dashboard']);

        });

    }

    public login() {

        this.lock.show();

    };

    public isAuthenticated(): boolean {

        return tokenNotExpired();

    };

    public logout() {

        localStorage.removeItem('id_token');

        this._router.navigate(['login']);

    };

}