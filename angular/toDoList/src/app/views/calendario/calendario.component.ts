import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../model/tarefa';
import { TarefaService } from 'src/app/service/tarefa.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit{
  
  dataAtual: Date = new Date();
  diasCalendario: Date[] = [];

  ngOnInit() {
    this.construirCalendario();
  }

  construirCalendario() {
    const ano = this.dataAtual.getFullYear();
    const mes = this.dataAtual.getMonth();

    const primeiroDiaDaSemana = 0; // domingo
    const ultimoDiaDaSemana = 6;   // sábado

    // Vai subtraindo -1 até chegarmos no primeiro dia da semana
    const dataInicial = new Date(ano, mes, 1);
    while (dataInicial.getDay() !== primeiroDiaDaSemana) {
      dataInicial.setDate(dataInicial.getDate() - 1);
    }

    // Vai somando +1 até chegarmos no último dia da semana
    const dataFinal = new Date(ano, mes + 1, 0);
    while (dataFinal.getDay() !== ultimoDiaDaSemana) {
      dataFinal.setDate(dataFinal.getDate() + 1);
    }

    this.diasCalendario = [];
    for (
      let data = new Date(dataInicial.getTime());
      data <= dataFinal;
      data.setDate(data.getDate() + 1)
    ) {
      this.diasCalendario.push(new Date(data.getTime()));
    }
  }

  alterarMes(offsetMes: number) {
      this.dataAtual.setMonth(this.dataAtual.getMonth() + offsetMes);
      this.dataAtual = new Date(this.dataAtual.getTime());
      this.construirCalendario();
  }

  tarefas: Tarefa[] = [];

  // constructor(private service: TarefaService) { }

  adicionarTarefa(evento: Tarefa):void {
    this.tarefas.push(evento);
  }

  // ngOnInit() {
  //   this.service.getTarefas().subscribe(data => this.tarefas = data);
  // }

  // changeStatus(tarefa: Tarefa, status: 'i' | 'c') {
  //   // Mudança de status
  //   if (status === 'i') {
  //     tarefa.status = "Iniciada"
  //   } else if (status === 'c') {
  //     tarefa.status = "Concluído"
  //   }

  //   // Atualizar status no json
  //   this.service.updateStatusTarefa(tarefa).subscribe(
  //     (Response) => {
  //       console.log("status atualizado");
  //     },
  //     (error) => {
  //       console.log("ERRO ao atualizar o status");
  //     }
  //   )
  // }

  // excluirTarefa(tarefa: Tarefa) {
  //   this.service.deteleTarefa(tarefa).subscribe(
  //     (response) => {
  //       console.log("Tarefa deletada");
  //       // tirando ela da tabela sem precisar fazer outra requisição
  //       this.tarefas = this.tarefas.filter(t => t.id !== tarefa.id);
  //     },
  //     (error) => {
  //       console.log("ERRO ao deletar uma tarefa");
  //     }
  //   )
  // }
}
