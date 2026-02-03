import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private router = inject(Router);
  selectedItem: any;
  sidebarList:any = [
    {
      ModuleName: 'DASHBOARD',
      img: 'icons/monitor.png',
      roterPath: 'home/dashboard',
    },
    {
      ModuleName: 'USER',
      img: 'icons/group.png',
      roterPath: 'home/user'
    },
    {
      ModuleName: 'PRODUCT',
      img: 'icons/product.png',
      roterPath: 'home/product'
    },
    {
      ModuleName: 'ORDER',
      img: 'icons/order.png',
      roterPath: 'home/orders'
    }
  ];
  selectView(item:any){
    this.selectedItem = item;
    this.router.navigate([item?.roterPath])
  }
}
