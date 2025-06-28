import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-skill-card',
  imports: [MatIcon],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
  @Input() name: string = '';
  @Input() level: string = '';
  @Input() onClick: (name:string) => void = () => {}

  onClose(name: string){    
    this.onClick(name);
  }
}
