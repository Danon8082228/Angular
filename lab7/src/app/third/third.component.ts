import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrl: './third.component.scss',
  imports: [CommonModule, ReactiveFormsModule]
})
export class ThirdComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      age: [null, [Validators.required, Validators.min(18)]],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log('Submitted Data:', this.myForm.value);
      alert('Форма успешно отправлена!');
      this.myForm.reset();
    } else {
      this.myForm.markAllAsTouched();
    }
  }
}
