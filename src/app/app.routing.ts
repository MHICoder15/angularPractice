import { ChildComponent } from './input-output-decorators/child/child.component'
import { ParentComponent } from './input-output-decorators/parent/parent.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./index/index.module').then(mod => mod.IndexModule)
    },
    {
        path: 'apex-charts',
        loadChildren: () => import('./apex-charts/apex-charts.module').then(mod => mod.ApexChartsModule)
    },
    {
        path: 'color-wheel',
        loadChildren: () => import('./color-wheel-iro/color-wheel-iro.module').then(mod => mod.ColorWheelIroModule)
    },
    {
        path: 'parent',
        component: ParentComponent
    },
    {
        path: 'child',
        component: ChildComponent
    },
    {
        path: 'google-map',
        loadChildren: () => import('./google-map/google-map.module').then(mod => mod.GoogleMapModule)
    }
]

export const AppRoutes = RouterModule.forRoot(routes)

// @NgModule({
//     imports: [
//         RouterModule.forRoot(routes),
//     ],
//     exports: [RouterModule]
// })
// export class AppRoutes { }
