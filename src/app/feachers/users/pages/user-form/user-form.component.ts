import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-user-form',
  imports: [RouterLink],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit{
  private fb = inject(FormBuilder);
  userForm!: FormGroup;
  ngOnInit(){
    this.initializeUserForm();
  }
  initializeUserForm(){
    this.userForm = this.fb.group({
      personalDetails: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        gender: ['', Validators.required],
        bloodGroup: ['', Validators.required],
        dob: ['', Validators.required],
        marriageStatus: ['', Validators.required],
        nationallity: ['', Validators.required],
      }),
      contactInfo: this.fb.group({
        mobile: ['', Validators.required],
        email: ['', Validators.required],
        address: this.fb.array([
          {
            city: ['',Validators.required],
            state: ['',Validators.required],
            country: ['',Validators.required],
            pincode: ['',Validators.required],
          }
        ])
      }),
    })
  }
}
