import { Routes } from '@angular/router';
import {
  DashboardComponent,
  CvTemplatesComponent,
  MatchesComponent,
  ProfileComponent,
  SettingsComponent,
  SkillsComponent,
} from './pages';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'templates', component: CvTemplatesComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'matches', component: MatchesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
    ],
  },
];
