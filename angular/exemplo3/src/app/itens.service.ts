import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItensService {
  url = 'http://3.128.249.166:8000/api/clients/'
  constructor() { }

  async obterItens(): Promise<Client[]> {
     const response = await fetch(this.url);
     const data = 
  }
}
