import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'names',
        loadComponent: () => import('./message/message.component').then(m => m.MessageComponent)
    },
    {
        path: 'cars',
        loadComponent: () => import('./car-pannel/car-pannel.component').then(m => m.CarPannelComponent)
    }
];
