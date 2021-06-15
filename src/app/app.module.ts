import { ParentComponent } from './input-output-decorators/parent/parent.component'
import { ChildComponent } from './input-output-decorators/child/child.component'
import { AppRoutes } from './app.routing'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { UIHelpers } from './helpers/ui-helpers'

@NgModule({
    declarations: [
        AppComponent,
        ChildComponent,
        ParentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutes
    ],
    providers: [UIHelpers],
    bootstrap: [AppComponent]
})
export class AppModule { }
