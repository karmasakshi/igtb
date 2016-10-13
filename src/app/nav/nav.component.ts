import { Component, OnInit } from '@angular/core';

import { Auth0Service } from '../auth0.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _auth0Service: Auth0Service) { }

  ngOnInit() {
  }

}
