import { Component, Input } from '@angular/core';
import { StatusIndicatorComponent } from '../../atoms';
import { WalkwayItemModel } from '../../../models';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-walkway-status',
  imports: [StatusIndicatorComponent,NgClass],
  templateUrl: './walkway-status.component.html',
  styleUrl: './walkway-status.component.scss'
})
export class WalkwayStatusComponent {
  @Input() items: WalkwayItemModel[] = [];
  @Input() currentState: number = 0;
}
