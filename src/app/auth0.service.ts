import { Injectable } from '@angular/core';

import { tokenNotExpired } from 'angular2-jwt';

declare var Auth0Lock: any;

@Injectable()
export class Auth0Service {

    lock = new Auth0Lock('L69pxwQKiyJWxNAbASDjyzz0UJuwS5gP', 'rdc.eu.auth0.com', {

        allowedConnections: ['Username-Password-Authentication']

    });

    constructor() {

        this.lock.on('authenticated', (authResult) => {

            localStorage.setItem('token', authResult.idToken);

        });

    }

    public login() {

        this.lock.show();

    };

    public authenticated() {

        return tokenNotExpired();

    };

    public logout() {

        localStorage.removeItem('token');

    };

}