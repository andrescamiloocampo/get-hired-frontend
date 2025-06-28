import { Component, inject, OnInit, signal } from '@angular/core';
import {
  StrengthComponent,
  ViewsComponent,
  DownloadsComponent,
  MatchesViewComponent,
  RecentActivityComponent,
} from '../../components/organisms';
import { TopMatchesComponent } from '../../components/sections';
import { ActiveCvComponent } from '../../components/organisms';
import { UserService } from '../../services';
import { User } from '../../models';

@Component({
  selector: 'app-dashboard',
  imports: [
    StrengthComponent,
    ViewsComponent,
    DownloadsComponent,
    MatchesViewComponent,
    ActiveCvComponent,
    TopMatchesComponent,
    RecentActivityComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  protected title = 'Dashboard';
  protected userService: UserService = inject(UserService);
  protected currentUser = signal<User | null>(null);

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (user) => {
        this.currentUser.set(user);
      },
      error: (err) => {
        console.error(`Error getting user: ${err}`);
      }
    });
  }
}
