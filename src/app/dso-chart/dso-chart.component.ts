import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dso-chart',
    templateUrl: './dso-chart.component.html',
    styleUrls: ['./dso-chart.component.css']
})
export class DsoChartComponent implements OnInit {

    public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    public pieChartData: number[] = [500, 150, 900];
    public pieChartType: string = 'pie';

    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    constructor() { }

    ngOnInit() { }

}