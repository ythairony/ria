import { Component } from '@angular/core';
import { EstudanteService } from './estudante.service';
import { NgForm } from '@angular/forms';
import { Estudante } from 'src/model/estudante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prova2';
  estudante: any; // Variável para armazenar o estudante
  postagens: any[] = []; // Array para armazenar as postagens


  constructor(private estudanteService: EstudanteService) {}

  adicionarEstudante(form: NgForm): void {
    if (form.valid) {
      // Crie um objeto estudante com os valores do formulário
      const novoEstudante: Estudante = {
        matricula: form.value.matricula,
        username: form.value.usuario,  
        email: form.value.email
      };
  
      // Chame o serviço para adicionar o estudante
      this.estudanteService.adicionarEstudante(novoEstudante).subscribe(
        response => {
          // Lógica de sucesso, se necessário
          console.log('Estudante adicionado com sucesso!', response);
          
          const novoPost = {
            titulo: 'Meu primeiro post',
            descricao: 'Descrição do post',
            dataHora: new Date().toISOString()
          };
          
          this.estudanteService.adicionarPostParaEstudante(response.matricula, novoPost).subscribe(
            postResponse => {
              console.log('Post adicionado com sucesso!', postResponse);
              // this.obterPostagensDoEstudante();
            },
            error => {
              console.error('Erro ao adicionar post', error);
            }
          );
          
        },
        


        error => {
          // Lógica de tratamento de erro, se necessário
          console.error('Erro ao adicionar estudante', error);
        });

      
  
      // Limpe o formulário após a adição do estudante
      form.resetForm();
    }
  }
  obterPostagensDoEstudante(): void {
    if (this.estudante && this.estudante.matricula) {
      this.estudanteService.getPostagensDoEstudante(this.estudante.matricula).subscribe(
        postagens => {
          console.log('Postagens do estudante:', postagens);
          this.postagens = postagens.map(post => {
            // Formate a data-hora no formato desejado (dd/MM/aaaa hh:mm:ss)
            const dataHoraFormatada = new Date(post.dataHora).toLocaleString('pt-BR');
            return { ...post, dataHoraFormatada };
          });
        },
        error => {
          console.error('Erro ao obter postagens do estudante', error);
        }
      );
    }
  }
}
