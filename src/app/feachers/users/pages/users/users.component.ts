import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [MatDialogModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  private router = inject(Router);
  addUsrs(){
    this.router.navigateByUrl('home/users/add');
  }
}
