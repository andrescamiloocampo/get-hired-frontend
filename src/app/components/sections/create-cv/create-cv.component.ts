import { AgentService, UserService } from '../../../services';
import { Component, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CvPreviewComponent, CvPlaceholderComponent } from '../../organisms';
import { LoadCVSkeletonComponent } from '../../skeletons/cv-templates/load-cvskeleton/load-cvskeleton.component';
import { inject } from '@angular/core';

import type { User } from '../../../models';

@Component({
  selector: 'app-create-cv',
  imports: [
    ReactiveFormsModule,
    CvPreviewComponent,
    CvPlaceholderComponent,
    LoadCVSkeletonComponent,
  ],
  templateUrl: './create-cv.component.html',
  styleUrl: './create-cv.component.scss',
})
export class CreateCVComponent implements OnInit {
  protected user = signal<User | null>(null);
  protected message = signal<any>(null);
  protected agent: AgentService = inject(AgentService);
  protected userService: UserService = inject(UserService);
  protected jobPromptCtl = new FormControl<string>('');
  protected loading = signal<'idle' | 'loading' | 'done'>('idle');

  ngOnInit(): void {
    this.userService.getUser().subscribe((response) => {
      this.user.set(response);
    });
  }

  protected async generateCV() {
    const user = this.user();
    const jobDesc = this.jobPromptCtl;

    if (!user || !user._id || !user.name) {
      console.error('Usuario no válido para generar el CV');
      return;
    }

    if (!jobDesc) {
      console.error('Descripción de trabajo no válida');
      return;
    }

    const payload = {
      id: String(user._id),
      username: String(user.name),
      content: String(jobDesc.getRawValue()),
      agent: 'writter',
    };

    console.log(payload);
    this.loading.set('loading');
    try {
      this.agent.createCV(payload).subscribe({
        next: (response) => {
          this.message.set(response);
          this.loading.set('done');
        },
      });
    } catch (error) {
      console.error('Error al generar el CV', error);
      this.loading.set('idle');
    }
  }
}
