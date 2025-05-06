import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-icon-card',
  imports: [MatIcon,NgStyle],
  templateUrl: './icon-card.component.html',
  styleUrl: './icon-card.component.scss',
  standalone: true,
})
export class IconCardComponent {
  public icon = input('library_books');
  public size = input<{width: string, height:string}>({width: '100px', height: '100px'});
}
