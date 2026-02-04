import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../../feachers/dashboard/dashboard.routes').then(r => r.DASHBOARD_ROUTES)
      },
      {
        path: 'users',
        loadChildren: () => import('../../feachers/users/users.routes').then(r => r.USERS_ROUTES)
      },
      {
        path: 'products',
        loadChildren: () => import('../../feachers/products/products.routes').then(r => r.PRODUCT_ROUTES)
      },
      {
        path: 'orders',
        loadChildren: () => import('../../feachers/orders/orders.routes').then(r => r.ORDER_ROUTES)
      }
    ]
  }
];