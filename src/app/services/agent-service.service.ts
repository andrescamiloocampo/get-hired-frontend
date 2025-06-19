import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import type { CVPromptModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AgentService {
  private http: HttpClient = inject(HttpClient);
  private baseUrl: string = environment.agentUrl;

  constructor() {}

  public greetAgent() {
    return this.http.get(`${this.baseUrl}/agent`);
  }

  public createCV(prompt: CVPromptModel){    
    return this.http.post(`${this.baseUrl}/files/create`,prompt,{
        headers:{
            'Content-Type':'application/json'
        }
    })
  }
}
