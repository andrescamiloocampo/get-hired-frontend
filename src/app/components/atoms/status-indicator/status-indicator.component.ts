import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-status-indicator',
  imports: [MatIcon,NgClass],
  templateUrl: './status-indicator.component.html',
  styleUrl: './status-indicator.component.scss'
})
export class StatusIndicatorComponent {
  @Input() public iconName: string = 'insert_emoticon';  
  @Input() public active: boolean = false;
  @Input() public done: boolean = false;  
}
