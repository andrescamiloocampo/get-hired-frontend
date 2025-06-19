import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-btn',
  imports: [],
  templateUrl: './filter-btn.component.html',
  styleUrl: './filter-btn.component.scss',
  standalone: true
})
export class FilterBtnComponent {
  @Input() label: string = '';
  @Input() onClick?: (label:string) => void;
  @Input() isActive: boolean = false;

  handleClick():void {
    if(this.onClick){      
      this.onClick(this.label);
    }    
  }
}
