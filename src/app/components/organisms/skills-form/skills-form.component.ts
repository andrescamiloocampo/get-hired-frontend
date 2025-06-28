import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MessageService } from 'primeng/api';
import { SkillModel } from './../../../models/walkway.model';
import { SkillCardComponent } from '../../molecules';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-skills-form',
  imports: [ReactiveFormsModule, MatIcon, ToastModule, SkillCardComponent],
  providers: [MessageService],
  templateUrl: './skills-form.component.html',
  styleUrl: './skills-form.component.scss',
})
export class SkillsFormComponent {
  protected skill = new FormControl<string>('');
  protected level = new FormControl<string>('Begginer');
  protected currentSkill: SkillModel = {
    name: '',
    level: this.level.getRawValue() ?? '',
  };
  protected skills: SkillModel[] = [];

  constructor(private messageService: MessageService) {
    this.skill.valueChanges.subscribe((value) => {
      this.currentSkill.name = value ?? '';
    });
    this.level.valueChanges.subscribe((value) => {
      this.currentSkill.level = value ?? '';
    });
  }

  addSkill() {
    if (!this.currentSkill.level) {
      return;
    }

    if (!this.currentSkill.name) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'Please enter a skill',
      });
      return;
    }

    if (
      this.skills.some(
        (skill) =>
          skill.name.trim().toLowerCase() ===
          this.currentSkill.name.trim().toLowerCase()
      )
    ) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Skill already exists',
      });
      return;
    }
    this.skills.push({
      ...this.currentSkill,
    });

    this.currentSkill.name = '';
    this.skill.reset();
    this.messageService.add({
      severity: 'success',
      summary: 'Added',
      detail: 'Skill added successfully!',
    });
  }

  deleteSkill = (name: string):void => {    
    this.skills = this.skills.filter((skill) => skill.name !== name);
  }
}
