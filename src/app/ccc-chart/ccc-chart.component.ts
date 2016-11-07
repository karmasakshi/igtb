import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ccc-chart',
    templateUrl: './ccc-chart.component.html',
    styleUrls: ['./ccc-chart.component.css']
})
export class CccChartComponent implements OnInit {

    public radarChartLabels: string[] = ['Quick', 'Current', 'Some', 'Fuel', 'Arrears'];

    public radarChartData: any = [
        { data: [51, 35, 19, 81, 43], label: 'Series A' },
        { data: [48, 83, 14, 39, 11], label: 'Series B' }
    ];
    public radarChartType: string = 'radar';

    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    constructor() { }

    ngOnInit() { }

}