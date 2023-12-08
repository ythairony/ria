import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudante } from 'src/model/estudante';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  url = 'https://3.128.249.166:3000/';

  constructor(private http: HttpClient) { }

  getEstudantes(): Observable<Estudante[]> {
    return this.http.get<Estudante[]>(this.url + 'students/');
  }

  getEstudante(id: number): Observable<Estudante> {
    // const urlComMatricula = `${this.url}students?matricula=${matricula}`;
    return this.http.get<Estudante>(this.url + id + '/');
  }

  adicionarEstudante(estudante: Estudante): Observable<Estudante> {
    const urlAdicionarEstudante = `${this.url}students/`;
    return this.http.post<Estudante>(urlAdicionarEstudante, estudante);
  }

  adicionarPostParaEstudante(matricula: string, post: any): Observable<any> {
    const urlAdicionarPost = `${this.url}students/${matricula}/posts`;
    return this.http.post<any>(urlAdicionarPost, post);
  }

  getPostagensDoEstudante(matricula: string): Observable<any[]> {
    const urlPostagens = `${this.url}students/${matricula}/posts`;
    return this.http.get<any[]>(urlPostagens);
  }
}
