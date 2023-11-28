import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Tarefa } from 'src/app/model/tarefa';
import { TarefaService } from 'src/app/service/tarefa.service';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent {
  tarefa: Tarefa = {id: 0, descricao: '', data: '', status: 'Não iniciado'};
  // data: Date;

  constructor(private service: TarefaService) {}

  onSubmit(task: NgForm) {
    this.tarefa.descricao = task.value.addlist;
    // data = new Date();
    this.tarefa.data = 'Data de hoje';
    this.service.createTarefa(this.tarefa);

    // this.service.createTarefa(this.tarefa).subscribe(data => this.tarefas.push(data));
  }
}
