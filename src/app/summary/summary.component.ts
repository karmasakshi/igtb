/* --- IMPORTS --- */

// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { SummaryService } from '@igtb/summary-service/summary.service';

import { Angular2Apollo } from 'angular2-apollo';
import gql from 'graphql-tag';

const CurrentUserForProfile = gql`
  query myAccount {
  currentAccount(account: {iban: "IE71NOSC364932100954743"}) {
    name
    iban
    availableBalance
    mailingAddress {
      city
      postalCode
      address
      countryCode
    }
  }
}
`;

/* --- CLASS --- */
@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css'],
    providers: [SummaryService]
})
export class SummaryComponent implements OnInit {

    // Declarations
    private activeSummaryView: string;
    private summary: any;
    private isSummaryError: boolean;

    constructor(private _router: Router, private _summaryService: SummaryService, private apollo: Angular2Apollo) { }
    private data;
    ngOnInit() {

        this.apollo.watchQuery({
            query: CurrentUserForProfile
        }).subscribe(({data}) => {
            this.data = data;
            console.log(this.data);
        });

        this.activeSummaryView = null;
        this.summary = null;
        this.isSummaryError = false;

        let urlArray = this._router.url.split('/');

        this.activeSummaryView = urlArray[urlArray.length - 1];

        this.getSummary();

    }

    getSummary() {

        this.isSummaryError = false;

        this._summaryService.getSummary().subscribe(

            summary => this.summary = summary,

            error => this.isSummaryError = true,

            () => { }

        );

    }

    loadOrResetSummaryView(path: string): void {

        if (this.activeSummaryView === path) {

            this.activeSummaryView = '';

            this._router.navigate(['dashboard']);

        } else {

            this.activeSummaryView = path;

            this._router.navigate(['dashboard', path]);

        }

    };

}