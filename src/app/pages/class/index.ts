import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Class',
        loadComponent: async () => (await import('./class.component')).ClassComponent,
    },
];