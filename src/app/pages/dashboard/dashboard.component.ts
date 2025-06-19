import { Component } from '@angular/core';
import {
  StrengthComponent,
  ViewsComponent,
  DownloadsComponent,
  MatchesViewComponent,
} from '../../components/organisms';
import { TopMatchesComponent } from '../../components/sections';
import { ActiveCvComponent } from '../../components/organisms';

@Component({
  selector: 'app-dashboard',
  imports: [
    StrengthComponent,
    ViewsComponent,
    DownloadsComponent,
    MatchesViewComponent,
    ActiveCvComponent,
    TopMatchesComponent,
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  protected title = 'Dashboard';
}
