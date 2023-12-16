import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../model/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.url + 'tarefas/');
  }


  createTarefa(tarefa: Tarefa): Observable<Tarefa> {
    console.log('passou pelo createTarefa')
    return this.http.post<Tarefa>(this.url + 'tarefas/', tarefa);

  }

  updateStatusTarefa(tarefa: Tarefa): Observable<any> {
    const url = `${this.url}tarefas/${tarefa.id}`

    return this.http.put(url, tarefa);
  }

  deteleTarefa(tarefa: Tarefa): Observable<any> {
    const url = `${this.url}tarefas/${tarefa.id}`;
    return this.http.delete(url);
  }
}
