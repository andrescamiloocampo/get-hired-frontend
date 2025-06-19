import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { devEnvironment } from '../../../environments';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [MatIconModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit{
  constructor(private authService: AuthService, private router: Router) {}
  protected redirectUrl: string = `${devEnvironment.apiUrl}/auth/google/login`;
  protected usernameCtl = new FormControl('');
  protected passwordCtl = new FormControl('');
  protected passwordVisible = false;

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe((isAuth) => {      
      if (isAuth) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  togglePasswordVisibility(){
    this.passwordVisible = !this.passwordVisible;
  }

  redirect():void {
    console.log('redireccion')
    window.location.href = this.redirectUrl;
  }

  logout(): void {
    console.log('aqui me voy');
    this.authService.logout();
  }
}
