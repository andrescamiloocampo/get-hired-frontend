import { Component } from '@angular/core';
import { WalkwayStatusComponent } from '../../components/molecules';
import { WalkwayItemModel } from '../../models';
import { PersonalFormComponent,SkillsFormComponent } from '../../components/organisms';

@Component({
  selector: 'app-get-started',
  imports: [WalkwayStatusComponent, PersonalFormComponent,SkillsFormComponent],
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.scss'
})
export class GetStartedComponent {
  protected steps: WalkwayItemModel[] = [
    {
      id: 0,
      name: 'Personal',
      iconName: 'person_outline'
    },
    {
      id: 1,
      name: 'Skills',
      iconName: 'school'
    },
    {
      id: 2,
      name: 'Jobs',
      iconName: 'next_week'
    }    
  ]

  currentState: number = 0;

  rollbackCurrentState(){
    this.currentState = Math.max(0,this.currentState-1)
  }

  updateCurrentState(){
    this.currentState = Math.min(this.currentState+1,2);
  }
}
