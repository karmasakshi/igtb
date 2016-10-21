import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-summary-accounts',
    templateUrl: './summary-accounts.component.html',
    styleUrls: ['./summary-accounts.component.css']
})
export class SummaryAccountsComponent implements OnInit {

    accounts = [
        {
            currency: 'USD',
            lastActivityTimestamp: '2016-10-20T08:28:57.480Z',
            runningBalance: 123123,
            availableBalance: 123123,
            name: 'General New York Account'
        },
        {
            currency: 'USD',
            lastActivityTimestamp: '2016-10-20T08:28:57.480Z',
            runningBalance: 123123,
            availableBalance: 123123,
            name: 'Secondary New York Account'
        },
        {
            currency: 'USD',
            name: 'General Salary Account',
            lastActivityTimestamp: '2016-10-20T08:28:57.480Z',
            runningBalance: 123123,
            availableBalance: 123123
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}