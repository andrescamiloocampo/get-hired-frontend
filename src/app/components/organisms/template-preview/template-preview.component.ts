import { Component, Input } from '@angular/core';
import { ChipComponent,SeparatorComponent } from '../../atoms';
import { MatIcon } from '@angular/material/icon';
import { StarRateComponent } from '../../molecules';

@Component({
  selector: 'app-template-preview',
  imports: [ChipComponent, SeparatorComponent, StarRateComponent, MatIcon],
  templateUrl: './template-preview.component.html',
  styleUrl: './template-preview.component.scss'
})
export class TemplatePreviewComponent {
  @Input() rating: number = 0;
  @Input() title: string = 'Professional';
  @Input() description: string = 'A clean, modern template suitable for all industries'
}
