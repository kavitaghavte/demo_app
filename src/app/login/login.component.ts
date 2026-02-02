import { Component, inject } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private router = inject(Router);
  email: string = '';
  password:any = null;
  showPassword:any = false;

  togglePassword(){
    this.showPassword = !this.showPassword
  }
  onLogin(form:any):void{
    if(form.valid){
      this.router.navigateByUrl('home/dashboard');
    }
  }
}
