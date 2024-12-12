import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../features/examples/auth.service';  
import { ReactiveFormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';        

@Component({
  selector: 'app-signup',
  standalone: true,  
  imports: [ReactiveFormsModule, CommonModule,RouterModule],  
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  isLoading: boolean = false;  
  errorMessage: string | null = null;  
  loginError: boolean = false;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.signupForm.valid) {
      this.isLoading = true; 
      const { username, email, password } = this.signupForm.value;
      this.authService.signup({ username, email, password }).subscribe(
        () => {
          this.isLoading = false; 
          this.router.navigate(['/login']); 
        },
        (error) => {
          this.loginError = true;  
        }
      );
    }
  }
}
