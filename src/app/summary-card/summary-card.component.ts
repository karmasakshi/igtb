import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-summary-card',
    templateUrl: './summary-card.component.html',
    styleUrls: ['./summary-card.component.css']
})
export class SummaryCardComponent implements OnInit {

    @Input() additionalText: string;
    @Input() amount;
    @Input() clickable: string;
    @Input() colorCode: string;
    @Input() icon: string;
    @Input() isActive: boolean = false;
    @Input() title: string;

    constructor() { }

    ngOnInit() { }

}