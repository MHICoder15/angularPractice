import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ApexChartsComponent } from './apex-charts.component'
import { NgApexchartsModule } from 'ng-apexcharts'

@NgModule({
    imports: [
        CommonModule,
        NgApexchartsModule,
        RouterModule.forChild([
            { path: '', component: ApexChartsComponent }
        ])
    ],
    declarations: [ApexChartsComponent]
})
export class ApexChartsModule { }
