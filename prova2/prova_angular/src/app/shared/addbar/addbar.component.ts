import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addbar',
  templateUrl: './addbar.component.html',
  styleUrls: ['./addbar.component.css']
})
export class AddbarComponent {
  novaLinguagem: string = '';

  @Output() adicionarItemEvent = new EventEmitter<string>();

  adicionarItem() {
    if (this.novaLinguagem.trim() !== '') {
      this.adicionarItemEvent.emit(this.novaLinguagem);
      this.novaLinguagem = '';
    }
  }
}
