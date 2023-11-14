import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  template: `
  <form [formGroup]="meuForm" (ngSubmit)="enviar()">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" formControlName="nome">

    <label for="email">Email:</label>
    <input type="email" id="email" formControlName="email">

    <button type="submit">Enviar</button>
  </form>
  `
})
export class HomeComponent {
  meuForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.meuForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  enviar() {
    if (this.meuForm.valid) {
      return 1;
    }
    return 0;
  }
}
