import { Component } from '@angular/core';
import {
  StrengthComponent,
  ViewsComponent,
  DownloadsComponent,
  MatchesViewComponent,
} from '../../components/organisms';
import { ActiveCvComponent } from '../../components/sections';

@Component({
  selector: 'app-dashboard',
  imports: [
    StrengthComponent,
    ViewsComponent,
    DownloadsComponent,
    MatchesViewComponent,
    ActiveCvComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  protected title = 'Dashboard';
}
