import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {
  novaLinguagem: string = '';
  linguagens: any[] = [];

  adicionarLinguagem(novaLinguagem: string) {
    if (novaLinguagem) {
      this.linguagens.push({ linguagem: novaLinguagem });
      this.novaLinguagem = ''; // Limpar o campo de entrada após adicionar
    }
  }

  excluirLinguagem(index: number) {
    this.linguagens.splice(index, 1);
  }
}
