import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Auth0Service } from '../auth0.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private _auth0Service: Auth0Service, private _router: Router) { }

    ngOnInit() {

        if (this._auth0Service.isAuthenticated()) {

            this._router.navigate(['dashboard']);

        }

    }

}