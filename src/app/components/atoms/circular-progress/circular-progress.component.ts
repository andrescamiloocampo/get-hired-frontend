import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-circular-progress',
  imports: [],
  templateUrl: './circular-progress.component.html',
  styleUrl: './circular-progress.component.scss'
})
export class CircularProgressComponent {
  @Input() value = 50;
  @Input() max = 100;
  @Input() radius = 45; 
  @Input() title: string = 'Progress';

  get circumference(): number {
    return 2 * Math.PI * this.radius;
  }

  get progress(): number {
    return (this.value / this.max) * this.circumference;
  }

  get strokeDashoffset(): number {
    return this.circumference - this.progress;
  }

  get svgSize(): number {
    return this.radius * 2.5; 
  }
}
