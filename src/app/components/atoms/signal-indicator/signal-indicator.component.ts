import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-signal-indicator',
  imports: [MatIcon],
  templateUrl: './signal-indicator.component.html',
  styleUrl: './signal-indicator.component.scss'
})
export class SignalIndicatorComponent {
  public readonly percentage = input<number>(0);
}
