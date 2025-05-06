import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-strength',
  imports: [MatIcon],
  templateUrl: './strength.component.html',
  styleUrl: './strength.component.scss',  
})
export class StrengthComponent {
  public progress = input.required<number>();  
  protected showData = true;
}
