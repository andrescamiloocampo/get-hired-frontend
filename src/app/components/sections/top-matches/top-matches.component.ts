import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JobCardComponent } from '../../organisms';
import { JobCard } from '../../../models';

@Component({
  selector: 'app-top-matches',
  imports: [RouterLink, JobCardComponent],
  templateUrl: './top-matches.component.html',
  styleUrl: './top-matches.component.scss'
})
export class TopMatchesComponent {
  protected mockMatches:JobCard[] = [
    {
      job: 'Software Engineer',
      company: 'Tech Corp',
      location: 'New York, NY',
      date: '2025-07-05',
      matchPercentage: 85,
    },{
      job: 'Data Scientist',
      company: 'Data Inc',
      location: 'San Francisco, CA',
      date: '2023-10-02',
      matchPercentage: 39,
    },
    {
      job: 'Product Manager',
      company: 'Business Solutions',
      location: 'Remote',
      date: '2023-10-03',
      matchPercentage: 78,
    },
    {
      job: 'UX Designer',
      company: 'Creative Agency',
      location: 'Los Angeles, CA',
      date: '2023-10-04',
      matchPercentage: 8,
    }
  ];
}
