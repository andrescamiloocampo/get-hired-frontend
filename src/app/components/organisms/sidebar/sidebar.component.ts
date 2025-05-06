import { Component, inject, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { sidebarItems } from '../../../datasources';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink,Router, NavigationEnd } from '@angular/router';
import { SidebarItem } from '../../../models/sidebarItem.model';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  imports: [MatIconModule, NgOptimizedImage,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{
  protected sidebarItems:SidebarItem[] = sidebarItems;
  router = inject(Router);
  currentRoute:string = 'dashboard';

  isActive(route: string){
    return this.currentRoute === route;
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)      
    ).subscribe((event: NavigationEnd)=>{
      this.currentRoute = event.urlAfterRedirects.split('/').join('');
    });            
  }
}
