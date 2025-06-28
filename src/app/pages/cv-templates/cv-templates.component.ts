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
  protected currentTemplate = signal<string>('');
  private isBrowser: boolean;
  protected templates: { name: string; category: string; description: string }[] = [
    { name: 'Harvard', category: 'Simple', description: 'A clean and minimal template for any industry.' },
    { name: 'Professional', category: 'Professional', description: 'Impress your new boss.' },
    { name: 'Smart', category: 'Smart', description: 'A modern template with smart highlights.' },  
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.currentFilter.set(this.tags()[0] ?? '');
    }
  }

  public setCurrentTemplate = (template: string):void => {
    this.currentTemplate.set(template);
  }

  public handleFilterChange = (label: string): void => {
    this.currentFilter.set(label);
  };

  public filteredTemplates = () => {
    const filter = this.currentFilter();
    if (filter === 'All Templates') return this.templates;
    return this.templates.filter(t => t.category === filter);
  };
}
