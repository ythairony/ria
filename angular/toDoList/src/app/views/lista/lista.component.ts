import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../model/tarefa';
import { TarefaService } from 'src/app/service/tarefa.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  tarefas: Tarefa[] = [];

  constructor(private service: TarefaService) { }

  ngOnInit() {
    this.service.getTarefas().subscribe(data => this.tarefas = data);
  }
}