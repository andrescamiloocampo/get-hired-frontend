import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe((isAuth) => {      
      if (isAuth) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  logout(): void {
    console.log('aqui me voy');
    this.authService.logout();
  }
}
