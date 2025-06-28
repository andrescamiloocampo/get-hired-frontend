import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-activity-card',
  imports: [MatIcon],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.scss'
})
export class ActivityCardComponent {
  @Input() title: string = 'Google recruiter viewed your CV';
  @Input() description: string = 'Your Professional CV was viewed by a recruiter from Google';
  @Input() timestamp: string = '2 hours ago'
}
