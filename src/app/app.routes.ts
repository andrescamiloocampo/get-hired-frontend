import { Routes } from '@angular/router';
import { DashboardComponent,CvTemplatesComponent,MatchesComponent,ProfileComponent,SettingsComponent,SkillsComponent } from './pages';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'templates', component: CvTemplatesComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'matches', component: MatchesComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'settings', component: SettingsComponent}
];
