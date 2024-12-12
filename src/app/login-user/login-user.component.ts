import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';  // Make sure to import ReactiveFormsModule
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../features/examples/auth.service';
@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {

  loginForm: FormGroup;
  loginError: boolean = false; // Variable to show or hide error message

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(2)])
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login({ email, password }).subscribe(
        (response) => {
          // Clear the error if login is successful
          this.loginError = false;
          this.authService.storeAuthData(response.token, response.username);
          this.router.navigate(['/home']);
        },
        (error) => {
          // Show the error message when login fails
          this.loginError = true;
        }
      );
    }
  }
}