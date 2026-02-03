import { Routes } from '@angular/router';

export const USERS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/users/users.component').then(c => c.UsersComponent)
  },
  {
    path: 'add',
    loadComponent: () => import('./pages/add-update-user/add-update-user.component').then(c => c.AddUpdateUserComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./pages/add-update-user/add-update-user.component').then(c => c.AddUpdateUserComponent)
  }
]