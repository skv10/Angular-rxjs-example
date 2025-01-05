import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./component/dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: 'of',
        loadComponent: () => import('./component/of/of.component').then(m => m.OfComponent)
    },
    {
        path: 'from',
        loadComponent: () => import('./component/from/from.component').then(m => m.FromComponent)
    },
    {
        path: 'concat',
        loadComponent: () => import('./component/concat/concat.component').then(m => m.ConcatComponent)
    },
    {
        path: 'merge',
        loadComponent: () => import('./component/merge/merge.component').then(m => m.MergeComponent)
    }
];
