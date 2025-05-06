import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { IconCardComponent } from '../../atoms';
import { CircularProgressComponent } from '../../atoms/circular-progress/circular-progress.component';

@Component({
  selector: 'app-active-cv',
  imports: [MatIcon,MatChipsModule,IconCardComponent,CircularProgressComponent],
  templateUrl: './active-cv.component.html',
  styleUrl: './active-cv.component.scss'
})
export class ActiveCvComponent {
  protected skills: string[] = ['Angular', 'React', 'Vue', 'Node.js', 'Python', 'Java','Docker'];
  protected visibleSkills: string[] = this.skills.slice(0, 3);
}
