import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule, FormArray } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-user-form',
  imports: [
    RouterLink, 
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatRadioModule, 
    MatSelectModule, 
    MatCardModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit{
  private fb = inject(FormBuilder);
  userForm!: FormGroup;
  bloodGroupList: any[] = ['O+','O-',"A+","A-","B+","B-","AB+","AB-"];
  intrestList = ['Home decor','Reading','Personal care','Gaming','Cooking']
  ngOnInit(){
    this.initializeUserForm();
  }
  initializeUserForm(){
    this.userForm = this.fb.group({
      personalDetails: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        bloodGroup: [''],
        dob: ['', Validators.required],
        gender: ['', Validators.required],
      }),
      contactInfo: this.fb.group({
        mobile: ['', Validators.required,Validators.pattern('^[6-9][0-9]{9}$')],
        email: ['', Validators.required,Validators.email],
        address: this.fb.array([
          this.createAddress()
        ])
      }),
      preference: this.fb.group({
        intrest: [[]]
      })
    })
  }
  createAddress(): FormGroup{
    return(this.fb.group({
      country: ['',Validators.required],
      state: ['',Validators.required],
      city: ['',Validators.required],
      street: ['',Validators.required],
      pincode: ['',Validators.required,Validators.pattern('^[1-9][0-9]{5}$')],
    }));
  }
  get addressArray():FormArray{
    return this.userForm.get('contactInfo.address') as FormArray;
  }
  addAddress(){
    this.addressArray.push(this.createAddress());
  }
  removeAddress(index:number){
    if(this.addressArray.length > 1){
      this.addressArray.removeAt(index);
    }
  }
  onSubmit(){

  }
}
