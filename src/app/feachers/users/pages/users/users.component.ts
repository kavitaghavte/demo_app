import { Component, inject, OnInit } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule,MatDialogModule,MatTableModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{
  private router = inject(Router);
  private userService = inject(UserService);
  displayedColumns: string[] = ['userId', 'userName', 'email', 'mobile', 'city', 'action'];
  usersData: any[] = [];
  ngOnInit(){
    this.getAllUsers();
  }
  addUsrs(){
    this.router.navigateByUrl('home/users/add');
  }
  getAllUsers(){
    this.userService.getUsersService().subscribe((res:any) => {
      this.usersData = [];
      console.log(res);
      if(res){
        this.usersData = res.map((ele: any) => {
        return {
          userId: ele.userId,
          userName: ele.personalDetails?.firstName + ' ' + ele.personalDetails?.lastName,
          email: ele.contactInfo?.email,
          mobile: ele.contactInfo?.mobile,
          city: ele.contactInfo?.address?.[0]?.city
        };
    });
        console.log(this.usersData);
      }
    })
  }
  editUser(item:any){
    
  }
  deleteUser(item:any){
    
  }
}
