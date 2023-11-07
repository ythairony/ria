import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItensService {
  itens: any[] = [];

  constructor() { }

  obterItens(): Promise<any[]> {
     fetch('http://3.128.249.166:8000/api/clients/')
      .then(response => response.json())
      .then(dados => {
        dados.map(element => this.itens = element );
        //return this.itens;
      });
  }
}
