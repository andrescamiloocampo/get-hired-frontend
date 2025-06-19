import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-star-rate',
  imports: [MatIcon,NgClass],
  templateUrl: './star-rate.component.html',
  styleUrl: './star-rate.component.scss'
})
export class StarRateComponent {
  @Input() rating: number = 1;  
  get stars(): number[] {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }
}
