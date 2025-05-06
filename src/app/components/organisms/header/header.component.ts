import { Component } from '@angular/core';
import { SearchInputComponent } from '../../atoms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [SearchInputComponent,MatIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
