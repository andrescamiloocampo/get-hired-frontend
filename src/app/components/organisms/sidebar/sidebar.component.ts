import { Component, inject, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { sidebarItems } from '../../../datasources';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink,Router, NavigationEnd } from '@angular/router';
import { SidebarItem } from '../../../models/sidebarItem.model';
import { AuthService } from '../../../services';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  imports: [MatIconModule, NgOptimizedImage,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{

  constructor(private authService: AuthService){}

  protected sidebarItems:SidebarItem[] = sidebarItems;
  router = inject(Router);
  currentRoute:string = '';

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)      
    ).subscribe((event: NavigationEnd)=>{
      this.currentRoute = event.urlAfterRedirects.trim();
    });            
  }

  isActive(route: string){
    if(this.currentRoute === '') this.currentRoute = '/dashboard';
    return this.currentRoute === route;
  }

  logout(){    
    this.authService.logout();
  }
}
