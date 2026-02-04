import { Routes } from '@angular/router';

export const USERS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/users/users.component').then(c => c.UsersComponent)
  },
  {
    path: 'add',
    loadComponent: () => import('./pages/user-form/user-form.component').then(c => c.UserFormComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./pages/user-form/user-form.component').then(c => c.UserFormComponent)
  }
]