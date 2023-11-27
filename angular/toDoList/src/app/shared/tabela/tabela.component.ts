import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../model/tarefa';
import { TarefaService } from 'src/app/service/tarefa.service';


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit{

  tarefas: Tarefa[] = [];

  tarefa: Tarefa = { id: 0, descricao: '', data: '', status: ''};

  constructor(private service: TarefaService) { }

  ngOnInit() {
    this.service.getTarefas().subscribe(data => this.tarefas = data);
  }
}
