import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.routes').then(m => m.routes)
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
