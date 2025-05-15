import { Component, inject, OnInit, signal } from '@angular/core';
import { SearchInputComponent } from '../../atoms';
import { MatIcon } from '@angular/material/icon';
import { User, UserService } from '../../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [SearchInputComponent,MatIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  protected userService = inject(UserService);  
  protected router = inject(Router);
  protected currentUser = signal<User | null>(null);

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (user) => {        
        this.currentUser.set(user);
      },
      error: (err) => {
        console.error('Error loading user:',err);
      }
    })    
  }

  redirect(){    
    this.router.navigate(['dashboard','profile']);
  }
}
