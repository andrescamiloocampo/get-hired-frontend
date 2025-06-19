import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { FilterBtnComponent } from '../../components/atoms';
import { isPlatformBrowser } from '@angular/common';
import { TemplatePreviewComponent } from '../../components/organisms';
import { CreateCVComponent } from '../../components/sections';

@Component({
  selector: 'app-cv-templates',
  imports: [FilterBtnComponent, TemplatePreviewComponent, CreateCVComponent],
  templateUrl: './cv-templates.component.html',
  styleUrl: './cv-templates.component.scss',
  standalone: true,
})
export class CvTemplatesComponent {
  public tags = signal<string[]>([
    'All Templates',
    'Simple',
    'Professional',
    'Smart',
    'Modern',
  ]);
  public currentFilter = signal<string>(this.tags()[0] ?? '');
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.currentFilter.set(this.tags()[0] ?? '');
    }
  }

  handleFilterChange = (label: string): void => {
    this.currentFilter.set(label);
  };
}
