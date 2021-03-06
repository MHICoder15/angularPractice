import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IndexComponent } from './index.component'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: IndexComponent }
        ])
    ],
    declarations: [IndexComponent]
})
export class IndexModule { }
