import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { AddUpdateUserComponent } from '../add-update-user/add-update-user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [MatDialogModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  private dialog = inject(MatDialog);
  private router = inject(Router);
  addUsrs(){
    // this.dialog.open(AddUpdateUserComponent,{
    //   disableClose: true,
    //   width: '70vw',
    //   maxWidth: '80vw',
    //   height: '80vh',
    //   data: {
    //     isAdd: true,
    //     isEdit: false,
    //     moduleName: 'Users'
    //   }
    // });
    this.router.navigateByUrl('home/add-user');
  }
}
