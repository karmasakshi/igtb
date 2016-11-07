import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-b-c-chart',
    templateUrl: './b-c-chart.component.html',
    styleUrls: ['./b-c-chart.component.css']
})
export class BCChartComponent implements OnInit {

    public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string = 'doughnut';

    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    constructor() { }

    ngOnInit() { }

}