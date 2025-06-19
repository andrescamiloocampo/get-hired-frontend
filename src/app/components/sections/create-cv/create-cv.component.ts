import { AgentService, UserService } from '../../../services';
import { Component, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { devEnvironment } from '../../../../environments';
import { inject } from '@angular/core';

import { User } from '../../../services/user-service.service';
import { SafeResourceUrlPipe } from '../../../pipes/safe-resource-url.pipe';

@Component({
  selector: 'app-create-cv',
  imports: [ReactiveFormsModule,SafeResourceUrlPipe],
  templateUrl: './create-cv.component.html',
  styleUrl: './create-cv.component.scss',
})
export class CreateCVComponent implements OnInit {  
  protected user = signal<User | null>(null);
  protected message = signal<any>(null);
  protected agent: AgentService = inject(AgentService);
  protected userService: UserService = inject(UserService);
  protected jobPromptCtl = new FormControl<string>('');
  protected cvUrl:string = `${devEnvironment.agentUrl}/files/getCVPdf`;

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
      agent: "writter"
    };

    console.log(payload)

    try {      
      this.agent.createCV(payload).subscribe((response)=>{
        this.message.set(response);
      });      
    } catch (error) {
      console.error('Error al generar el CV', error);
    }
  }
}
