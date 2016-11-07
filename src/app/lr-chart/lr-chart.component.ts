import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lr-chart',
    templateUrl: './lr-chart.component.html',
    styleUrls: ['./lr-chart.component.css']
})
export class LrChartComponent implements OnInit {

    public radarChartLabels: string[] = ['Quick', 'Current', 'Some', 'Designing'];

    public radarChartData: any = [
        { data: [65, 59, 90, 81], label: 'Series A' },
        { data: [28, 48, 40, 19], label: 'Series B' }
    ];
    public radarChartType: string = 'radar';

    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    constructor() { }

    ngOnInit() {
    }

}
