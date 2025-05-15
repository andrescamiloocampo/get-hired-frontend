import { Component, Input } from '@angular/core';
import { JobCard } from '../../../models/jobCard.model';
import { MatIcon } from '@angular/material/icon';
import { SignalIndicatorComponent } from '../../atoms';

@Component({
  selector: 'app-job-card',
  imports: [MatIcon,SignalIndicatorComponent],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss'
})
export class JobCardComponent {
  @Input() content:JobCard = {
    job: '',
    company: '',
    location: '',
    date: '',
    matchPercentage: 0,
  }; 
}
