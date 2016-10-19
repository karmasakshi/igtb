import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SummaryService } from '../summary.service';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css'],
    providers: [SummaryService]
})
export class SummaryComponent implements OnInit {

    activeSummaryView = '';

    summary;

    constructor(private _router: Router, private _summaryService: SummaryService) { }

    ngOnInit() {

        let urlArray = this._router.url.split('/');

        this.activeSummaryView = urlArray[urlArray.length - 1];

        this._summaryService.getSummary().subscribe(
            summary => this.summary = summary,
            // error => console.log(error),
            // () => // Disable loading animation
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