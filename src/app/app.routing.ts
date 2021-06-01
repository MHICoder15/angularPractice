import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'apex-charts',
        loadChildren: () => import('./apex-charts/apex-charts.module').then(mod => mod.ApexChartsModule)
    }
];

// export const AppRoutes = RouterModule.forChild(routes)

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutes { }
