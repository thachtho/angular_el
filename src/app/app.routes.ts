import { Routes } from '@angular/router';
import { ROUTER } from '@libs/enum/router';
import { authGuard } from '@libs/services/guard/auth.guard';
import { loginGuard } from '@libs/services/guard/login.guard';

export const routes: Routes = [
    {
        path: ROUTER.LOGIN,
        canActivate: [loginGuard],
        loadComponent: () => import('@pages/auth/login').then((m) => m.LoginComponent),
    },
    {
        path: ROUTER.DEFAULT,
        canActivate: [authGuard],
        loadComponent: () =>
        import('@libs/components/full-layout').then(
          (m) => m.FullLayoutComponent
        ),
        children: [
            { path: ROUTER.DEFAULT, loadChildren: async () => (await import('@pages/home')).routes, },
            { path: ROUTER.USER, loadChildren: async () => (await import('@pages/user')).routes, },
            { path: ROUTER.CLASS, loadChildren: async () => (await import('@pages/class')).routes, },
            { path: ROUTER.PAGE_NOT_FOUND, loadChildren: async () => (await import('@pages/page-not-found')).routes, }
        ]
    },

];
