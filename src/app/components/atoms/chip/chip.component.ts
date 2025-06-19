import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="chip" 
      [ngStyle]="{
        'background-color': backgroundColor,
        'color': textColor
      }">
      {{ text }}
    </div>
  `,
  styles: [`
    .chip {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      cursor: default;
      user-select: none;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      transition: all 0.2s ease;
    }

    .chip:hover {
      opacity: 0.9;
    }
  `]
})
export class ChipComponent {
  @Input() text: string = '';
  @Input() textColor: string = '#ffffff';
  @Input() backgroundColor: string = '#3454d1';
}