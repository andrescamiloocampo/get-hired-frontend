import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-matches-view',
  imports: [MatIcon],
  templateUrl: './matches-view.component.html',
  styleUrl: './matches-view.component.scss'
})
export class MatchesViewComponent {
  protected matches: number = 0;  
}
