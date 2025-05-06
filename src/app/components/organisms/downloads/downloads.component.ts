import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-downloads',
  imports: [MatIcon],
  templateUrl: './downloads.component.html',
  styleUrl: './downloads.component.scss'
})
export class DownloadsComponent {
  protected downloads: number = 0;
}
