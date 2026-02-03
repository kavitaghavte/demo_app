import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./layout/home/home.routes').then(m => m.HOME_ROUTES)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => LoginComponent)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
