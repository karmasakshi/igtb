import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

    activeSummaryView: string = '';

    constructor(private _router: Router) { }

    ngOnInit() {

        let urlArray = this._router.url.split('/');

        this.activeSummaryView = urlArray[urlArray.length - 1];

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

    summary = {
        accounts: {
            amount: {
                currencySymbol: '$',
                figure: '6,000,000',
                change: '00'
            },
            additionalText: 'Additional information goes here.'
        },
        incomes: {
            amount: {
                currencySymbol: '$',
                figure: '8,200,000',
                change: '00'
            },
            additionalText: 'Additional information goes here.'
        },
        spendings: {
            amount: {
                currencySymbol: '$',
                figure: '4,000,000',
                change: '00'
            },
            additionalText: 'Additional information goes here.'
        },
        cashflow: {
            amount: {
                currencySymbol: '$',
                figure: '4,200,000',
                change: '00'
            },
            additionalText: 'Additional information goes here.'
        }
    };

}