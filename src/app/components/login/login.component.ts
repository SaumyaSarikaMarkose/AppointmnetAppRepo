import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  loginFailed: boolean = false;

  constructor(private fb: FormBuilder,
    private authService:AuthService,
    private router:Router,
    private snackBar: MatSnackBar 
  ){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Value:', this.loginForm.value);
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      const isValid = this.authService.verifyLogin(username, password);

      if (isValid) {
        console.log('Login successful');
        this.loginFailed = false;
        this.snackBar.open('Successfully logged in!', 'Close', {
          duration: 3000, // Duration in milliseconds
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['success-snackbar'] // Add custom class for styling
        });
        this.router.navigate(['/appointment-details'])
      } else {
        console.log('Login failed');
        this.loginFailed = true;
      }
      this.loginForm.reset();
    }
    }


}


