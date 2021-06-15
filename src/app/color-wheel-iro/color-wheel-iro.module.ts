import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ColorWheelIroComponent } from './color-wheel-iro.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: ColorWheelIroComponent }
        ])
    ],
    declarations: [ColorWheelIroComponent]
})
export class ColorWheelIroModule { }
