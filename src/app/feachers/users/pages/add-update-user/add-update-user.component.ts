import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-update-user',
  imports: [MatDialogModule,ReactiveFormsModule],
  templateUrl: './add-update-user.component.html',
  styleUrl: './add-update-user.component.scss'
})
export class AddUpdateUserComponent {

}
