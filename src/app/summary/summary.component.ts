import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

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