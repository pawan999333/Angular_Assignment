import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    password: string = '';
  showPassword: boolean = false;

  constructor(private toastr: ToastrService) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.toastr.success('Registration successful!', 'Success');
    } else {
      this.toastr.error('Please fill in all required fields correctly.', 'Error');
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}



