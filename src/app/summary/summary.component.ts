/* --- IMPORTS --- */

// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { SummaryService } from '@igtb/summary-service/summary.service';

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

    constructor(private _router: Router, private _summaryService: SummaryService) { }

    ngOnInit() {

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