import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExemploService {
  notas: number[] = []

  adicionarNotas(nota: number) {
    this.notas.push(nota);
  }

  obterNotas():number[] {
    return this.notas;
  }

  constructor() { }
}
