import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PracticeComponent } from './practice.component'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '', component: PracticeComponent
        }])
    ],
    declarations: [PracticeComponent]
})
export class PracticeModule { }
