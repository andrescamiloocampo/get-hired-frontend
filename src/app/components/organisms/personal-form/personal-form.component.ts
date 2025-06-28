import { Component } from '@angular/core';
import { FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-form',
  imports: [ReactiveFormsModule],
  templateUrl: './personal-form.component.html',
  styleUrl: './personal-form.component.scss'
})
export class PersonalFormComponent {
  protected phoneNumber = new FormControl<string>('');
  protected location = new FormControl<string>('');
  protected summary = new FormControl<string>('');
}
