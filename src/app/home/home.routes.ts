import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    loadComponent: () => import('./home.component').then(m => m.HomeComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'user',
        loadComponent: () => import('./users/users.component').then(m => m.UsersComponent)
      },
      {
        path: 'add-user',
        loadComponent: () => import('./add-update-user/add-update-user.component').then(m => m.AddUpdateUserComponent)
      },
      {
        path: 'product',
        loadComponent: () => import('./product/product.component').then(m => m.ProductComponent)
      },
      {
        path: 'orders',
        loadComponent: () => import('./orders/orders.component').then(m => m.OrdersComponent)
      }
    ]
  }
];