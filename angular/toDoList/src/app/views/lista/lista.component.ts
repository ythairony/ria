import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../model/tarefa';
import { TarefaService } from 'src/app/service/tarefa.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  tarefas: Tarefa[] = [];


  
  constructor(private service: TarefaService) { }
  
  adicionarTarefa(evento: Tarefa):void {
    this.tarefas.push(evento);
  }

  ngOnInit() {
    this.service.getTarefas().subscribe(data => this.tarefas = data);
  }

  changeStatus(tarefa: Tarefa, status: 'i' | 'c') {
    // Mudança de status
    if (status === 'i') {
      tarefa.status = "Iniciada"
    } else if (status === 'c') {
      tarefa.status = "Concluído"
    }

    // Atualizar status no json
    this.service.updateStatusTarefa(tarefa).subscribe(
      (Response) => {
        console.log("status atualizado");
      },
      (error) => {
        console.log("ERRO ao atualizar o status");
      }
    )
  }

  excluirTarefa(tarefa: Tarefa) {
    this.service.deteleTarefa(tarefa).subscribe(
      (response) => {
        console.log("Tarefa deletada");
        // tirando ela da tabela sem precisar fazer outra requisição
        this.tarefas = this.tarefas.filter(t => t.id !== tarefa.id);
      },
      (error) => {
        console.log("ERRO ao deletar uma tarefa");
      }
    )
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Iniciada':
        return 'blue';
      case 'Concluído':
        return 'green';
      default:
        return 'black'; // Cor padrão se o status não estiver mapeado
    }
  }
  
}