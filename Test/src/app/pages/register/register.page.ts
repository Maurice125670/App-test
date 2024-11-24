import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Department } from '../../interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  department: Department = 'IT';
  errorMessage: string = '';

  departments = AuthService.departments;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async register() {
    try {
      await this.authService.register({
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        department: this.department
      });
      this.router.navigate(['/home']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
