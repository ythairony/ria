// Criar um novo arquivo chamado filter-by-dia.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { Tarefa } from 'src/app/model/tarefa';

@Pipe({
  name: 'filterByDia'
})
export class FilterByDiaPipe implements PipeTransform {
  transform(tarefas: Tarefa[], dia: Date): Tarefa[] {
    return tarefas.filter(tarefa => this.isSameDay(this.parseDate(tarefa.data), dia));
  }

  private isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  private parseDate(dateString: string): Date {
    const [day, month, year] = dateString.split('/').map(Number);
    return new Date(year, month - 1, day); // O mês em JavaScript é baseado em zero, então subtrai 1.
  }
}
