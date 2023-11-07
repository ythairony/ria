import { Component } from '@angular/core';
import { ExemploService } from '../exemplo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private exemploService: ExemploService) {}

  nota = 1;

  notas: number[] = [];

  adicionar() {
    this.exemploService.adicionarNotas(this.nota++);
    this.notas = this.exemploService.obterNotas();
  }
}
