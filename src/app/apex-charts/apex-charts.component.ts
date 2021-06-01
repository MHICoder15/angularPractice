import { Component, OnInit, ViewChild } from '@angular/core'
import { ApexChart, ApexFill, ApexNonAxisChartSeries, ApexPlotOptions, ApexStroke, ChartComponent } from 'ng-apexcharts'

export type ChartOptions = {
    series: ApexNonAxisChartSeries
    chart: ApexChart
    labels: string[]
    plotOptions: ApexPlotOptions
    fill: ApexFill
    stroke: ApexStroke
}

@Component({
    selector: 'app-apex-charts',
    templateUrl: './apex-charts.component.html',
    styleUrls: ['./apex-charts.component.css']
})
export class ApexChartsComponent implements OnInit {
    @ViewChild('chart') chart: ChartComponent
    public chartOptions: Partial<ChartOptions>

    constructor() {
        this.chartOptions = {
            series: [70],
            chart: {
                height: 350,
                type: 'radialBar'
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '50%'
                    },

                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: 30,
                            show: true,
                            color: '#888',
                            fontSize: '17px'
                        },
                        value: {
                            formatter: (val) => {
                                return parseInt(val.toString(), 10).toString()
                            },
                            color: '#111',
                            fontSize: '36px',
                            offsetY: -15,
                            show: true
                        }
                    }
                }
            },
            labels: ['Cricket']
        }
    }

    ngOnInit() { }
}
