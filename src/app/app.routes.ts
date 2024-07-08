import { Routes } from '@angular/router';
import { ROUTER } from '@libs/enum/router';

export const routes: Routes = [
    { path: '', loadChildren: async () => (await import('@pages/home')).routes, },
    { path: ROUTER.USER, loadChildren: async () => (await import('@pages/user')).routes, },
    { path: ROUTER.CLASS, loadChildren: async () => (await import('@pages/class')).routes, },
    { path: ROUTER.LOGIN, loadChildren: async () => (await import('@pages/auth/login')).routes, },
    { path: ROUTER.PAGE_NOT_FOUND, loadChildren: async () => (await import('@pages/page-not-found')).routes, }
];
