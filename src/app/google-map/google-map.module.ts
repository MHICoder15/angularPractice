import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GoogleMapComponent } from './google-map.component'
import { AgmCoreModule } from '@agm/core'
import { FormsModule } from '@angular/forms'
import { apis } from 'src/environments/environment'
import { AgmDirectionModule } from 'agm-direction'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        // BrowserModule,
        AgmDirectionModule,
        AgmCoreModule.forRoot({
            apiKey: apis.googleApiKey,
            libraries: ['places', 'drawing', 'geometry']
        }),
        RouterModule.forChild([
            { path: '', component: GoogleMapComponent }
        ])
    ],
    declarations: [GoogleMapComponent]
})
export class GoogleMapModule { }
