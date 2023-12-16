import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Tarefa } from 'src/app/model/tarefa';
import { TarefaService } from 'src/app/service/tarefa.service';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent {
  dataDeHoje: Date;
  tarefa: Tarefa = {id: 0, descricao: '', data: '', status: 'Não iniciado'};

  @Output() tarefaCriada = new EventEmitter<Tarefa>();

  constructor(private service: TarefaService) {

    this.dataDeHoje = new Date();
    
  }
  
  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}/${month}/${year}`;
  }
  
  onSubmit(task: NgForm) {
    this.tarefa.descricao = task.value.tarefa;
    this.tarefa.data = this.formatDate(this.dataDeHoje);
    this.service.createTarefa(this.tarefa).subscribe(data => console.log(data));
    console.log('Esse submit foi acionado');
    this.tarefaCriada.emit(this.tarefa);

    task.resetForm();
  }


}
