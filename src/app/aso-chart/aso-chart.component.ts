import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-aso-chart',
    templateUrl: './aso-chart.component.html',
    styleUrls: ['./aso-chart.component.css']
})
export class AsoChartComponent implements OnInit {

    public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    public pieChartData: number[] = [300, 500, 100];
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