import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent,HeaderComponent } from './components/organisms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'get-hired';
}
