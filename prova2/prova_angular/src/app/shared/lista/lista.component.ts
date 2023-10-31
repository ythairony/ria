import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  linguagens: any[] = [];
  id:number = 1;

  adicionarLinguagem(novaLinguagem:string) {
    if(novaLinguagem) {
      this.linguagens.push({ id: this.id++, linguagem: novaLinguagem });
    }
  }

  excluirLinguagem(index:number) {
    this.linguagens.splice(index, 1);
  }
}
