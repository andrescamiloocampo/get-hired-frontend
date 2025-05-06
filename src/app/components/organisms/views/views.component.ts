import { Component, signal, Signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-views',
  imports: [MatIcon],
  templateUrl: './views.component.html',
  styleUrl: './views.component.scss'
})
export class ViewsComponent {
  protected views:Signal<number> = signal(0); 
  protected message:Signal<string> = signal('There is no news yet.')
}
