import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CheckboxModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly native = new FormControl({ value: false, disabled: true });
  readonly primeng = new FormControl({ value: false, disabled: true });
  readonly form = this.formBuilder.group({
    native: this.native,
    primeng: this.primeng,
  });

  constructor(readonly formBuilder: FormBuilder) {}
}
