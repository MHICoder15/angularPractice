import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormValidationComponent } from './form-validation.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: FormValidationComponent }
        ]),
        ReactiveFormsModule
    ],
    declarations: [FormValidationComponent]
})
export class FormValidationModule { }
