import { Routes } from '@angular/router';

export const ORDER_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./orders/orders.component').then(c => c.OrdersComponent)
  }
]